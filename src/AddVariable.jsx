import { AiOutlineItalic } from "react-icons/ai";
import { FiBold } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { BsTypeStrikethrough } from "react-icons/bs";
import React, { useState } from "react";
import { TextField, Box, IconButton, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const WhiteButton = styled(Button)({
  color: "black",
  backgroundColor: "#fff",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

function AddVariable() {
  const [text, setText] = useState("");
  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);
  const [variables, setVariables] = useState(new Set());
  const [variableTexts, setVariableTexts] = useState({});
  const [showContent, setShowContent] = useState(false); // State to control the visibility

  const handleSelectionChange = (e) => {
    setSelectionStart(e.target.selectionStart);
    setSelectionEnd(e.target.selectionEnd);
  };

  const formatText = (symbol) => {
    if (selectionStart !== null && selectionEnd !== null) {
      const before = text.substring(0, selectionStart);
      const selected = text.substring(selectionStart, selectionEnd);
      const after = text.substring(selectionEnd);

      setText(`${before}${symbol}${selected}${symbol}${after}`);
    }
  };

  const parseVariablesFromText = (newText) => {
    const regex = /{{\d+}}/g;
    const matches = newText.match(regex) || [];
    const newVariables = new Set(matches);
    setVariables(newVariables);

    const newVariableTexts = { ...variableTexts };
    Object.keys(newVariableTexts).forEach((key) => {
      if (!newVariables.has(key)) {
        delete newVariableTexts[key];
      }
    });
    setVariableTexts(newVariableTexts);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    parseVariablesFromText(newText);
  };

  const handleAddVariable = () => {
    const currentVariables = Array.from(variables)
      .map((v) => parseInt(v.replace(/[{}]/g, ""), 10))
      .sort((a, b) => a - b);
  
    // Check if the current sequence is complete
    const isSequential = currentVariables.every((value, index) => value === index + 1);
  
    if (!isSequential) {
      console.warn("Variables are not in order. Cannot add new variable.");
      return; // Stop adding if variables are not sequential
    }
  
    const nextIndex = currentVariables.length ? Math.max(...currentVariables) + 1 : 1;
  
    // Ensure the next index is sequential
    if (nextIndex !== currentVariables.length + 1) {
      console.warn("Cannot add a variable out of sequence.");
      return; // Stop adding if next index is not the correct sequence
    }
  
    // Add the new variable in the correct order
    const newVariable = `{{${nextIndex}}}`;
  
    const newVariables = new Set([...variables, newVariable]);
    setVariables(newVariables);
    setText((prevText) => `${prevText} ${newVariable}`);
    setShowContent(true); // Show the content after adding the first variable
  };
  

  const handleVariableTextChange = (variable, value) => {
    setVariableTexts((prevTexts) => ({
      ...prevTexts,
      [variable]: value,
    }));
  };

  return (
    <Box
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
        value={text}
        onChange={handleTextChange}
        onSelect={handleSelectionChange}
        helperText={`${text.length}/1024`}
      />
      <Box
        mb={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton size="small" onClick={() => formatText("*")}>
          <FiBold />
        </IconButton>
        <IconButton size="small" onClick={() => formatText("_")}>
          <AiOutlineItalic />
        </IconButton>
        <IconButton size="small" onClick={() => formatText("~")}>
          <BsTypeStrikethrough />
        </IconButton>
        <IconButton size="small" onClick={() => formatText("```")}>
          <BiCodeAlt />
        </IconButton>
        <WhiteButton
          variant="contained"
          startIcon={<AddIcon fontSize="small" />}
          onClick={handleAddVariable}
        >
          Add Variable
        </WhiteButton>
      </Box>

      {showContent && (
        <Box
          padding={2}
          fullWidth
          autoComplete="off"
          sx={{
            alignItems: "center",
            backgroundColor: "lightgray",
            borderRadius: "3px",
          }}
        >
          <Typography variant="h6" align="left">
            Samples for body content
          </Typography>
          <Typography variant="body2" align="left">
            To help us review your message template, please add an example for
            each variable in your body text. Do not use real customer
            information. Could API hosted by Meta reviews templates and variable
            parameters to protect the security and integrity of our services
          </Typography>
          <Typography variant="h6" align="left" mt={2}>
            Body
          </Typography>
          {Array.from(variables)
            .sort((a, b) => parseInt(a.replace(/[{}]/g, ""), 10) - parseInt(b.replace(/[{}]/g, ""), 10))
            .map((variable, index) => (
              <TextField
                key={index}
                label={`${variable}`}
                variant="outlined"
                fullWidth
                value={variableTexts[variable] || ""}
                onChange={(e) =>
                  handleVariableTextChange(variable, e.target.value)
                }
                sx={{ mt: 2 }}
              />
            ))}
        </Box>
      )}
    </Box>
  );
}

export default AddVariable;
