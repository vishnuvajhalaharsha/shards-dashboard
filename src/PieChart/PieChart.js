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
  Grid,
} from "@material-ui/core";
import ReactApexChart from "react-apexcharts";
import SelectDropDown from "./FormControl";

const useStyles = makeStyles({
  root: {
   
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 15,
    color: "#424447",
    fontWeight: 500,
    padding: 10,
  },
  formControl: {
    height: 50,
    width: 80,
    padding: 0,
  },

  pos: {
    marginBottom: 20,
  },
});

const options = {
  chart: {
    sparkline: {
      enabled: false,
    },
  },
  legend: {
    position: "bottom",
    markers: {
      width: 20,
      height: 10,
      radius: 0,
    },
  },
  labels: ["Team A", "Team B", "Team C"],
};
const series = [44, 55, 13];

export const PieChart = () => {
  const classes = useStyles();
  return (
    <Card elevation={10} className={classes.root} width="100%" height="100%">
      <Typography className={classes.title}>Users by device</Typography>
      <Divider />
      <div style={{margin:"30px"}}>
        <ReactApexChart options={options} series={series} type="pie" />
      </div>
      <Divider />
     <Grid container justifyContent="center" alignItems="center">
       <Grid item xs sm md lg={8} xl> <SelectDropDown/></Grid>
       <Grid item xs sm md lg={4} xl> <a href="#"> View Report</a></Grid>
     </Grid>
    </Card>
  );
};
export default PieChart;
