import React, { useState } from "react";
import {
  Box,
  IconButton,
  TextField,
  MenuItem,
} from "@mui/material";
import Alert from "@mui/joy/Alert";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const action = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

function CopyOfferCode() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedAction, setSelectedAction] = useState("1");
  const [offerCode, setOfferCode] = useState("");

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleActionChange = (event) => {
    setSelectedAction(event.target.value);
  };

  const handleOfferCodeChange = (event) => {
    setOfferCode(event.target.value);
  };

  return (
    isVisible && (
      <Box>
        <Alert
          variant="outlined"
          color="neutral"
          endDecorator={
            <IconButton variant="plain" size="sm" color="neutral" onClick={handleClose}>
              <CloseRoundedIcon />
            </IconButton>
          }
        >
          <TextField
            select
            label="Type of action"
            value={selectedAction}
            onChange={handleActionChange}
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
            sx={{ width: "670px" }}
          />
          <TextField
            label="Offer code"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 15 }}
            value={offerCode}
            onChange={handleOfferCodeChange}
            helperText={`${offerCode.length}/15`}
            sx={{ width: "670px", marginTop: "22px" }}
          />
        </Alert>
      </Box>
    )
  );
}

export default CopyOfferCode;
