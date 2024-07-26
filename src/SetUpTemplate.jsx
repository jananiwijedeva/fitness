import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  ButtonGroup,
  Button,
  Box,
  Typography,
} from "@mui/material";

import MarketingIcon from "@mui/icons-material/BusinessCenter";
import BuildIcon from "@mui/icons-material/Build";
import NotificationsIcon from "@mui/icons-material/Notifications";

const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  width: "100%",
  "& .MuiButton-root": {
    flex: 1,
    backgroundColor: "white",
    color: "black",
  },
}));

const CustomButton = styled(Button)({
  color: 'black',
  backgroundColor: '#fff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  '&:active': {
    backgroundColor: 'lightgray',
  }
});

function SetUpTemplate() {
  const [subSelection, setSubSelection] = useState("Marketing");
  const [selectedValue, setSelectedValue] = useState("custom");

  const handleSubChange = (value) => {
    setSubSelection(value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      padding={2}
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 1,
        height: "auto",
      }}
    >
      <Typography level="body-ms" mb={3} align="left">
        Choose the categoty ....
      </Typography>
      <CustomButtonGroup variant="contained" >
        <CustomButton
          onClick={() => handleSubChange("Marketing")}
          startIcon={<MarketingIcon />}
          value="Marketing"
        >
          Marketing
        </CustomButton>
        <CustomButton
          onClick={() => handleSubChange("Utility")}
          startIcon={<NotificationsIcon />}
          value="Utility"
        >
          Utility
        </CustomButton>
        <CustomButton
          onClick={() => handleSubChange("Authentication")}
          startIcon={<BuildIcon />}
          value="Authentication"
        >
          Authentication
        </CustomButton>
      </CustomButtonGroup>

      <Box mt={2} padding={5}>
        {subSelection === "Marketing" && (
          <RadioGroup defaultValue="custom" onChange={handleChange}>
            <FormControlLabel
              value="custom"
              control={<Radio />}
              label={
                <Box>
                  <Typography level="body-sm" align="left">
                    Custom
                  </Typography>
                  <Typography level="body-xs" color="textSecondary" mb={1}>
                    Send promotions or announcements to increase awareness and
                    engagement.
                  </Typography>
                </Box>
              }
              sx={{
                backgroundColor:
                  selectedValue === "custom" ? "#f0f5ff" : "transparent",
                borderRadius: 1,
                "& .MuiFormControlLabel-label": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
              }}
            />
            <FormControlLabel
              value="catalogue"
              control={<Radio />}
              label={
                <Box>
                  <Typography level="body-sm" align="left">
                    Catalogue
                  </Typography>
                  <Typography level="body-xs" color="textSecondary" mb={1}>
                    Send messages about your entire catalogue or multiple
                    products from it.
                  </Typography>
                </Box>
              }
              sx={{
                backgroundColor:
                  selectedValue === "catalogue" ? "#f0f5ff" : "transparent",
                borderRadius: 1,
                "& .MuiFormControlLabel-label": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
              }}
            />
            <FormControlLabel
              value="flows"
              control={<Radio />}
              label={
                <Box>
                  <Typography level="body-sm" align="left">
                    Flows
                  </Typography>
                  <Typography level="body-xs" color="textSecondary" mb={1}>
                    Send a form to capture interests, appointment requests, or
                    run surveys.
                  </Typography>
                </Box>
              }
              sx={{
                backgroundColor:
                  selectedValue === "flows" ? "#f0f5ff" : "transparent",
                borderRadius: 1,
                "& .MuiFormControlLabel-label": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
              }}
            />
          </RadioGroup>
        )}
        {subSelection === "Utility" && (
                  <RadioGroup defaultValue="custom" onChange={handleChange}>
                    <FormControlLabel
                      value="custom"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography level="body-sm" align="left">
                            Custom
                          </Typography>
                          <Typography
                            level="body-xs"
                            color="textSecondary"
                            mb={1}
                          >
                            Send messages about an existing order or account
                          </Typography>
                        </Box>
                      }
                      sx={{
                        backgroundColor:
                          selectedValue === "custom"
                            ? "#f0f5ff"
                            : "transparent",
                        borderRadius: 1,
                        "& .MuiFormControlLabel-label": {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                      }}
                    />
                    <FormControlLabel
                      value="flows"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography level="body-sm" align="left">
                            Flows
                          </Typography>
                          <Typography
                            level="body-xs"
                            color="textSecondary"
                            mb={1}
                          >
                            Sent a form to collect feedback, sent reminders or
                            manage orders
                          </Typography>
                        </Box>
                      }
                      sx={{
                        backgroundColor:
                          selectedValue === "flows" ? "#f0f5ff" : "transparent",
                        borderRadius: 1,
                        "& .MuiFormControlLabel-label": {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                      }}
                    />
                  </RadioGroup>
                )}
              {subSelection === "Authentication" && (
                    <RadioGroup defaultValue="custom" onChange={handleChange}>
                    <FormControlLabel
                      value="custom"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography level="body-sm" align="left">
                            One -Time passcode
                          </Typography>
                          <Typography
                            level="body-xs"
                            color="textSecondary"
                            mb={1}
                          >
                            Send code to verify a transaction or login
                          </Typography>
                        </Box>
                      }
                      sx={{
                        backgroundColor:
                          selectedValue === "custom"
                            ? "#f0f5ff"
                            : "transparent",
                        borderRadius: 1,
                        "& .MuiFormControlLabel-label": {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                      }}
                    />
                    </RadioGroup>
                    
                )}
            </Box>
          </Box>

    );
}

export default SetUpTemplate