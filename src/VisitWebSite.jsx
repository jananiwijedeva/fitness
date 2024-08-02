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
const type = [
  { value: "url1", label: "url1" },
  { value: "url2", label: "url2" },
  { value: "url3", label: "url3" },
  { value: "url4", label: "url4" },
];

function VisitWebSite() {
  const [showAlert, setShowAlert] = useState(true);
  const [actionType, setActionType] = useState("1");
  const [urlType, setUrlType] = useState("url1");
  const [buttonText, setButtonText] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  return (
    <Box>
      {showAlert && (
        <Box mb={2} sx={{ backgroundColor: "lightgray" }} borderRadius={2}>
          <Box sx={{ alignItems: "center", flexDirection: "row", gap: 2 }}>
            <Alert
              variant="outlined"
              color="neutral"
              endDecorator={
                <IconButton
                  variant="plain"
                  size="sm"
                  color="neutral"
                  onClick={() => setShowAlert(false)}
                >
                  <CloseRoundedIcon />
                </IconButton>
              }
            >
              <TextField
                select
                label="Type of action"
                value={actionType}
                onChange={(e) => setActionType(e.target.value)}
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
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 25 }}
                helperText={`${buttonText.length}/25`}
                sx={{ width: "670px", marginTop: "22px" }}
              />
              <TextField
                select
                label="URL Type"
                value={urlType}
                onChange={(e) => setUrlType(e.target.value)}
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
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                variant="outlined"
                fullWidth
                inputProps={{ maxLength: 2000 }}
                helperText={`${websiteUrl.length}/2000`}
                sx={{ width: "670px", marginTop: "22px" }}
              />
            </Alert>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default VisitWebSite;
