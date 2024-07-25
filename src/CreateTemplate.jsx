import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Grid,
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
import EditTemplate from "./EditTemplate";


const MainDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top-left",
  backgroundColor: "#f0f5ff",
});

const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  width: "100%",
  "& .MuiButton-root": {
    flex: 1,
    backgroundColor: "white",
    color: "black",
  },
  "& .MuiButton-root:hover": {
    backgroundColor: "lightgray",
  },
  "& .MuiButton-root.Mui-selected": {
    backgroundColor: "lightgray !important",
    color: "#fff !important",
    }

}));

const BottomBar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  position: "fixed",
  bottom: 0,
  left: 0,
  boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
  borderRadius: 2,
});

function CreateTemplate() {
  const [mainSelection, setMainSelection] = useState("Set Up Template");
  const [subSelection, setSubSelection] = useState("Marketing");
  const [selectedValue, setSelectedValue] = useState("custom");

  const handleMainChange = (event) => {
    const value = event.target.value;
    setMainSelection(value);
    setSubSelection(value);
  };

  const handleSubChange = (value) => {
    setSubSelection(value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <MainDiv>
      <Typography variant="h5" mb={10}>
        Create Template
      </Typography>
      <Grid container item spacing={5} xs={12} padding={3}>
        <Grid item xs={8}>
          <RadioGroup row value={mainSelection} onChange={handleMainChange}>
            <FormControlLabel
              value="Set Up Template"
              control={<Radio />}
              label="Set Up Template"
            />
            <FormControlLabel
              value="Edit Template"
              control={<Radio />}
              label="Edit Template"
            />
            <FormControlLabel
              value="Submit for Review"
              control={<Radio />}
              label="Submit for Review"
            />
          </RadioGroup>

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
            <Typography component="legend" mb={3}>
              {mainSelection}
            </Typography>
            {mainSelection === "Set Up Template" && (
              <>
                <Typography variant="body1" mb={3} align="left">
                  description
                </Typography>
                <CustomButtonGroup variant="contained">
                  <Button
                    onClick={() => handleSubChange("Marketing")}
                    startIcon={<MarketingIcon />}
                    value="Marketing"
                  >
                    Marketing
                  </Button>
                  <Button
                    onClick={() => handleSubChange("Utility")}
                    startIcon={<NotificationsIcon />}
                    value="Utility"
                  >
                    Utility
                  </Button>
                  <Button
                    onClick={() => handleSubChange("Authentication")}
                    startIcon={<BuildIcon />}
                    value="Authentication"
                  >
                    Authentication
                  </Button>
                </CustomButtonGroup>
              </>
            )}

            <Box mt={2} padding={5}>
              {mainSelection === "Set Up Template" &&
                subSelection === "Marketing" && (
                  <RadioGroup defaultValue="custom" onChange={handleChange}>
                    <FormControlLabel
                      value="custom"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography variant="body1" align="left">
                            Custom
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            mb={1}
                          >
                            Send promotions or announcement to increase
                            awareness and engagement.
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
                      value="catalogue"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography variant="body1" align="left">
                            Catalogue
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            mb={1}
                          >
                            Send messages about your entire catalogue or
                            multiple products from it
                          </Typography>
                        </Box>
                      }
                      sx={{
                        backgroundColor:
                          selectedValue === "catalogue"
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
                          <Typography variant="body1" align="left">
                            Flows
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            mb={1}
                          >
                            Send a form to capture interests, appointment
                            requests, or run surveys
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
              {mainSelection === "Set Up Template" &&
                subSelection === "Utility" && (
                  <RadioGroup defaultValue="custom" onChange={handleChange}>
                    <FormControlLabel
                      value="custom"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography variant="body1" align="left">
                            Custom
                          </Typography>
                          <Typography
                            variant="body2"
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
                          <Typography variant="body1" align="left">
                            Flows
                          </Typography>
                          <Typography
                            variant="body2"
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
              {mainSelection === "Set Up Template" &&
                subSelection === "Authentication" && (
                    <RadioGroup defaultValue="custom" onChange={handleChange}>
                    <FormControlLabel
                      value="custom"
                      control={<Radio />}
                      label={
                        <Box>
                          <Typography variant="body2" align="left">
                            One -Time passcode
                          </Typography>
                          <Typography
                            variant="body2"
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
          {mainSelection === "Edit Template" &&(
            <EditTemplate/>
          )}
        </Grid>

        <Grid item xs={4}>
          <Box
            padding={2}
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              boxShadow: 1,
              height: 500,
            }}
          >
            <Typography variant="h6">Template Preview</Typography>
          </Box>
        </Grid>
      </Grid>

      <BottomBar>
        <Button variant="outlined" sx={{ width: "100px" }}>
          Discard
        </Button>
        <Box>
          <Button variant="outlined" sx={{ mr: 1, width: "100px" }}>
            Previous
          </Button>
          <Button variant="contained" sx={{ width: "100px" }}>
            Next
          </Button>
        </Box>
      </BottomBar>
    </MainDiv>
  );
}

export default CreateTemplate;
