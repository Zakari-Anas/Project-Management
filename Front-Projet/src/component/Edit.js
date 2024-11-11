import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MyDatePicker from './Forms/DatePicker'
import MyTextField from './Forms/TextFields'
import SelectForm from './Forms/SelectForm'
import CommentField from './Forms/CommentField'
import { useForm } from 'react-hook-form'
import axiosInstance from './Axios'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Dayjs from 'dayjs';
import AxiosInstance from './Axios'
import { set } from 'mongoose'
function Edit() {

    const navigate = useNavigate()

    const [project, setProject] = useState({})
    const [ProjectManager, setProjectManager] = React.useState()
    const [loading, setLoading] = React.useState(true)

    const hardCodedData = [
        { id: '', name: 'None' },
        { id: 'Open', name: 'Open' },
        { id: 'In Progress', name: 'In Progress' },
        { id: 'Completed', name: 'Completed' },
    ]


    const GetProjectManagers = () => {
        AxiosInstance.get(`projectManager/`).then((res) => {
            setProjectManager(res.data);
            setLoading(false);
            console.log(res.data)
        });
    };

    useEffect(() => {
        GetProjectManagers();
    }, []);
    const data = useParams()

    const id = data.id


    const defaultValues = {
        name: '',
        status: '',
        description: '',
        Comment: ''
    }

    const { handleSubmit, setValue, reset, control } = useForm({ defaultValues: defaultValues })

    const GetProject = () => {
        axiosInstance.get(`project/${id}`).then((res) => {
            setValue('name', res.data.name)
            setValue('status', res.data.status)
            setValue('ProjectManager', res.data.ProjectManager)
            setValue('description', res.data.description)
            setValue('Comment', res.data.comments)
            setValue('start_date', dayjs(res.data.startDate))
            setValue('end_date', dayjs(res.data.endDate))
            console.log(res.data)
        })


    }

    useEffect(() => {

        GetProject();


    }, []);


    const submition = (data) => {

        const start_date = dayjs(data.start_date.$d).format('YYYY-MM-DD')
        const end_date = dayjs(data.end_date.$d).format('YYYY-MM-DD')
        axiosInstance.put(`project/${id}/`, {
            name: data.name,
            ProjectManager: data.ProjectManager,
            description: data.description,
            startDate: start_date,
            endDate: end_date,
            comments: data.Comment,
            status: data.status
        }).then((res) => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })


    }



    return (
        <div>
            {loading ? <p>Loading data...</p> :
                <form onSubmit={handleSubmit(submition)}>
                    <Box sx={{ display: 'flex', width: '100%', backgroundColor: '#00003f', marginBottom: "20px" }}>

                        <Typography sx={{ marginLeft: '20px', color: "#ffff" }}>
                            Add a New Project
                        </Typography>

                    </Box>


                    <Box sx={{ display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column', gap: '20px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                            <MyTextField label="Name" placeholder="Provide a Name for the Project" name="name" control={control} />
                            <MyDatePicker label="Start Date" name="start_date" control={control} />
                            <MyDatePicker label="End Date" name="end_date" control={control} />

                        </Box>


                        <Box sx={{ display: 'flex', gap: "20px", flexDirection: 'row', justifyContent: "space-around" }}>
                            <SelectForm label="Status" name="status" control={control} options={hardCodedData} />
                            <SelectForm label="Project Manager" name="ProjectManager" control={control} options={ProjectManager} width={"150px"} />
                            <MyTextField label="description" placeholder="Provide a description for the Project" name="description" control={control} />
                            <CommentField label="Comment" placeholder="Provide comments" name="Comment" control={control} />

                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>

                            <Button type="submit" variant="contained" color="primary" sx={{ width: '100px', alignSelf: 'center' }}>Submit</Button>

                        </Box>
                    </Box>
                </form>
            }

        </div>
    )
}

// name = models.CharField(unique = True, max_length = 100)
// description = models.TextField()
// startDate = models.DateField()
// endDate = models.DateField()
// comments = models.CharField(max_length = 100, blank = True, null = True)
// status = models.CharField(max_length = 100)
// created_at = models.DateTimeField(auto_now_add = True)
// modified_at = models.DateTimeField(auto_now = True)

export default Edit
