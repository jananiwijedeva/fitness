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
  
  function CopyOfferCode() {
    return (
      <Box>
        <Box mb={1} sx={{ display: "flex", alignItems: "center" }}>
          <Typography align="left">Call to action </Typography>
          <FormHelperText>- optional</FormHelperText>
        </Box>
        <Box mb={2} p={2} sx={{ backgroundColor: "lightgray" }} borderRadius={2}>
          <Box
            sx={{
              alignItems: "center",
              flexDirection: "row",
              gap: 2, 
            }}
          >
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
                sx={{ width: "670px"}}
              />
              <TextField
                label="Offer code"
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 15 }}
                helperText="2/15"
                sx={{ width: "670px", marginTop:"22px"}}
              />
            </Alert>
          </Box>
        </Box>
        </Box>

    );
}
export default CopyOfferCode; 