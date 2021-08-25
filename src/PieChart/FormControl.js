import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Card,
  FormControl,
  Typography,
  Divider,
  InputLabel,
  NativeSelect,
  InputBase,
} from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(2),
    },
    margin: 10,
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    maxWidth: 130,
    height: 28,
    padding: 0,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export const SelectDropDown = (props) => {

  return (
    <FormControl >
      <NativeSelect
        id="demo-customized-select-native"
        value={props.userValue}
        onChange={(e) => props.handleClick(e)}
        input={<BootstrapInput />}
      >
        <option aria-label="None" value="" />
        <option value={"6125e7b81c92fa027870b8c8"}>User 1</option>
        <option value={"6125e6a51c92fa027870b8b4"}>User 2</option>
        <option value={"6125e9191c92fa027870b8f6"}>User 3</option>
      
      </NativeSelect>
    </FormControl>
  );
};
export default SelectDropDown;
