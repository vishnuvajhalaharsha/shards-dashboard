import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Divider,
  TextField,
  Grid,
  Button,
  Avatar,
  ButtonGroup,
} from "@material-ui/core";
import DiscussionGridComponent from "./discussionGrid";
import { initialState } from "./config";
import { makeStyles } from "@material-ui/core/styles";
import SelectDropDown from "../PieChart/FormControl";

const useStyles = makeStyles({
  root: {},

  title: {
    fontSize: 15,
    color: "#424447",
    fontWeight: 500,
    padding: 10,
  },
});

export const DraftAndDiscussions = () => {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    setAllCards(initialState);
  }, []);

  const getReffarlsHTML = (cardBody) =>
    cardBody &&
    cardBody.map((c) => {
     return (
          <>
            <Grid container>
              <Grid item xs sm md lg={7} xl={7}>
                {c.type==="display" ? <Typography className={classes.title}>{c?.userName}</Typography> : <SelectDropDown/>}
              </Grid>
              <Grid container xs sm md lg={5} xl={5} alignItems="center" justifyContent="center">
                {" "}
                {c.type==="display" ? <Typography className={classes.title}>{c?.money}</Typography> : <a href="#">{c.linkText}</a>}
              </Grid>
            </Grid>
            <Divider />
          </>
        );
      
    });

  const getDraftHTML = () => (
    <>
      <TextField
        id="Brave New World"
        style={{ padding: 8 }}
        placeholder="Brave New World"
        fullWidth
        margin="dense"
        variant="outlined"
      />
      <TextField
        style={{ padding: 8 }}
        placeholder="Words can be X-rays if you use them properly"
        multiline
        rows={17}
        rowsMax={Infinity}
        fullWidth
        margin="dense"
        variant="outlined"
      />
      <Divider />
      <Button style={{ margin: 8 }} variant="contained" color="primary">
        Create Draft
      </Button>
    </>
  );
  const getDiscussionsHTML = (body) => {
    return <DiscussionGridComponent body={body} />;
  };

  const getCardBody = (cardData) => {
    switch (cardData.cardTitle) {
      case "New Draft":
        return <>{getDraftHTML()}</>;
      case "Discussions":
        return <> {getDiscussionsHTML(cardData?.cardBody)}</>;
      case "Top Refferals":
        const reffarlsHTML = getReffarlsHTML(cardData?.cardBody);
        return reffarlsHTML;
      default:
        return null;
    }
  };

  const classes = useStyles();
  return (
    <>
      {allCards &&
        allCards.map((item) => {
          return (
            <Grid
              item
              xs={item.xs}
              sm={item.sm}
              md={item.md}
              lg={item.lg}
              xl={item.xl}
              width="100%"
              height="100%"
              style={{ padding: "20px" }}
            >
              <Card elevation={10} className={classes.root}>
                <Typography className={classes.title}>
                  {item.cardTitle}
                </Typography>
                <Divider></Divider>
                {getCardBody(item)}
              </Card>
            </Grid>
          );
        })}
    </>
  );
};
export default DraftAndDiscussions;
