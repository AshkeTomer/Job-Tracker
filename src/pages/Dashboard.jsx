import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection } from 'firebase/firestore';
import JobTable from '../components/JobTable';
import AddJobModal from '../components/AddJobModal';
import { firestore, auth } from '../firebase';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

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
        <div style={{ padding: '20px', fontSize: '25px', color: 'white' }}>
          <Box sx={{ display: 'flex', justifyContent: 'right' }}>              
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#3b82f6',
                color: '#e5e7eb',
                fontWeight: 'bold',
                mb: 4,
              }}
              onClick={handleOpen}
            >
              + Add New Job
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
        <div style={{ padding: '20px', fontSize: '25px', color: 'white' }}>
          <h1 style={{ marginBottom: '2rem' }}>
            Please log in to see your dashboard!
          </h1>
          <JobTable />
        </div>
      )}
    </>
  );
}

export default Dashboard;