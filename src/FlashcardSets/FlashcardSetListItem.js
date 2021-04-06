import React from "react";

import { connect } from "react-redux";
import {
  deleteFlashcardSet,
  selectFlashcardSetbyId,
  selectFlashcardSet,
  setStateForAddingFlashcardSet
} from "../actions/flashcardSets";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { compose } from "redux";
import { Link } from "react-router-dom";

class FlashcardSetListItem extends React.Component {
  //   flashcardSetListItem = ({flashcardSet}) => {
  //     //debugger
  //     return <li className='' key={flashcardSet.id}> {flashcardSet.title} </li>
  // }

  // state = {
  //     flashcardSet =
  // }

  deleteFlashcardSet = (id) => {
    console.log("delete", id);
    this.props.deleteFlashcardSet(id);
    this.props.history.push("/");
    //debugger
    //this.props.selectFlashcardSetbyId(this.props.flashcardSets[0].id)

    // fetch(`http://localhost:3001/flashcard_sets/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then((res) => {
    //             debugger
    //             console.log("deleted", res)
    //         })
    //         .catch(error => alert(error))
  };

  onFlashcardSetClick = (flashcardSet) => {
    console.log("update state to ", flashcardSet.id);
    //debugger
    this.props.selectFlashcardSet(flashcardSet);
    this.props.dispatchSetStateForAddingFlashcardSet(false);
    //debugger
  };

  render() {
    //debugger
    const { classes } = this.props;
    let today = new Date();
    let updatedTime = new Date(this.props.flashcardSet.updated_at);

    return (
      <div>
        <ListItem
          component={Link}
          exact
          to={"/flashcardsets/" + this.props.flashcardSet.id}
          className={classes.listItem}
          selected={
            this.props.selectedFlashcardSet && !this.props.addingFlashcardSet
              ? this.props.flashcardSet.id == this.props.selectedFlashcardSet.id
              : ""
          }
          alignItems='flex-start'
        >
          {/* onClick={() => this.onFlashcardSetClick(this.props.flashcardSet)} */}

          <div
            className={classes.textSection}
            onClick={() => this.onFlashcardSetClick(this.props.flashcardSet)}
          >
            <ListItemText
              primary={this.props.flashcardSet.title}
              secondary={
                (today - updatedTime) / (1000 * 3600 * 24) < 1
                  ? updatedTime.toLocaleTimeString()
                  : updatedTime.toLocaleDateString()
              }
            ></ListItemText>
          </div>

          {/* <DeleteIcon
            onClick={() => this.deleteFlashcardSet(this.props.flashcardSet.id)}
            className={classes.deleteIcon}
          ></DeleteIcon> */}
        </ListItem>

        {/* <ListItem
                className={classes.listItem}
                selected = { this.props.selectedFlashcardSet ? this.props.flashcardSet.id == this.props.selectedFlashcardSet.id : ""}
                //selected = {true}

                alignItems='flex-start'>
                
                <div
                className={classes.textSection}
                onClick={() => this.onFlashcardSetClick(this.props.flashcardSet)}>
                    <ListItemText
                        primary={this.props.flashcardSet.title}
                        secondary={this.props.flashcardSet.title}
                    ></ListItemText>
                </div>

                <DeleteIcon 
                    onClick={() => this.deleteFlashcardSet(this.props.flashcardSet.id)}
                    className={classes.deleteIcon}>
                </DeleteIcon>

            </ListItem> */}
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
  debugger;
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectFlashcardSetbyId: (flashcardSetId) => {
      dispatch(selectFlashcardSetbyId(flashcardSetId));
    },
    selectFlashcardSet: (flashcardSet) => {
      dispatch(selectFlashcardSet(flashcardSet));
    },
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
)(FlashcardSetListItem);
