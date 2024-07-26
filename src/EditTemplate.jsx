import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import FormHelperText from "@mui/material/FormHelperText";
import Avatar from "@mui/material/Avatar";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { green } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import IconButton from "@mui/material/IconButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";


const WhiteButton = styled(Button)({
  color: 'black',
  backgroundColor: '#fff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#f0f0f0',
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
  { value: "header1", label: "Header1" },
  { value: "header2", label: "Header2" },
  { value: "header3", label: "Header3" },
];

const buttons = [
  { value: "button1", label: "Button1" },
  { value: "button2", label: "Button2" },
  { value: "button3", label: "Button3" },
  { value: "button4", label: "Button4" },
];

function EditTemplate() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          display: "flex", // Use flexbox to align items horizontally
          alignItems: "center", // Center items vertically
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
          {" "}
          Template name and language{" "}
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
            value="en"
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
        <Typography variant="body1" align="left" mb={3}>
          Fill in the header, body and footer sections of your template.
        </Typography>
        <TextField
          select
          label="Header"
          value="none"
          variant="outlined"
          helperText="Optional"
          fullWidth
          style={{ textAlign: "left" }}
        >
          {headers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* <TextField
          label="Body"
          variant="outlined"
          fullWidth
          margin="normal"
          helperText="Characters: 5/1024"
          multiline
          rows={4}
          defaultValue="Hello"
        /> */}

        <Box
          component="form"
          mt={2}
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
            <IconButton size="small">
              <EmojiEmotionsIcon />
            </IconButton>
            <IconButton size="small">
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
        </Box>

        <TextField  label="Footer" fullWidth margin="normal" helperText="0/60" />
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

        <Typography variant="body1" align="left" mt={2}>
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
            {buttons.map((option) => (
              <MenuItem key={option.value} onClick={handleClose}>
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
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
            <Typography variant="h6">
              {" "}
              We recommended adding the marketing opt-out button
            </Typography>
          </Box>
          <Typography variant="body1" ml={2} align="left">
            {" "}
            Allow customers to request to opt out of all marketing messeges.
            This can help reduce blocks from customers and increase your quality
            rating <a href="">learn more</a>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default EditTemplate;
