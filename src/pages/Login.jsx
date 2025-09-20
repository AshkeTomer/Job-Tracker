import { Button, Box, Typography } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
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
    <Box
    sx={{
        minHeight: '100vh',
        backgroundColor: '#252525',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e5e7eb',
        flexDirection: 'column',
        gap: 2
    }}>
        <Typography variant="h4" fontWeight="bold">
            Welcome to Job Tracker
        </Typography>
    <Button
        onClick={handleGoogleLogin}
        variant="contained"
        sx={{ backgroundColor: '#3b82f6', color: '#fff' }}>
        Sign in with Google
    </Button>
    </Box>
);
}

export default Login;