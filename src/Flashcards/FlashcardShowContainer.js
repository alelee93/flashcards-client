import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFlashcards, addingFlashcard } from "../actions/flashcards";
import {
  selectFlashcardSetbyId,
  updateFlashcardSet,
  updateFlashcardSetName
} from "../actions/flashcardSets";
import { compose } from "redux";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import FlashcardTest from "../FlashcardQuiz/FlashcardTest";

import Test from "./Test";
import Flashcard from "./Flashcard";

class FlashcardShowContainer extends Component {
  state = { title: this.props.selectedFlashcardSet.title };

  componentDidMount() {
    const flashcardSetId = this.props.match.params.flashcardsetId;
    this.props.dispatchSelectFlashcardSetbyId(flashcardSetId);
    this.props.dispatchFetchFlashcards(flashcardSetId);
  }

  componentDidUpdate = (prevProps) => {
    //debugger;
    if (this.props.selectedFlashcardSet !== prevProps.selectedFlashcardSet) {
      this.props.dispatchFetchFlashcards(
        //this.props.match.params.flashcardsetId
        this.props.selectedFlashcardSet.id
      );
      this.setState({ title: this.props.selectedFlashcardSet.title });
    }
  };
  handleOnClick = () => {
    this.props.dispatchAddingFlashcard(true);
  };

  handleUpdateTitle = (e) => {
    this.setState({
      title: e.target.value
    });

    const updatedTitle = { title: e.target.value };
    const flashcardSetId = this.props.selectedFlashcardSet.id;

    this.props.dispatchUpdateFlashcardSetName(e.target.value, flashcardSetId);
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.props.dispatchUpdateFlashcardSet(updatedTitle, flashcardSetId);
    }, 3000);
  };

  render() {
    console.log(this.props.flashcards);
    console.log(this.state.title);
    console.log(this.props.selectedFlashcardSet.title);

    const { classes } = this.props;

    //debugger;

    if (
      this.props.flashcards &&
      this.props.selectedFlashcardSet &&
      !this.props.flashcardsQuiz
    ) {
      return (
        <section className={classes.editorContainer}>
          {/* <h1 className='text-3xl font-bold text-center'>
            {this.props.selectedFlashcardSet.title}
          </h1> */}

          <TextField
            id='standard-basic'
            label='title'
            // disbled={true}
            value={this.state.title}
            onChange={this.handleUpdateTitle}
          ></TextField>

          <Button
            variant='contained'
            color='secondary'
            startIcon={<AddIcon />}
            onClick={this.handleOnClick}
            disabled={this.props.addingFlashcard}
            // href={`http://localhost:3000/flashcardsets/${this.props.selectedFlashcardSet.id}/flashcards/new`}
          >
            Add Flashcard
          </Button>

          {this.props.addingFlashcard ? <Test /> : ""}

          <div>
            {this.props.flashcards.map((flashcard) => {
              //debugger;
              return <Flashcard flashcard={flashcard} />;
            })}
          </div>
        </section>
      );
    } else if (
      this.props.flashcards &&
      this.props.selectedFlashcardSet &&
      this.props.flashcardsQuiz
    ) {
      return <FlashcardTest flashcards={this.props.flashcards} />;
    } else return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    flashcards: state.flashcards.inSelectedFlashcardSet,
    selectedFlashcardSet: state.flashcardSets.selectedFlashcardSet,
    addingFlashcard: state.flashcards.addingFlashcard,
    flashcardsQuiz: state.flashcards.flashcardsQuiz
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchFlashcards: (flashcardId) =>
      dispatch(fetchFlashcards(flashcardId)),

    dispatchSelectFlashcardSetbyId: (flashcardId) =>
      dispatch(selectFlashcardSetbyId(flashcardId)),

    dispatchAddingFlashcard: (state) => dispatch(addingFlashcard(state)),

    dispatchUpdateFlashcardSet: (data, id) =>
      dispatch(updateFlashcardSet(data, id)),

    dispatchUpdateFlashcardSetName: (newName, id) =>
      dispatch(updateFlashcardSetName(newName, id))
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(FlashcardShowContainer);
