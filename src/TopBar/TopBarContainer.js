import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
//import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import { compose } from "redux";
import { connect } from "react-redux";
import {
  deleteFlashcardSet,
  selectFlashcardSet,
  // createFlashcardSet,
  setStateForAddingFlashcardSet
} from "../actions/flashcardSets";

import { updateFlashcardQuiz } from "../actions/flashcards";

import DeleteBttn from "./deleteFlashcardSet";
import AddFlashcardSetBttn from "./addFlashcardSet";
import Crop169Icon from "@material-ui/icons/Crop169";
import ListIcon from "@material-ui/icons/List";

class TopBarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      addingSet: false,
      title: null
    };
  }

  handleAddClick = () => {
    console.log("new flashcardset");
    this.props.dispatchSetStateForAddingFlashcardSet(true);
    //this.props.dispatchCreateFlashcardSet({ title: "New FlaschardSet" });
    // this.setState({
    //     addingSet: !this.state.addingSet,
    //     title: null
    // })
  };

  render() {
    const classes = this.props;
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            {/* <Typography variant="h6">FlashCards</Typography> */}
            {/* <IconButton onClick = {this.deleteFlashcardSet("test")} edge="start" color="inherit" aria-label="menu">
            <DeleteIcon /> 
          </IconButton> */}
            <DeleteBttn />
            <AddFlashcardSetBttn />
            <Crop169Icon
              onClick={() => this.props.dispatchUpdateFlashcardQuiz(true)}
            />
            <ListIcon
              onClick={() => this.props.dispatchUpdateFlashcardQuiz(false)}
            />
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div> */}
            {/* <p>
              selectedFlashcardSet:{" "}
              {this.props.selectedFlashcardSet
                ? this.props.selectedFlashcardSet.id
                : "none"}
            </p>
            &nbsp;&nbsp;
            <p>
              newFlaschardSet:
              {this.props.addingFlashcardSet ? "true" : "false"}
            </p> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flashcardSets: state.flashcardSets.list,
    selectedFlashcardSet: state.flashcardSets.selectedFlashcardSet,
    addingFlashcardSet: state.flashcardSets.addingFlashcardSet
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectFlashcardSet: (flashcardSet) => {
      dispatch(selectFlashcardSet(flashcardSet));
    },
    dispatchUpdateFlashcardQuiz: (state) =>
      dispatch(updateFlashcardQuiz(state)),
    deleteFlashcardSet: (flashcardSetId) => {
      dispatch(deleteFlashcardSet(flashcardSetId));
    },
    dispatchSetStateForAddingFlashcardSet: (state) =>
      dispatch(setStateForAddingFlashcardSet(state))
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(TopBarContainer);
