import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
//import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import { deleteFlashcard } from "../actions/flashcards";
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
  //   const [question, setQuestion] = React.useState(flashcard.question);
  //   const [answer, setAnswer] = React.useState(flashcard.answer);
  //     const [id] = React.useState(flashcard.id);
  //   const { flashcard } = flashcard;

  // debugger;
  //   const handleChange = (event) => {
  //     setFlashcard(event.target.value);
  //   };

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
              value={flashcard.question}
              //   onChange={handleChange}
            />

            <TextField
              id='standard-multiline-flexible'
              label='Answer'
              multiline
              rowsMax={4}
              value={flashcard.answer}
              //   onChange={handleChange}
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
      dispatch(deleteFlashcard(flashcardId))
  };
};

export default connect(null, mapDispatchToProps)(Flashcard);
