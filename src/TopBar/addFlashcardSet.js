import React from "react";
import { connect } from "react-redux";
import { setStateForAddingFlashcardSet } from "../actions/flashcardSets";
import AddBoxIcon from "@material-ui/icons/AddBox";

import { useHistory } from "react-router-dom";

function AddFlashcardSetBttn(props) {
  let history = useHistory();

  const handleclick = () => {
    props.dispatchSetStateForAddingFlashcardSet(true);
    history.push(`/flashcardsets/new`);
  };

  return (
    <AddBoxIcon
      onClick={handleclick}
      disabled={props.addingFlashcardSet}
    ></AddBoxIcon>
  );
}

const mapStateToProps = (state) => {
  return {
    addingFlashcardSet: state.flashcardSets.addingFlashcardSet
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetStateForAddingFlashcardSet: (state) =>
      dispatch(setStateForAddingFlashcardSet(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFlashcardSetBttn);
