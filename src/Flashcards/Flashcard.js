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
  const { flashcard, dispatchDeleteFlashcard } = props;
  const classes = useStyles();

  const [question, setQuestion] = React.useState(flashcard.question);
  const [answer, setAnswer] = React.useState(flashcard.answer);
  const [id, setId] = React.useState(flashcard.id);
  //   const { flashcard } = flashcard;

  useEffect(() => {
    setQuestion(flashcard.question);
    setAnswer(flashcard.answer);
    setId(flashcard.id);
  }, [flashcard]);

  // debugger;
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);

    let timeoutId;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      console.log("DISPATCH UPDATE QUETION", id, question);
      props.dispatchUpdateFlashcard({
        question: question,
        id: id,
        answer: answer
      });
    }, 2000);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);

    let timeoutId;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      console.log("DISPATCH UPDATE ANSWER", id, answer);
      props.dispatchUpdateFlashcard({
        question: question,
        id: id,
        answer: answer
      });
    }, 2000);
  };

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
              onChange={handleQuestionChange}
            />

            <TextField
              id='standard-multiline-flexible'
              label='Answer'
              multiline
              rowsMax={4}
              value={answer}
              onChange={handleAnswerChange}
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
