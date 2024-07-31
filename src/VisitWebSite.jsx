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
import Checkbox from "@mui/joy/Checkbox";
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
function VisitWebSite() {
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
              helperText="13/25"
              sx={{ width: "670px", marginTop:'22px' }}
            />
            <TextField
              select
              label="URL Type"
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
              label="Website URL"
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 2000 }}
              helperText="0/2000"
              sx={{ width: "670px", marginTop:'22px' }}
            />
          </Alert>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
      >
        <Alert
          variant="outlined"
          color="neutral"
          startDecorator={<Checkbox />}
          sx={{ backgroundColor: "lightgray" }}
        >
          <Typography align="left">
            {" "}
            You derect meta to use link tracking to report website clicks. When
            this box is unclicked, you will not see insights for website clicks{" "}
          </Typography>
        </Alert>
      </Box>
    </Box>
  );
}

export default VisitWebSite;
