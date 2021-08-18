import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout, {
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getContent,
  getFooter,
  Root,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Avatar,
  Divider,
  Menu,
  MenuItem,
} from "@material-ui/core";
import ViewListIcon from "@material-ui/icons/ViewList";
import CreateSharpIcon from "@material-ui/icons/CreateSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiListItem from "@material-ui/core/ListItem";
import Spark from "./sparkChart";
import { sparkChartData } from "./constants";
import LineChart from "./LineChart/LineChart";
import PieChart from "./PieChart/PieChart";
import DraftAndDiscussions from "./DraftAndDiscussions";
import Blogs from "./Blogs";
import { firstRow } from "./Blogs/config";
import { HeaderFlexers } from "./sparkChartStyle";
import SelectDropDown from "./PieChart/FormControl";
import axios from "axios";
const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

const scheme = Layout();

const styles = (theme) => ({
  gridRoot: {
    flexGrow: 1,
  },
});
const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#fbfbfb",
      boxShadow: "inset 0.1875rem 0 0 #007bff",
      color: "#007bff",
      "& .MuiListItemIcon-root": {
        //color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#fbfbfb",
      //  color: "white",
      "& .MuiListItemIcon-root": {
        //color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "#fbfbfb",
      //  color: "white",
      "& .MuiListItemIcon-root": {
        // color: "white",
      },
    },
  },
  selected: {},
})(MuiListItem);

scheme.configureHeader((builder) => {
  builder
    .create("whatever_id")
    .registerConfig("xs", {
      position: "sticky",
    })
    .registerConfig("md", {
      position: "relative",
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      anchor: "right",
      width: "auto",
    })
    .registerPermanentConfig("md", {
      width: 200,
      collapsible: true,
      collapsedWidth: 64,
    });
});

const App = () => {
  const [sparkChart, setSparkChart] = useState([]);
  const [list, setList] = useState(0);
  const [userValue, setUserValue] = useState("");
  const [overViewData, setOverviewData] = useState({});
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const getOverview = async (value) => {
    const result = await axios.get(`http://localhost:8000/overview/${value}`);
    if (result && result.data) {
      setOverviewData(result.data);
      setSparkChart(result.data?.summary);
    }
  };
  useEffect(() => {
    if (userValue) {
      getOverview(userValue);
    }
  }, [userValue]);

  useEffect(() => {
    setUserValue("611a43ef4b643da58801114c");
  }, []);

  const handleClick = (event, num) => {
    setList(num);
  };

  const handleDropDownClick = (e) => {
    setUserValue(e.target.value);
  };

  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header>
        <Toolbar>
          <SidebarTrigger sidebarId="unique_id" />
          <Grid container>
            <Grid item xs={6} sm={6} md={9} lg={9} xl>
              <TextField
                style={{ width: "100%" }}
                id="input-with-icon-textfield"
                placeholder="search for something..."
                label=""
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchSharpIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              xs={2}
              sm={2}
              md={1}
              lg={1}
              xl
            >
              <HeaderFlexers>
                <NotificationsNoneSharpIcon />
              </HeaderFlexers>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              xs={2}
              sm={2}
              md={1}
              lg={1}
              xl
            >
              {" "}
              <HeaderFlexers>
                <Avatar
                  style={{ cursor: "pointer" }}
                  src={firstRow[0].avgImg}
                  onClick={handleMenuClick}
                />
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </HeaderFlexers>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              xs={2}
              sm={2}
              md={1}
              lg={1}
              xl
            >
              <SelectDropDown
                handleClick={handleDropDownClick}
                userValue={userValue}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId="unique_id">
        <SidebarContent>
          <Grid
            container
            direction="row"
            alignItems="center"
            style={{ margin: "10px" }}
          >
            <Grid item style={{ marginRight: "5px" }}>
              <Avatar
                src={
                  "https://designrevision.com/demo/shards-dashboard-lite/images/shards-dashboards-logo.svg"
                }
              />
            </Grid>
            <Grid item>Shards Dashboard</Grid>
          </Grid>
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              selected={list === 0}
              classes={classes.selected}
              onClick={(event) => handleClick(event, 0)}
            >
              <ListItemIcon style={{ color: list === 0 ? "#007bff" : "" }}>
                <CreateSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              button
              selected={list === 1}
              onClick={(event) => handleClick(event, 1)}
            >
              <ListItemIcon>
                <ViewListIcon style={{ color: list === 1 ? "#007bff" : "" }} />
              </ListItemIcon>
              <ListItemText primary="Blogs" />
            </ListItem>
          </List>
        </SidebarContent>
      </DrawerSidebar>
      <Content
        className={classes.gridRoot}
        style={{ backgroundColor: "#f5f6f8" }}
      >
        {list === 0 && (
          <>
            <Grid container style={{ padding: "10px" }}>
              {sparkChart &&
                sparkChart.map((chartDetails) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      xl
                      md={4}
                      sm={6}
                      lg
                      style={{ padding: "10px", width: "20%" }}
                    >
                      <Spark
                        chartData={chartDetails.chartData}
                        data={chartDetails}
                      />
                    </Grid>
                  );
                })}
            </Grid>
            <Grid container style={{ padding: "20px" }}>
              <Grid
                item
                xs={12}
                xl
                md={8}
                sm={6}
                lg={8}
                style={{ padding: "10px" }}
              >
                <LineChart />
              </Grid>
              <Grid
                item
                xs={12}
                xl
                md={4}
                sm={6}
                lg={4}
                style={{ padding: "10px" }}
              >
                <PieChart />
              </Grid>
            </Grid>
            <Grid container>
              <DraftAndDiscussions />
            </Grid>
          </>
        )}
        {list === 1 && <Blogs overViewData={overViewData?.blogs} />}
      </Content>
      <Footer>Footer</Footer>
    </Root>
  );
};

export default App;
