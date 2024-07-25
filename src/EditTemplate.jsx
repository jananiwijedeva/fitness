import { Box, Typography, TextField, MenuItem } from "@mui/material";
import React from "react";

const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'hi', label: 'Hindi' },
    { value: 'bn', label: 'Bangla' },
  ];

function EditTemplate() {
  return (
    <>
      <Box
        padding={2}
        mt={3}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 1,
          height: "auto",
        }}
      >
        <Typography variant="h6"> Your template name</Typography>
      </Box>
      <Box
        padding={2}
        mt={3}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 1,
          height: "auto",
        }}
      >
        <Typography variant="h6" align="left" mb={2}> Template name and language </Typography>
        <Box display="flex" justifyContent="space-between"  mb={2}>
        <TextField
            label="Name your template"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 512 }}
            helperText="0/512"
            sx={{ width: '700px' }}
            />
        <TextField
          select
          label="Select language"
          value="en"
          variant="outlined"
          style={{ width: '200px', textAlign:'left'}}
        >
          {languages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
      </Box>

      <Box
        padding={2}
        mt={3}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 1,
          height: "auto",
        }}
      >
        <Typography variant="h6" align="left" mb={2}>
            Content
        </Typography>
        <Typography variant="body1" align="left">
            Fill in the header, body and footer sections of your template.
        </Typography>
        <TextField
            label="Header"
            variant="outlined"
            fullWidth
            margin="normal"
            helperText="Optional"
        />
        <TextField
            label="Body"
            variant="outlined"
            fullWidth
            margin="normal"
            helperText="Characters: 5/1024"
            multiline
            rows={4}
            defaultValue="Hello"
        />
      </Box>

    </>
  );
}
export default EditTemplate;
