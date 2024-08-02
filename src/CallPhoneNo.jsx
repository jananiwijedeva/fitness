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
import React, { useState } from "react";

const action = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

const type = [
  { label: "+1 USA", value: "us" },
  { label: "+44 UK", value: "uk" },
  { label: "+91 India", value: "in" },
  { label: "+33 France", value: "fr" },
  { label: "+49 Germany", value: "de" },
  { label: "+81 Japan", value: "jp" },
  { label: "+61 Australia", value: "au" },
  { label: "+55 Brazil", value: "br" },
  { label: "+27 South Africa", value: "za" },
  { label: "+86 China", value: "cn" },
  { label: "+39 Italy", value: "it" },
  { label: "+7 Russia", value: "ru" },
  { label: "+34 Spain", value: "es" },
  { label: "+52 Mexico", value: "mx" },
  { label: "+41 Switzerland", value: "ch" },
  { label: "+31 Netherlands", value: "nl" },
  { label: "+47 Norway", value: "no" },
  { label: "+62 Indonesia", value: "id" },
  { label: "+82 South Korea", value: "kr" },
  { label: "+971 United Arab Emirates", value: "ae" }
];

function CallPhoneNo() {
  const [visible, setVisible] = useState(true);
  const [actionValue, setActionValue] = useState("1");
  const [countryValue, setCountryValue] = useState("en");

  return (
    visible && (
      <Box>
        <Alert
          variant="outlined"
          color="neutral"
          endDecorator={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setVisible(false)}
            >
              <CloseRoundedIcon />
            </IconButton>
          }
        >
          <TextField
            select
            label="Type of action"
            value={actionValue}
            onChange={(e) => setActionValue(e.target.value)}
            variant="outlined"
            style={{ width: "200px", textAlign: "left" }}
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
            sx={{ width: "670px", marginTop: "22px" }}
          />
          <TextField
            select
            label="Country"
            value={countryValue}
            onChange={(e) => setCountryValue(e.target.value)}
            variant="outlined"
            style={{ width: "300px", textAlign: "left" }}
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
            sx={{ width: "650px", marginTop: "22px" }}
          />
        </Alert>
      </Box>
    )
  );
}

export default CallPhoneNo;
