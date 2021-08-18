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
        <option value={"611a43ef4b643da58801114c"}>User 1</option>
        <option value={"611b8295366d595bac69f916"}>User 2</option>
      
      </NativeSelect>
    </FormControl>
  );
};
export default SelectDropDown;
