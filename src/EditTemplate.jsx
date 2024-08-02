import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import Avatar from "@mui/material/Avatar";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { green } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VisitWebSite from "./VisitWebSite";
import CallPhoneNo from "./CallPhoneNo";
import CopyOfferCode from "./CopyOfferCode";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddVariable from "./AddVariable";

const WhiteButton = styled(Button)({
  color: "black",
  backgroundColor: "#fff",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bangla" },
];

const headers = [
  { value: "none", label: "None" },
  { value: "header1", label: "Text", icon: <TextFieldsIcon /> },
  { value: "header2", label: "Image", icon: <ImageIcon /> },
  { value: "header3", label: "Video", icon: <VideoLibraryIcon /> },
  { value: "header4", label: "Document", icon: <DescriptionIcon /> },
  { value: "header5", label: "Location", icon: <LocationOnIcon /> },
];
const buttons = [
  { value: "1", label: "Visit website", subtext: "2 buttons maximum" },
  { value: "2", label: "Call Phone Number", subtext: "1 button maximum" },
  { value: "3", label: "Copy offer code", subtext: "1 button maximum" },
];

function EditTemplate() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedHeader, setSelectedHeader] = useState("none");
  const [contentList, setContentList] = useState([]);

  const handleChange = (event) => {
    setSelectedHeader(event.target.value);
  };

  const handleMenuItemClick = (label) => {
    setSelectedLabel(label);
    setContentList([...contentList, { label }]);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  // const handleSelectionChange = (e) => {
  //   setSelectionStart(e.target.selectionStart);
  //   setSelectionEnd(e.target.selectionEnd);
  // };
  
  const renderContent = () => {
    switch (selectedHeader) {
      case "header1":
        return (
          <Box>
            <TextField
              label="Enter Text in English"
              fullWidth
              margin="normal"
              inputProps={{ maxLength: 60 }}
              helperText="0/60"
            />
            <WhiteButton
              variant="contained"
              startIcon={<AddIcon fontSize="small" />}
              sx={{
                display: "flex",
                alignItems: "right",
              }}
            >
              Add Variable
            </WhiteButton>
          </Box>
        );
      case "header2":
        return (
          <Box
            padding={1}
            sx={{ backgroundColor: "lightgray", borderRadius: "3px" }}
          >
            <Typography variant="h6" align="left">
              Sample for header content
            </Typography>
            <Typography variant="body1" align="left">
              To help us review your content, provide example of the variable or
              mrdia in the header. Do not indude any customer information. Cloud
              API hosted by Meta reviews templetes and variable parameters to
              protect the ssecurity and integrity of our services
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography mr={1}>Image: </Typography>
              <WhiteButton
                variant="contained"
                startIcon={<ImageIcon fontSize="small" />}
              >
                Choose JPG or PNG file
              </WhiteButton>
            </Box>
          </Box>
        );
      case "header3":
        return (
          <Box
            padding={1}
            sx={{ backgroundColor: "lightgray", borderRadius: "3px" }}
          >
            <Typography variant="h6" align="left">
              Sample for header content
            </Typography>
            <Typography variant="body1" align="left">
              To help us review your content, provide example of the variable or
              mrdia in the header. Do not indude any customer information. Cloud
              API hosted by Meta reviews templetes and variable parameters to
              protect the ssecurity and integrity of our services
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography mr={1}>Video: </Typography>
              <WhiteButton
                variant="contained"
                startIcon={<ImageIcon fontSize="small" />}
              >
                Choose MP4 file
              </WhiteButton>
            </Box>
          </Box>
        );
      case "header4":
        return (
          <Box
            padding={1}
            sx={{ backgroundColor: "lightgray", borderRadius: "3px" }}
          >
            <Typography variant="h6" align="left">
              Sample for header content
            </Typography>
            <Typography variant="body1" align="left">
              To help us review your content, provide example of the variable or
              mrdia in the header. Do not indude any customer information. Cloud
              API hosted by Meta reviews templetes and variable parameters to
              protect the ssecurity and integrity of our services
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography mr={1}>Document: </Typography>
              <WhiteButton
                variant="contained"
                startIcon={<ImageIcon fontSize="small" />}
              >
                Choose PDF file
              </WhiteButton>
            </Box>
          </Box>
        );
      default:
        return <Box></Box>;
    }
  };
  return (
    <>
      <Box
        padding={2}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 1,
          height: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ bgcolor: green[700], marginRight: "10px" }}
          variant="rounded"
        >
          <VolumeUpIcon />
        </Avatar>
        <Box>
          <Typography variant="h6" align="left">
            Your template name
          </Typography>
          <FormHelperText>Marketing . Custom</FormHelperText>
        </Box>
      </Box>
      <Box
        padding={2}
        mt={2}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 1,
          height: "auto",
        }}
      >
        <Typography variant="h6" align="left" mb={2}>
          Template name and language
        </Typography>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            label="Name your template"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 512 }}
            helperText="0/512"
            sx={{ width: "670px" }}
          />
          <TextField
            select
            label="Select language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            variant="outlined"
            style={{ width: "200px", textAlign: "left" }}
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
        <Typography level="body-sm" align="left" mb={3}>
          Fill in the header, body and footer sections of your template.
        </Typography>
        <TextField
          select
          label="Header"
          value={selectedHeader}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          style={{ textAlign: "left" }}
        >
          {headers.map((header) => (
            <MenuItem key={header.value} value={header.value}>
              {header.icon && <span>{header.icon}</span>} {header.label}
            </MenuItem>
          ))}
        </TextField>
        <Box mt={2}>{renderContent()}</Box>

        {/* <Box
          component="form"
          mt={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          noValidate
          autoComplete="off"
          fullWidth
        >
          <TextField
            label="Body"
            placeholder="Hello"
            variant="outlined"
            inputProps={{ maxLength: 1024 }}
            multiline
            rows={4}
            fullWidth
            helperText="5/1024"
          />
          <Box
            mb={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <IconButton size="small">
              <EmojiEmotionsIcon />
            </IconButton> */}
            {/* <IconButton size="small">
              <FormatBoldIcon />
            </IconButton>
            <IconButton size="small">
              <FormatItalicIcon />
            </IconButton>
            <IconButton size="small">
              <CodeIcon />
            </IconButton>
            <WhiteButton
              variant="contained"
              startIcon={<AddIcon fontSize="small" />}
            >
              Add Variable
            </WhiteButton>
          </Box>
        </Box> */}
        
        <AddVariable/>

        <TextField
          label="Footer"
          inputProps={{ maxLength: 60 }}
          fullWidth
          margin="normal"
          helperText="0/60"
        />
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" align="left" mr={2}>
            Button
          </Typography>
          <FormHelperText> - Optional</FormHelperText>
        </Box>

        <Typography level="body-sm" align="left" mt={2}>
          Create button that let customers to your messages or take action. You
          can add up to ten buttons. If you add more than three buttons, they
          will appear in a list
        </Typography>

        <Box mt={2}>
          <WhiteButton
            variant="contained"
            startIcon={<AddIcon />}
            endIcon={<ArrowDropDownIcon />}
            onClick={handleClick}
            sx={{
              alignItems: "left",
              display: "flex",
              justifyContent: "flex-start",
              paddingRight: "24px",
            }}
          >
            Add Button
          </WhiteButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {buttons.map((option, index) => (
              <MenuItem
                key={index}
                onClick={() => handleMenuItemClick(option.label)}
              >
                <Box>
                  <Typography variant="body1">{option.label}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {option.subtext}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>
          <Box
            mt={2}
            fullWidth
            sx={{
              alignItems: "center",
              padding: 2,
              boxShadow: 3,
              borderLeft: "4px solid green",
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <LightbulbIcon />
              <Typography level="body-md">
                {" "}
                We recommended adding the marketing opt-out button
              </Typography>
            </Box>
            <Typography level="body-sm" ml={2} align="left">
              Allow customers to request to opt out of all marketing messeges.
              This can help reduce blocks from customers and increase your
              quality rating <a href="">learn more</a>
            </Typography>
          </Box>
        </Box>
        <Box mb={1} mt={2} sx={{ display: "flex", alignItems: "center" }}>
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
            {contentList.map((content, index) => (
              <Box key={index} mt={2}>
                {content.label === "Visit website" && <VisitWebSite />}
                {content.label === "Call Phone Number" && <CallPhoneNo />}
                {content.label === "Copy offer code" && <CopyOfferCode />}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default EditTemplate;
