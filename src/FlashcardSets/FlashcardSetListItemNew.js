import React from "react";

import { connect } from "react-redux";
import {
  deleteFlashcardSet,
  selectFlashcardSetbyId,
  selectFlashcardSet
} from "../actions/flashcardSets";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { compose } from "redux";
import { Link } from "react-router-dom";

class FlashcardSetListItemNew extends React.Component {
  render() {
    //debugger
    const { classes } = this.props;
    //debugger;
    return (
      <div>
        <ListItem
          className={classes.listItem}
          selected={true}
          alignItems='flex-start'
        >
          <div className={classes.textSection}>
            <ListItemText
              //   primary={this.props.flashcardSet.title}
              //   secondary={this.props.flashcardSet.title}
              primary={this.props.newFlashcardSetTitle}
              secondary='New Flaschard Set'
            ></ListItemText>
          </div>
        </ListItem>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flashcardSets: state.flashcardSets.list,
    selectedFlashcardSet: state.flashcardSets.selectedFlashcardSet,
    newFlashcardSetTitle: state.flashcardSets.newFlashcardSetTitle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectFlashcardSetbyId: (flashcardSetId) => {
      dispatch(selectFlashcardSetbyId(flashcardSetId));
    },
    selectFlashcardSet: (flashcardSet) => {
      dispatch(selectFlashcardSet(flashcardSet));
    }
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(FlashcardSetListItemNew);
