import React from 'react'
import { Box, Typography } from '@mui/material'
import MyDatePicker from './Forms/DatePicker'
import MyTextField from './Forms/TextFields'
import SelectForm from './Forms/SelectForm'
import CommentField from './Forms/CommentField'
import { useForm } from 'react-hook-form'
function Create() {

    const { handleSubmit, reset, setValue, control } = useForm()
    return (
        <div>
            <Box sx={{ display: 'flex', width: '100%', backgroundColor: '#00003f', marginBottom: "20px" }}>

                <Typography sx={{ marginLeft: '20px', color: "#ffff" }}>
                    Create
                </Typography>

            </Box>


            <Box sx={{ display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: "20px" }}>
                    <MyTextField label="Name" placeholder="provide a Name for the Project" name="name" control={control} />
                    <MyDatePicker label="Start Date" name="start_date" control={control} />
                    <MyDatePicker label="End Date" name="end_date" control={control} />
                </Box>


                <Box>

                </Box>
            </Box>
        </div>
    )
}

export default Create
