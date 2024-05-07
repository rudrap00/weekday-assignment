import { Box, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../../../app/jobs/jobSlice";

const InputControl = ({ data }) => {
  const { id, label, width, type } = data;
  let timer;
  const dispatch = useDispatch();

  const debouncedChangeHandler = (e) => {
    if (timer) clearTimeout(timer);
    const query = e.target.value;

    timer = setTimeout(() => {
      if (!query) dispatch(removeFilter(id));
      else dispatch(addFilter({ key: id, value: query, type }));
    }, 400);
  };

  return (
    <Box sx={{ width: `${width}rem`, flexGrow: 1 }}>
      <TextField
        fullWidth
        autoComplete="off"
        onChange={debouncedChangeHandler}
        id={id}
        label={label}
        variant="outlined"
        type={type}
        InputProps={{ inputProps: { min: 0, max: 103 } }}
      />
    </Box>
  );
};

export default InputControl;
