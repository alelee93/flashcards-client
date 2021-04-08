import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFlashcards, addingFlashcard } from "../actions/flashcards";
import { selectFlashcardSetbyId } from "../actions/flashcardSets";
import { compose } from "redux";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import Test from "../Test";
import Flashcard from "./Flashcard";

class FlashcardShowContainer extends Component {
  componentDidMount() {
    const flashcardSetId = this.props.match.params.flashcardsetId;
    this.props.dispatchSelectFlashcardSetbyId(flashcardSetId);
    this.props.dispatchFetchFlashcards(flashcardSetId);
  }

  componentDidUpdate = (prevProps) => {
    //debugger;
    if (this.props.selectedFlashcardSet !== prevProps.selectedFlashcardSet) {
      this.props.dispatchFetchFlashcards(
        this.props.match.params.flashcardsetId
      );
    }
  };

  handleOnClick = () => {
    this.props.dispatchAddingFlashcard(true);
  };

  render() {
    console.log(
      "FlashcardSet rendering is props.selectedFlaschardSet: ",
      this.props.selectedFlashcardSet.id
    );

    console.log(
      "Flashcards rendering (props.flashcards): ",
      this.props.flashcards
    );

    const { classes } = this.props;
    if (this.props.flashcards && this.props.selectedFlashcardSet) {
      return (
        <section className={classes.editorContainer}>
          {/* <h1 className='text-3xl font-bold text-center'>
            {this.props.selectedFlashcardSet.title}
          </h1> */}

          <TextField
            id='standard-basic'
            label='title'
            // disbled={true}
            value={this.props.selectedFlashcardSet.title}
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

          {/* <div className='grid grid-cols-3'>
            {this.props.flashcards.map((flashcard) => (
              <figure>
                <img
                  className=''
                  alt={flashcard.card_number}
                  src={flashcard.poster_url}
                />
                <p>{flashcard.question}</p>
                <p>{flashcard.answer}</p>
              </figure>
            ))}
          </div> */}
        </section>
      );
    } else return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    flashcards: state.flashcards.inSelectedFlashcardSet,
    selectedFlashcardSet: state.flashcardSets.selectedFlashcardSet,
    addingFlashcard: state.flashcards.addingFlashcard
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchFlashcards: (flashcardId) =>
      dispatch(fetchFlashcards(flashcardId)),

    dispatchSelectFlashcardSetbyId: (flashcardId) =>
      dispatch(selectFlashcardSetbyId(flashcardId)),

    dispatchAddingFlashcard: (state) => dispatch(addingFlashcard(state))
  };
};

//export default withStyles(styles)(FlashcardShowContainer)

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(FlashcardShowContainer);
