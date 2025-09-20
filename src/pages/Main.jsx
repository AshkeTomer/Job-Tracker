import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { Box, Typography, Container } from '@mui/material';

function Main() {
    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* Hero Section */}
            <Box 
                className="glass-card floating"
                sx={{ 
                    mt: 6, 
                    py: 6,
                    px: 4,
                    width: '80%', 
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mx: 'auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                {/* Background gradient overlay */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                    zIndex: -1
                }} />
                
                <Typography 
                    className="gradient-text"
                    sx={{ 
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '3rem' },
                        textAlign: 'center',
                        mb: 2,
                        letterSpacing: '-0.02em'
                    }}>
                    Your job hunt begins here!
                </Typography>
                
                <Typography 
                    variant='h6'
                    sx={{ 
                        color: 'rgba(229, 231, 235, 0.9)',
                        textAlign: 'center',
                        maxWidth: '800px',
                        lineHeight: 1.6,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                    }}>
                    Start your job search using the best AI tools in the market!<br/>
                    Track your applications, test your resume and generate personalized cover letters with a click of a button.
                </Typography>
            </Box>

            {/* Content Section */}
            <Box sx={{
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                width: '90%', 
                mx: 'auto', 
                gap: 4, 
                mt: 6
            }}>
                {/* Testimonials Section */}
                <Box 
                    className="glass-card modern-card"
                    sx={{
                        height: 'auto',
                        width: { xs: '100%', md: '40%' },
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '32px',
                        position: 'relative'
                    }}>
                    <Typography 
                        sx={{ 
                            color: '#e5e7eb',
                            fontWeight: 700,
                            fontSize: '28px',
                            mb: 4,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                        What Our Customers Say
                    </Typography>
                    
                    <Box sx={{ 
                        mb: 3, 
                        p: 3, 
                        background: 'rgba(255,255,255,0.08)', 
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(255,255,255,0.12)',
                            transform: 'translateY(-2px)'
                        }
                    }}>
                        <Typography sx={{ color: '#3b82f6', fontWeight: 'bold', mb: 1, fontSize: '16px' }}>
                            - Shani
                        </Typography>
                        <Typography sx={{ color: 'rgba(229, 231, 235, 0.9)', fontSize: '15px', lineHeight: 1.6 }}>
                            "This job tracker helped me organize my job search and land my dream position! The interface is intuitive and the features are exactly what I needed."
                        </Typography>
                    </Box>
                    
                    <Box sx={{ 
                        mb: 3, 
                        p: 3, 
                        background: 'rgba(255,255,255,0.08)', 
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(255,255,255,0.12)',
                            transform: 'translateY(-2px)'
                        }
                    }}>
                        <Typography sx={{ color: '#8b5cf6', fontWeight: 'bold', mb: 1, fontSize: '16px' }}>
                            - Michael
                        </Typography>
                        <Typography sx={{ color: 'rgba(229, 231, 235, 0.9)', fontSize: '15px', lineHeight: 1.6 }}>
                            "I was struggling to keep track of all my applications until I found this tool. Now I can see all my progress in one place!"
                        </Typography>
                    </Box>
                    
                    <Box sx={{ 
                        p: 3, 
                        background: 'rgba(255,255,255,0.08)', 
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(255,255,255,0.12)',
                            transform: 'translateY(-2px)'
                        }
                    }}>
                        <Typography sx={{ color: '#06b6d4', fontWeight: 'bold', mb: 1, fontSize: '16px' }}>
                            - Mark 
                        </Typography>
                        <Typography sx={{ color: 'rgba(229, 231, 235, 0.9)', fontSize: '15px', lineHeight: 1.6 }}>
                            "The resume and cover letter tools are fantastic. I've received more callbacks since using the suggestions provided by this platform."
                        </Typography>
                    </Box>
                </Box>

                {/* Products Section */}
                <Box 
                    className="glass-card modern-card"
                    sx={{
                        height: 'auto',
                        width: { xs: '100%', md: '50%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '32px',
                        position: 'relative'
                    }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography 
                            sx={{ 
                                color: '#e5e7eb',
                                fontWeight: 700,
                                fontSize: '28px',
                                mb: 4,
                                textAlign: 'center',
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                            Our Products
                        </Typography>
                        <ImageCarousel />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Main;
