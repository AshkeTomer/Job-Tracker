import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Button,
    Typography,
    Paper,
    CircularProgress,
    TextField,
    Container,
    Divider
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Coverletter(){
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        jobTitle: '',
        companyName: '',
        jobDescription: '',
    });

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Logged in as:', user.displayName);
            navigate('/coverletter');
        } catch (error) {
        console.error('Login failed:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCoverLetter = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/coverletter', {
                jobTitle: formData.jobTitle,
                companyName: formData.companyName,
                jobDescription: formData.jobDescription,
            });
            setFeedback(response.data.coverLetter);
        } catch (error) {
            console.error('Error generating cover letter:', error);
            toast.error('Failed to generate cover letter. Please try again.', { position: 'top-center', style: {textAlign : 'center'}});
        }
        finally {
            setLoading(false);
        }
    }

    return(
        <>
            {/* Maintenance Ribbon */}
            <div className="maintenance-ribbon">
                UNDER MAINTENANCE
            </div>
            
            {user ? (
                <Container maxWidth="md" sx={{ py: 4 }}>
                    <ToastContainer theme='dark' autoClose={3000} />
                    
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography 
                            className="gradient-text"
                            variant="h3" 
                            fontWeight={800} 
                            sx={{ mb: 2, letterSpacing: '-0.02em' }}>
                            Cover Letter Generator
                        </Typography>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                color: 'rgba(229, 231, 235, 0.8)',
                                maxWidth: '600px',
                                mx: 'auto'
                            }}>
                            Create personalized cover letters tailored to your dream job
                        </Typography>
                    </Box>

                    <Paper
                        className="glass-card"
                        elevation={0}
                        sx={{
                            p: 6,
                            width: '100%',
                            maxWidth: 700,
                            mx: 'auto',
                            textAlign: 'center',
                            backgroundColor: 'transparent',
                        }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                            <TextField 
                                className="modern-input"
                                label="Job Title"
                                name="jobTitle" 
                                variant='filled' 
                                required 
                                fullWidth
                                helperText="Enter the job title you're applying for"
                                type="text"
                                value={formData.jobTitle}
                                onChange={handleChange}
                            />

                            <TextField 
                                className="modern-input"
                                label="Company Name"
                                name='companyName' 
                                variant='filled' 
                                required 
                                fullWidth
                                helperText="Enter the company name"
                                type='text'
                                value={formData.companyName}
                                onChange={handleChange}
                            />

                            <TextField 
                                className="modern-input"
                                label="Job Description" 
                                name='jobDescription'
                                variant='filled' 
                                required 
                                fullWidth
                                multiline
                                rows={4}
                                helperText="Paste the job description here"
                                value={formData.jobDescription}
                                onChange={handleChange}
                            />
                        </Box>
                        
                        <Button
                            className="modern-button"
                            variant="contained"
                            size="large"
                            startIcon={<CloudUploadIcon />}
                            onClick={handleCoverLetter}
                            disabled={loading || !formData.jobTitle || !formData.companyName || !formData.jobDescription}
                            sx={{ 
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                color: '#fff',
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                mb: 3,
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #059669, #047857)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
                                },
                                '&:disabled': {
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    color: 'rgba(255, 255, 255, 0.5)'
                                }
                            }}>
                            {loading ? 'Generating...' : 'Generate Cover Letter'}
                        </Button>

                        {loading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                                <CircularProgress 
                                    sx={{ 
                                        color: '#10b981',
                                        '& .MuiCircularProgress-circle': {
                                            strokeLinecap: 'round',
                                        }
                                    }} 
                                />
                            </Box>
                        )}

                        {feedback && (
                            <Box sx={{ mt: 4 }}>
                                <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                                <Typography 
                                    variant="h5" 
                                    fontWeight="bold" 
                                    sx={{
                                        color: '#e5e7eb',
                                        mb: 3,
                                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                    🤖 CoverBot Letter Proposal
                                </Typography>
                                <Paper
                                    className="glass-card"
                                    sx={{
                                        p: 4,
                                        whiteSpace: 'pre-wrap',
                                        color: '#f1f5f9',
                                        maxHeight: 500,
                                        overflowY: 'auto',
                                        textAlign: 'left',
                                        lineHeight: 1.7,
                                        fontSize: '1rem'
                                    }}>
                                    {feedback}
                                </Paper>
                            </Box>
                        )}
                    </Paper>
                </Container>
            ) : (
                <>
                    <div style={{ 
                        padding: '20px', 
                        fontSize: '25px', 
                        fontWeight:'bold', 
                        color: '#e5e7eb', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        background: '#c62828' }}>
                        <h1>
                            Log in to use this feature
                        </h1>
                    </div>
                    <Box
                        sx={{
                            minHeight: '100vh',
                            backgroundColor: '#0d1117',
                            color: '#e5e7eb',
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Typography variant="h4" fontWeight="bold" mb={4}>
                            Cover Letter Generator
                        </Typography>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                backgroundColor: '#161b22',
                                borderRadius: '12px',
                                width: '100%',
                                maxWidth: 600,
                                textAlign: 'center',
                            }}>
                            <Button
                                variant="contained"
                                component="span"
                                disabled
                                startIcon={<CloudUploadIcon />}
                                sx={{ backgroundColor: '#3b82f6', color: '#fff', mb: 2 }}>
                                Generate Cover Letter
                            </Button>
                            <Button
                                variant='contained'
                                color="error"
                                onClick={handleGoogleLogin}
                                sx={{ color: '#e5e7eb', borderColor: '#3b82f6', mt: 2 }}>
                                    Sign in to analyze
                            </Button>
                        </Paper>
                    </Box>
                </>
            )}
        </>
    );
}

export default Coverletter;
