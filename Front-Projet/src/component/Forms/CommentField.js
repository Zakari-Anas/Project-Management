﻿import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function MultilineTextFields(props) {

    const { label, placeholder, name, width, control } = props
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,

            }) => (
                <TextField
                    sx={{ width: width }}
                    id="standard-multiline-static"
                    label={label}
                    onChange={onChange}
                    value={value}
                    multiline
                    rows={1}
                    variant="standard"
                    placeholder={placeholder}
                />
            )}

        />



    );
}
