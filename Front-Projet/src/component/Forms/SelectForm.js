import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

export default function SelectForm(props) {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const { label, name, control, width, options } = props

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant='standard'>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,

          }) => (
            <Select
              sx={{ width: width }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={onChange}
              value={value}
            >

              {
                options.map((option) => (

                  <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>


                ))
              }
            </Select>
          )}

        />
      </FormControl>
    </Box>
  );
}
