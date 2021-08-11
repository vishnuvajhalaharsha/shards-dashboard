import React from "react";
import ReactApexCharts from "react-apexcharts";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { FlexWrapper, H3Wrapper, SpanWrapper } from "./sparkChartStyle";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    minHeight: 140,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const chartStyles = {
  position: "absolute",
  bottom: "0",

  width: "100%",
  margin: "0px",
};

export default (props) => {
  const options = {
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    chart: {
      id: "basic-bar",
      sparkline: {
        enabled: true,
      },
    },
    colors: [props.data.color],

    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: props.chartData,
    },
  ];
  const classes = useStyles();

  return (
    <Paper elevation={10} className={classes.root} width="100%" height="100%">
      <FlexWrapper>
        <SpanWrapper>{props.data.cardTitle}</SpanWrapper>
        <H3Wrapper>{props.data.value}</H3Wrapper>
        <SpanWrapper>
          {" "}
          <div className={props.data.className}></div> {props.data.percentage}
        </SpanWrapper>
      </FlexWrapper>{" "}
      <div style={{ ...chartStyles }}>
        <ReactApexCharts
          options={options}
          series={series}
          type="area"
          height="50px"
        />
      </div>
    </Paper>
  );
};
