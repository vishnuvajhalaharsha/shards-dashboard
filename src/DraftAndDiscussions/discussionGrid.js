import React from "react";
import { Divider, Grid, Button, Avatar, ButtonGroup, Typography } from "@material-ui/core";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import MoreVertSharpIcon from "@material-ui/icons/MoreVertSharp";

export const DiscussionGridComponent = (props) => {
  return (
    <>
      {props?.body.map((b) => {
        return (
          <>
            <Grid container>
              <Grid
                container
                xs={12}
                sm={4}
                md={3}
                lg={3}
                xl={4}
                justify="center"
                alignItems="baseline"
                style={{padding:"20px"}}
               
              >
                {" "}
                <Avatar
                  width="100%"
                  height="100%"
                  variant="rounded"
                  src={b.image}
                  style={{ height: "50px", width: "50px" }}
                />
              </Grid>
              <Grid item xs={12} sm={8} md={9} lg={9} xl={8}>
                {" "}
                <p>{b.title}</p>
                <p>{b.desc}</p>
                <div style={{ padding: "10px" }}>
                  <ButtonGroup
                    color="primary"
                    aria-label="small outlined button group"
                    size="small"
                  >
                    <Button style={{ fontSize: "10px" }}>
                      <CheckSharpIcon
                        style={{ height: "12px", width: "12px" }}
                      />{" "}
                      Accept
                    </Button>
                    <Button style={{ fontSize: "10px" }}>
                      <CloseSharpIcon
                        style={{ height: "12px", width: "12px" }}
                      />{" "}
                      Reject
                    </Button>
                    <Button style={{ fontSize: "10px" }}>
                      <MoreVertSharpIcon
                        style={{ height: "12px", width: "12px" }}
                      />{" "}
                      Edit
                    </Button>
                  </ButtonGroup>
                </div>
              </Grid>
            </Grid>
            <Divider />
          </>
        );
      })}
      <Grid container justifyContent="center" style={{padding:"10px"}}>
      <Button variant="outlined" size="small" style={{fontSize:"12px"}}>View All Comments</Button>
      </Grid>
    
    </>
  );
};
export default DiscussionGridComponent;
