import React from "react";
//import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
//import { compose } from "redux";
import { connect } from "react-redux";
import { deleteFlashcardSet } from "../actions/flashcardSets";

import { useHistory } from "react-router-dom";

function DeleteBttn(props) {
  let history = useHistory();

  const handleclick = () => {
    props.deleteFlashcardSet().then((newSelectedFlashcardSet) => {
      debugger;
      history.push(`/flashcardsets/${newSelectedFlashcardSet.id}`);
    });
    //debugger;
  };

  return <DeleteIcon onClick={handleclick}></DeleteIcon>;
}

const mapStateToProps = (state) => {
  return {
    selectedFlashcardSet: state.flashcardSets.selectedFlashcardSet
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFlashcardSet: () => {
      return dispatch(deleteFlashcardSet());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBttn);
