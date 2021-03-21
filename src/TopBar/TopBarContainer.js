import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from "@material-ui/icons/Search";

export default function TopBarContainer() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h6">FlashCards</Typography> */}

          <IconButton edge="start" color="inherit" aria-label="menu">
            <DeleteIcon />
          </IconButton>

          <IconButton edge="start" color="inherit" aria-label="menu">
            <AddBoxIcon />
          </IconButton>



          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: "100%"
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: "100%"
    }
  }));