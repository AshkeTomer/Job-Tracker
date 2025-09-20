import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-noBG.png';

function Header() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Logged in as:', user.displayName);
            navigate('/dashboard');
        } catch (error) {
        console.error('Login failed:', error);
        }
    };

    return (
    <AppBar 
        position="static" 
        color="transparent" 
        elevation={0}
        sx={{ 
            mb: 2,
            mt: '50px', // Add margin top to account for maintenance ribbon
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            py: 1
        }}>
        <Container maxWidth="xl">
            <Toolbar 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    px: { xs: 0, sm: 2 }
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img 
                            src={logo} 
                            alt="Job Tracker Logo" 
                            style={{ 
                                width: '70px', 
                                height: '70px',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </Link>
                    <Box>
                        {user ? (
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    color: '#e5e7eb',
                                    fontWeight: 600,
                                    fontSize: { xs: '1rem', sm: '1.25rem' }
                                }}>
                                Welcome, <span style={{ 
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>{user.displayName?.split(' ')[0]}</span>!
                            </Typography>
                        ) : (
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    color: '#e5e7eb',
                                    fontWeight: 600,
                                    fontSize: { xs: '1rem', sm: '1.25rem' }
                                }}>
                                Hello, <span style={{ color: '#9ca3af' }}>Guest</span>!
                            </Typography>
                        )}
                    </Box>
                </Box>
                
                <Box sx={{ 
                    display: 'flex', 
                    gap: { xs: 1, sm: 2 },
                    flexWrap: 'wrap',
                    alignItems: 'center'
                }}>
                    <Button 
                        className="modern-button"
                        variant='contained'
                        onClick={()=> navigate('/Dashboard')} 
                        sx={{ 
                            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                            color: '#fff',
                            fontWeight: 600,
                            px: { xs: 2, sm: 3 },
                            py: 1,
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                            '&:hover': {
                                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
                            }
                        }}>
                        Dashboard
                    </Button>
                    
                    <Button 
                        className="modern-button"
                        variant='contained'
                        onClick={()=> navigate('/Resume')} 
                        sx={{ 
                            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                            color: '#fff',
                            fontWeight: 600,
                            px: { xs: 2, sm: 3 },
                            py: 1,
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                            '&:hover': {
                                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)'
                            }
                        }}>
                        Resume
                    </Button>
                    
                    <Button 
                        className="modern-button"
                        variant='contained'
                        onClick={()=> navigate('/Qna')} 
                        sx={{ 
                            background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                            color: '#fff',
                            fontWeight: 600,
                            px: { xs: 2, sm: 3 },
                            py: 1,
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                            '&:hover': {
                                background: 'linear-gradient(135deg, #0891b2, #0e7490)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(6, 182, 212, 0.4)'
                            }
                        }}>
                        Q&A
                    </Button>

                    <Button 
                        className="modern-button"
                        variant='contained'
                        onClick={()=> navigate('/coverletter')} 
                        sx={{ 
                            background: 'linear-gradient(135deg, #10b981, #059669)',
                            color: '#fff',
                            fontWeight: 600,
                            px: { xs: 2, sm: 3 },
                            py: 1,
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                            '&:hover': {
                                background: 'linear-gradient(135deg, #059669, #047857)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
                            }
                        }}>
                        Cover Letter
                    </Button>
                    
                    { user ? (
                        <Button 
                            className="modern-button"
                            onClick={() => signOut(auth)} 
                            variant="contained" 
                            sx={{  
                                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                                color: '#fff',
                                fontWeight: 600,
                                px: { xs: 2, sm: 3 },
                                py: 1,
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(239, 68, 68, 0.4)'
                                }
                            }}>
                            Logout
                        </Button>
                    ) : (
                        <Button
                            className="modern-button"
                            onClick={handleGoogleLogin}
                            variant="contained"
                            sx={{ 
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                color: '#fff',
                                fontWeight: 600,
                                px: { xs: 2, sm: 3 },
                                py: 1,
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #059669, #047857)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
                                }
                            }}>
                            Sign in
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
    );
}

export default Header;
