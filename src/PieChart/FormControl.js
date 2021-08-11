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
        value={10}
        onChange={() => {}}
        input={<BootstrapInput />}
      >
        <option aria-label="None" value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>
    </FormControl>
  );
};
export default SelectDropDown;
