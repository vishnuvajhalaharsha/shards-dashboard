import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  Divider,
  TextField,
  Button,
} from "@material-ui/core";
import ReactApexChart from "react-apexcharts";

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 15,
    color: "#424447",
    fontWeight: 500,
    padding: 10,
  },
  pos: {
    marginBottom: 20,
  },
  calenderContent: {
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
    width: "80%",
  },
  textField: {
    marginLeft: 8,
    marginRight: 8,
    width: 200,
    padding: 10,
  },
});

const options = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
  },
  legend: {
    position: "top",
    markers: {
      width: 20,
      height: 10,
      radius: 0,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
    dashArray: [0, 3],
    fillOpacity: 1,
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: "Current Month",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
  {
    name: "Past Month",
    data: [0, 10, 15, 67, 59, 72, 32, 81],
  },
];

export const LineChart = () => {
  const classes = useStyles();
  return (
    <Card elevation={10} className={classes.root} width="100%" height="100%">
      <Typography className={classes.title}>Users</Typography>
      <Divider />
      <div style={{ display: "flex" }}>
        <form className={classes.calenderContent} noValidate>
          <TextField
            variant="outlined"
            id="date"
            size="small"
            label="Start Date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            size="small"
            id="date"
            label="End Date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="outlined" size="small" style={{ fontSize: "10px" }}>
            View Report
          </Button>
        </div>
      </div>

      <Divider />

      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="272px"
      />
    </Card>
  );
};
export default LineChart;
