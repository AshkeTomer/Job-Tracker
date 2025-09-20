import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, query, where, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc } from 'firebase/firestore';

function JobTable({ user }) {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from Firestore 
    useEffect(() => {
        if (!user) {
            setRows([]);
            setLoading(false);
            return;
        }
        // Query to get documents for the user
        const q = query(
            collection(firestore, 'jobApplications'),
            where('userId', '==', user.uid));

        // Listener for real-time updates
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((docItem) => ({
                id: docItem.id,
                ...docItem.data(),
            }));
            setRows(data);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    // Delete row from DB
    const handleDeleteClick = async (id) => {
        try {
            const docRef = doc(firestore, 'jobApplications', id);
            await deleteDoc(docRef);
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    // Update DB for an existing row
    const handleProcessRowUpdate = async (newRow) => {
        const docRef = doc(firestore, 'jobApplications', newRow.id);
    
        try {
            await updateDoc(docRef, { ...newRow });
            return newRow;
        } catch (error) {
            console.error('Error updating document:', error);
            return newRow;
        }
    };

    const columns = [
        { field: 'dataApplied', headerName: 'Date Applied', editable: false, flex: 1, headerAlign: 'center', },
        { field: 'companyName', headerName: 'Company Name', editable: true, flex: 1, headerAlign: 'center' },
        { field: 'companyDescription', headerName: 'Company Description', filterable: false, sortable: false, editable: true, flex: 1.5, headerAlign: 'center' },
        { field: 'jobTitle', headerName: 'Job Title', editable: true, flex: 1, headerAlign: 'center' },
        { field: 'location', headerName: 'Location', editable: true, flex: 1, headerAlign: 'center' },
        { field: 'linkToPost', headerName: 'Link to Post', filterable: false, sortable: false, editable: true, flex: 1, headerAlign: 'center' },
        { field: 'contactPerson', headerName: 'Contact Person', editable: true, flex: 1, headerAlign: 'center' },
        { field: 'contactInformation', headerName: 'Contact Information', editable: true, flex: 1.5, headerAlign: 'center' },
        { field: 'applicationStatus', headerName: 'Application Status', editable: true, flex: 1.5, headerAlign: 'center' },
        { field: 'interviewDate', headerName: 'Interview Date', editable: true, flex: 1.5, headerAlign: 'center' },
        { field: 'followUpDate', headerName: 'Follow-up Date', editable: true, flex: 1.5, headerAlign: 'center', },
        { field: 'delete', headerName: 'Delete', flex: 1, filterable: false, editable: false, headerAlign: 'center', renderCell: (params) => 
            (<IconButton
                onClick={() => handleDeleteClick(params.row.id)}
                color="error"
                aria-label="delete">
                <DeleteIcon />
            </IconButton>)}
    ];

    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            processRowUpdate={handleProcessRowUpdate}
            experimentalFeatures={{ newEditingApi: true }}
            disableSelectionOnClick
            autoWidth
            sx={{
                backgroundColor: '#3c3c55',
                color: '#e5e7eb',
                border: '1px solid #2a2a3c',
                fontFamily: 'system-ui, sans-serif',
                
                '& .MuiDataGrid-columnHeaders': {
                    borderBottom: '1px solid #3b3b4f',
                    backgroundColor: '#2a2a3c',
                    },
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: '#2a2a3c',
                    },
                '& .MuiDataGrid-columnHeaderTitle': {
                    color: '#f1f5f9',
                    fontWeight: 'bold',
                    },
                '& .MuiDataGrid-columnHeadersInner': {
                    backgroundColor: '#2a2a3c',
                    },
                '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid #2f2f3f',
                    borderRight: '1px solid #2f2f3f',
                    color: '#e5e7eb',
                    textAlign: 'center',
                    },
                '& .MuiDataGrid-row:hover': {
                    backgroundColor: '#2d2f45',
                    },
                '& .MuiDataGrid-footerContainer': {
                    backgroundColor: '#2a2a3c',
                    borderTop: '2px solid #3b3b4f',
                    },
                '& .MuiTablePagination-root': {
                    color: '#e2e8f0',
                    },
                '& .MuiTablePagination-actions svg': {
                    color: '#e2e8f0',
                    },
                '& .MuiDataGrid-selectedRowCount': {
                    visibility: 'hidden',
                    },
    }}/>
        </div>
    );
}

export default JobTable;