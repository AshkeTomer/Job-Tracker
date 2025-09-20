import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Paper,
    CircularProgress,
    Divider,
    Container,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Resume() {
    const [file, setFile] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFeedback('');
};


const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);

    try {
        setLoading(true);
        const res = await axios.post('http://localhost:4000/analyze', formData);
        setFeedback(res.data.feedback);
    } catch (error) {
        setFeedback('Failed to analyze resume. Please try again.');
        console.error('Resume analysis failed:', error);
    } finally {
        setLoading(false);
    }
};

const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('Logged in as:', user.displayName);
        navigate('/resume');
    } catch (error) {
    console.error('Login failed:', error);
    }
};

return (
<>
    {/* Maintenance Ribbon */}
    <div className="maintenance-ribbon">
        UNDER MAINTENANCE
    </div>
    
    { user ? (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <ToastContainer theme='dark' autoClose={3000} />
            
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography 
                    className="gradient-text"
                    variant="h3" 
                    fontWeight={800} 
                    sx={{ mb: 2, letterSpacing: '-0.02em' }}>
                    Resume Analyzer
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'rgba(229, 231, 235, 0.8)',
                        maxWidth: '600px',
                        mx: 'auto'
                    }}>
                    Get AI-powered insights to improve your resume and land more interviews
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

                <Box sx={{ mb: 4 }}>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        id="upload-resume"
                    />
                    <label htmlFor="upload-resume">
                        <Button
                            className="modern-button"
                            variant="contained"
                            component="span"
                            size="large"
                            startIcon={<UploadFileIcon />}
                            sx={{ 
                                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                color: '#fff',
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                mb: 3,
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)'
                                }
                            }}>
                            {file ? 'Change PDF File' : 'Upload PDF Resume'}
                        </Button>
                    </label>
                </Box>

                {file && (
                    <Box 
                        className="glass-card"
                        sx={{ 
                            p: 3, 
                            mb: 4,
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.3)'
                        }}>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: '#3b82f6',
                                fontWeight: 600,
                                mb: 1
                            }}>
                            📄 File Selected
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: 'rgba(229, 231, 235, 0.9)',
                                wordBreak: 'break-all'
                            }}>
                            {file.name}
                        </Typography>
                    </Box>
                )}

                {file ? (
                    <Button
                        className="modern-button"
                        variant='contained'
                        size="large"
                        onClick={handleUpload}
                        disabled={loading}
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
                        {loading ? 'Analyzing...' : '🔍 Analyze Resume'}
                    </Button>
                ) : (
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: 'rgba(229, 231, 235, 0.6)',
                            fontStyle: 'italic',
                            mb: 3
                        }}>
                        Please upload a PDF file to get started
                    </Typography>
                )}

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
                            🤖 ResuBot Suggestions
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
    ):(
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
                    Resume Analyzer
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
            
                    <input
                        type="file"
                        accept=".pdf"
                        disabled
                        style={{ display: 'none' }}
                        id="upload-resume"
                    />
                    
                    <label htmlFor="upload-resume">
                        <Button
                            variant="contained"
                            component="span"
                            startIcon={<CloudUploadIcon />}
                            sx={{ backgroundColor: '#3b82f6', color: '#fff', mb: 2 }}>
                            Upload PDF
                        </Button>
                    </label>
            
                    <Typography variant="body2" sx={{ mb: 2, color: '#e5e7eb' }}>
                        {file ? `Selected: ${file.name}` : 'No file selected'}
                    </Typography>

                    <Button
                        variant='contained'
                        color="error"
                        onClick={handleGoogleLogin}
                        sx={{ color: '#e5e7eb', borderColor: '#3b82f6' }}>
                            Sign in to analyze
                    </Button>
                </Paper>
            </Box>
        </>
    )}
</>
);}

export default Resume;
