import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectControl = ({ data }) => {
  const [value, setValue] = useState("");
  const { id, label, items, width } = data;

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <>
      <Box
        sx={{
          minWidth: `${width}rem`,
          flexGrow: 1,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select">{label}</InputLabel>
          <Select
            id={id}
            variant="outlined"
            value={value}
            label={label}
            onChange={handleChange}
          >
            <MenuItem value="">None</MenuItem>
            {items.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectControl;
