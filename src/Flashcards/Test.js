import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
//import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { addingFlashcard, createFlashcard } from "../actions/flashcards";

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

function Test(props) {
  const classes = useStyles();
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleDelete = () => {
    props.dispatchAddingFlashcard(false);
  };

  const handleSave = () => {
    console.log("save");
    console.log(`answer: ${answer} | question: ${question}`);
    console.log(props.selectedFlashcardSet.id);

    props.dispatchAddFlashcard(
      { answer: `${answer}`, question: `${question}` },
      props.selectedFlashcardSet.id
    );
  };

  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <Paper className={classes.paper}>
        <IconButton
          // edge='start'
          // color='inherit'
          // aria-label='menu'
          // justify-content='end'
          onClick={() => {
            handleDelete();
          }}
        >
          <ClearIcon />
        </IconButton>

        <IconButton
          onClick={() => {
            handleSave();
          }}
        >
          <DoneIcon />
        </IconButton>

        <Divider></Divider>

        <form className={classes.form} noValidate autoComplete='off'>
          <div>
            <TextField
              id='standard-multiline-flexible'
              label='Question'
              name='question'
              multiline
              rowsMax={4}
              value={question}
              onChange={handleChange}
            />

            <TextField
              id='standard-multiline-flexible'
              label='Answer'
              name='answer'
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

const mapStateToProps = (state) => {
  return {
    addingFlashcard: state.flashcards.addingFlashcard,
    selectedFlashcardSet: state.flashcardSets.selectedFlashcardSet
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddingFlashcard: (state) => dispatch(addingFlashcard(state)),
    dispatchAddFlashcard: (data, id) => dispatch(createFlashcard(data, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
