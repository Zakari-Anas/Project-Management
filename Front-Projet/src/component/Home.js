import React, { useEffect, useMemo, useState } from 'react';
import AxiosInstance from './Axios';
import { MaterialReactTable } from 'material-react-table';
import Dayjs from 'dayjs';
import { Box, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home = () => {
    const [myData, setMydata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null); // Store the project to delete
    const [projectManagers, setProjectManagers] = useState([]);

    const GetProject = () => {
        AxiosInstance.get(`project/`).then((res) => {
            setMydata(res.data);
            setLoading(false);
        });
    };

    const GetProjectManagers = () => {
        AxiosInstance.get(`projectManager/`).then((res) => {
            setProjectManagers(res.data);
            setLoading(false);
            console.log(res.data);
        });
    };

    useEffect(() => {
        GetProject();
        GetProjectManagers();
    }, []);

    const handleDeleteClick = (project) => {
        setSelectedProject(project);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedProject(null);
    };

    const handleConfirmDelete = () => {
        if (selectedProject) {
            AxiosInstance.delete(`project/${selectedProject.id}/`).then(() => {
                setMydata((prevData) => prevData.filter((item) => item.id !== selectedProject.id));
                handleCloseDialog(); // Close the dialog after deleting
            });
        }
    };

    // Helper function to get the manager's name by their ID
    const getManagerNameById = (managerId) => {
        const manager = projectManagers.find((m) => m.id === managerId);
        return manager ? manager.name : 'Unknown';
    };

    const columns = useMemo(
        () => [
            { accessorKey: 'name', header: 'Name', size: 150 },
            { accessorKey: 'description', header: 'Description', size: 200 },
            {
                accessorFn: (row) => getManagerNameById(row.ProjectManager), // Display manager's name
                header: 'Project Manager',
                size: 150,
            },
            { accessorKey: 'status', header: 'Status', size: 150 },
            { accessorKey: 'comments', header: 'Comments', size: 200 },
            {
                accessorFn: (row) => Dayjs(row.startDate).format('DD-MM-YYYY'),
                header: 'Start date',
                size: 150,
            },
            {
                accessorFn: (row) => Dayjs(row.endDate).format('DD-MM-YYYY'),
                header: 'End date',
                size: 150,
            },
        ],
        [projectManagers],
    );

    return (
        <div>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <MaterialReactTable
                    columns={columns}
                    data={myData}
                    enableRowActions
                    renderRowActions={({ row }) => (
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                            <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error" onClick={() => handleDeleteClick(row.original)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    )}
                />
            )}

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete this project: {selectedProject?.name}?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Home;
