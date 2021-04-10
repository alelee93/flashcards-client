import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
//import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import { deleteFlashcard, updateFlashcard } from "../actions/flashcards";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch"
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800
  }
}));

function Flashcard(props) {
  // debugger;
  const { flashcard, dispatchDeleteFlashcard } = props;
  const classes = useStyles();

  const [question, setQuestion] = React.useState(flashcard.question);
  const [answer, setAnswer] = React.useState(flashcard.answer);
  const [id, setId] = React.useState(flashcard.id);

  useEffect(() => {
    const updateQuestion = () =>
      props.dispatchUpdateFlashcard({
        question: question,
        id: id,
        answer: answer
      });

    ///PREVENT IF ID CHANGED
    //IF FLASHCARD.ID == ID

    if (flashcard.question !== question || flashcard.answer !== answer) {
      console.log(`same id, ${id}`);
      const timeoutId = setTimeout(() => {
        updateQuestion();
      }, 2000);
      console.log("timeoutid", timeoutId);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [question, answer]);

  useEffect(() => {
    setQuestion(flashcard.question);
    setAnswer(flashcard.answer);
    setId(flashcard.id);
  }, [flashcard]);

  // debugger;

  const onDeleteClick = () => {
    console.log(flashcard);
    dispatchDeleteFlashcard(flashcard);
  };

  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <Paper className={classes.paper}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          justify-content='end'
        >
          <Edit />
        </IconButton>

        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          justify-content='end'
          onClick={onDeleteClick}
        >
          <ClearIcon />
        </IconButton>

        <Divider></Divider>

        <form className={classes.form} noValidate autoComplete='off'>
          <div>
            <TextField
              id='standard-multiline-flexible'
              label='Question'
              multiline
              rowsMax={4}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <TextField
              id='standard-multiline-flexible'
              label='Answer'
              multiline
              rowsMax={4}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </form>
      </Paper>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteFlashcard: (flashcardId) =>
      dispatch(deleteFlashcard(flashcardId)),
    dispatchUpdateFlashcard: (data, flashcardId) => {
      dispatch(updateFlashcard(data, flashcardId));
    }
  };
};

export default connect(null, mapDispatchToProps)(Flashcard);
