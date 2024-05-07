import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../../../app/jobs/jobSlice";

const SelectControl = ({ data }) => {
  const selectRef = useRef("");
  const { id, label, items, width } = data;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    if (value) dispatch(addFilter({ key: id, value }));
    else dispatch(removeFilter(id));
    selectRef.current = value;
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
            value={selectRef.current}
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
