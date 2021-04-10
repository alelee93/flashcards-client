import React, { Component } from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function FlashcardTest() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <h1>This is the Front of the Card</h1>
          </div>

          <div className='flip-card-back'>
            <h1>This is the back of the Card</h1>
            <p>Architect Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
