import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Box,
} from '@mui/material';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function AddJobModal({ open, handleClose, onSubmit }) {
    const [form, setForm] = useState({
        dataApplied: new Date().toISOString().split('T')[0],
        companyName: '',
        companyDescription: '',
        jobTitle: '',
        location: '',
        linkToPost: '---',
        contactPerson: '---',
        contactInformation: '---',
        applicationStatus: 'Submitted',
        interviewDate: '---',
        followUpDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = () => {
        const errorNotify = () => toast.error('Please fill in required fields', { position: 'top-center', style: {textAlign : 'center'}});

        if (!form.companyName || !form.jobTitle || !form.companyDescription) {
            errorNotify();
            return;
        }
        
        onSubmit(form);
        handleClose();
    };

    return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <ToastContainer theme='dark' autoClose={5000} />
        <DialogTitle sx={{ backgroundColor: '#2a2a3c', color: '#fff', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
            Add New Job
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: '#2a2a3c', color: '#fff' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
                label="Company Name"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                variant="filled"
                fullWidth
                required
                sx={{
                    '& .MuiInputBase-input': {
                        color: '#f1f5f9',
                        },
                    '& .MuiInputLabel-root': {
                        color: '#cbd5e1',
                        },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#3b82f6',
                        },
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#2d2f45',
                        },
                    '& .MuiFilledInput-root:hover': {
                        backgroundColor: '#31354d',
                        },
                    '& .MuiFilledInput-root.Mui-focused': {
                        backgroundColor: '#2d2f45',
                        borderBottom: '2px solid #3b82f6',
                        },
                    }}/>

            <TextField
                label="Company Description"
                name="companyDescription"
                value={form.companyDescription}
                onChange={handleChange}
                variant="filled"
                fullWidth
                required
                sx={{
                    '& .MuiInputBase-input': {
                        color: '#f1f5f9',
                        },
                    '& .MuiInputLabel-root': {
                        color: '#cbd5e1', 
                        },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#3b82f6', 
                        },
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#2d2f45',
                        },
                    '& .MuiFilledInput-root:hover': {
                        backgroundColor: '#31354d',
                        },
                    '& .MuiFilledInput-root.Mui-focused': {
                        backgroundColor: '#2d2f45',
                        borderBottom: '2px solid #3b82f6',
                        },
                    }}/>

            <TextField
                label="Job Title"
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                variant="filled"
                fullWidth
                required
                sx={{
                    '& .MuiInputBase-input': {
                        color: '#f1f5f9',
                        },
                    '& .MuiInputLabel-root': {
                        color: '#cbd5e1',
                        },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#3b82f6',
                        },
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#2d2f45',
                        },
                    '& .MuiFilledInput-root:hover': {
                        backgroundColor: '#31354d',
                        },
                    '& .MuiFilledInput-root.Mui-focused': {
                        backgroundColor: '#2d2f45',
                        borderBottom: '2px solid #3b82f6',
                        },
                    }}/>

            <TextField
                label="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
                variant="filled"
                fullWidth
                sx={{
                    '& .MuiInputBase-input': {
                        color: '#f1f5f9', 
                        },
                    '& .MuiInputLabel-root': {
                        color: '#cbd5e1',
                        },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#3b82f6', 
                        },
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#2d2f45', 
                        },
                    '& .MuiFilledInput-root:hover': {
                        backgroundColor: '#31354d',
                        },
                    '& .MuiFilledInput-root.Mui-focused': {
                        backgroundColor: '#2d2f45',
                        borderBottom: '2px solid #3b82f6',
                        },
                    }}/>
            
            <TextField
                label="Link to post"
                name="linkToPost"
                value={form.linkToPost}
                onChange={handleChange}
                variant="filled"
                fullWidth
                sx={{
                    '& .MuiInputBase-input': {
                        color: '#f1f5f9', 
                        },
                    '& .MuiInputLabel-root': {
                        color: '#cbd5e1',
                        },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#3b82f6', 
                        },
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#2d2f45', 
                        },
                    '& .MuiFilledInput-root:hover': {
                        backgroundColor: '#31354d',
                        },
                    '& .MuiFilledInput-root.Mui-focused': {
                        backgroundColor: '#2d2f45',
                        borderBottom: '2px solid #3b82f6',
                        },
                    }}/>
            </Box>
        </DialogContent>

        <DialogActions sx={{ backgroundColor: '#2a2a3c', display: 'flex', justifyContent: 'center', gap: 4 }}>
            <Button variant="outlined" color="error" onClick={handleClose}
            sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                Cancel
            </Button>
            <Button variant="contained" color="success" onClick={handleFormSubmit}
            sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                Add Job
            </Button>
        </DialogActions>
    </Dialog>
    );
}

export default AddJobModal;  