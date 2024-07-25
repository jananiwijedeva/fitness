import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";
import EditTemplate from "./EditTemplate";
import SetUpTemplate from "./SetUpTemplate";


const MainDiv = styled("div")({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "auto",
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top-left",
  backgroundColor: "#f0f5ff",
});


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

  const handleMainChange = (event) => {
    const value = event.target.value;
    setMainSelection(value);
  };

  const renderBoxContent = () => {
    switch (mainSelection) {
      case 'Set Up Template':
        return <SetUpTemplate/>;
      case 'Edit Template':
        return (
          <EditTemplate/>
        );
      case 'Submit for Review':
        return <Box ></Box>;
      default:
        return null;
    }
  };

  return (
    <MainDiv>
      <Typography variant="h5" padding={5}>
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
            // sx={{
            //   backgroundColor: "white",
            //   borderRadius: 2,
            //   boxShadow: 1,
            //   height: "auto",
            // }}
          >
            {renderBoxContent()}
          </Box>
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
