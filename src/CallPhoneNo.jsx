import {
    Box,
    FormHelperText,
    Typography,
    IconButton,
    TextField,
    MenuItem,
  } from "@mui/material";
  import Alert from "@mui/joy/Alert";
  import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
  import React from "react";
  
  const action = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];
  const type = [
    { value: "url1", label: "url1" },
    { value: "url2", label: "url2" },
    { value: "url3", label: "url3" },
    { value: "url4", label: "url4" },
  ];
  function CallPhoneNo() {
    return (
      <Box>
            <Alert
              variant="outlined"
              color="neutral"
              endDecorator={
                <IconButton variant="plain" size="sm" color="neutral">
                  <CloseRoundedIcon />
                </IconButton>
              }
            >
              <TextField
                select
                label="Type of action"
                value="1"
                variant="outlined"
                style={{ width: "200px", textAlign: "left"}}
              >
                {action.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Button Text"
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 25 }}
                helperText="13/25"
                sx={{ width: "670px", marginTop:'22px' }}
              />
              <TextField
                select
                label="Country"
                value="en"
                variant="outlined"
                style={{ width: "200px", textAlign: "left" }}
              >
                {type.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 2000 }}
                helperText="0/2000"
                sx={{ width: "670px", marginTop:'22px' }}
              />
            </Alert>
          </Box>
    );
}
export default CallPhoneNo;