import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider, Grid, Avatar, Button, Chip } from "@material-ui/core";
import BookmarkBorderSharpIcon from "@material-ui/icons/BookmarkBorderSharp";
import { firstRow } from "./config";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 146,
  },
  details: {
    display: "flex",
  },
  sideImg: {
   height:"100%"
  },
  cardFooter: {
    padding: 10,
  },
});

export const Blogs = () => {
  const [firstRowData, setFirstRowData] = useState([]);
  useEffect(() => {
    setFirstRowData(firstRow);
  }, []);

  const getSecondRow = (cards) => {
    return (
      <Grid container>
        {cards.map((d) => {
          return (
            <Grid
              elevation={10}
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl
              style={{ padding: "10px" }}
            >
              <Card>
                <Grid container className={classes.details}>
                  <Grid
                    item
                    xs={6}
                    sm
                    md={4}
                    lg={4}
                    xl
              
                  >
                    <CardMedia
                      className={classes.sideImg}
                      image={d?.img}
                      children={
                        <>
                          <div
                            style={{
                              display: "flex",
                              height: "70%",
                              justifyContent: "flex-start",
                              padding: "10px",
                            }}
                          >
                            <Chip
                              style={{
                                backgroundColor: d.color,
                                color: "white",
                              }}
                              size="small"
                              label={d.chipType}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              height: "50px",
                              width: "50px",
                              padding: "10px",
                            }}
                          >
                            <Avatar src={d.avgImg} />
                          </div>
                        </>
                      }
                    />
                 
                  </Grid>
                  <Grid item xs={6} sm md={8} lg={8} xl>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {d.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };
  const getThirdRow = (cards) => {
    return (
      <Grid container>
        {cards.map((c) => {
          return (
            <Grid item xs={12} sm md={4} lg={4} xl style={{ padding: "10px" }}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {c.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <Divider />
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  style={{ padding: "10px" }}
                >
                  <Grid item xs sm md={3} lg={3} xl>
                    {" "}
                    <Avatar
                      width="100%"
                      height="100%"
                      variant="circle"
                      src={c.img}
                      style={{ height: "50px", width: "50px" }}
                    />
                  </Grid>
                  <Grid item xs sm md={5} lg={5} xl>
                    <Grid lg={12}>{c.userName}</Grid>
                    <Grid lg={12}>{c.date}</Grid>
                  </Grid>
                  <Grid item xs sm md={4} lg={4} xl>
                    <Button
                      style={{ fontSize: "10px" }}
                      variant="outlined"
                      size="small"
                      startIcon={<BookmarkBorderSharpIcon size="small" />}
                    >
                      Bookmark
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };
  const getCards = (cards, rowType) => {
    return (
      <>
        <Grid container>
          {cards &&
            cards.map((c) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  xl
                  style={{ padding: "10px" }}
                >
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={c.img}
                        title="Contemplative Reptile"
                        children={
                          rowType === "first" && (
                              <>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                padding: "10px",
                                height:"85%"
                              }}
                            >
                              <Chip
                                style={{
                                  backgroundColor: c.color,
                                  color: "white",
                                }}
                                size="small"
                                label={c.chipType}
                              />
                            </div>
                          <div style={{position:"absolute", marginLeft:"20px"}}>  <Avatar src={c.img}/></div>
                            </>
                          )
                        }
                      />
                    
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {c.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    {rowType === "last" && <Divider />}
                    <Typography className={classes.cardFooter}>
                      {c.date}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </>
    );
  };

  const classes = useStyles();
  return (
    <>
      {getCards(
        firstRowData.filter((c) => c.row === "first"),
        "first"
      )}
      {getSecondRow(firstRowData.filter((c) => c.row === "second"))}
      {getThirdRow(firstRowData.filter((c) => c.row === "third"))}
      {getCards(
        firstRowData.filter((c) => c.row === "last"),
        "last"
      )}
    </>
  );
};
export default Blogs;
