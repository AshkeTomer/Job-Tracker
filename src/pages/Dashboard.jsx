import { useState } from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection } from 'firebase/firestore';
import JobTable from '../components/JobTable';
import AddJobModal from '../components/AddJobModal';
import { firestore, auth } from '../firebase';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddJob = async (jobData) => {
    try {
      await addDoc(collection(firestore, 'jobApplications'), {
        ...jobData,
        userId: user.uid,
        createdAt: new Date(),
      });
    } catch (err) {
      console.error('Failed to add job:', err);
    }
  };

  return (
    <>
      {user ? (
        <div style={{ 
          padding: isMobile ? '10px' : '20px', 
          fontSize: isMobile ? '18px' : '25px', 
          color: 'white' 
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: isMobile ? 'center' : 'right',
            mb: isMobile ? 2 : 0
          }}>              
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#3b82f6',
                color: '#e5e7eb',
                fontWeight: 'bold',
                mb: isMobile ? 2 : 4,
                fontSize: isMobile ? '0.85rem' : '1rem',
                padding: isMobile ? '6px 12px' : '8px 16px',
              }}
              onClick={handleOpen}
            >
              {isMobile ? '+ Add Job' : '+ Add New Job'}
            </Button>
          </Box>

          <JobTable user={user} />

          <AddJobModal
            open={open}
            handleClose={handleClose}
            onSubmit={handleAddJob}
          />
        </div>
      ) : (
        <div style={{ 
          padding: isMobile ? '10px' : '20px', 
          fontSize: isMobile ? '18px' : '25px', 
          color: 'white' 
        }}>
          <h1 style={{ 
            marginBottom: '2rem',
            fontSize: isMobile ? '1.5rem' : '2rem'
          }}>
            Please log in to see your dashboard!
          </h1>
          <JobTable />
        </div>
      )}
    </>
  );
}

export default Dashboard;
