import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createFlashcardSet,
  setStateForAddingFlashcardSet,
  newFlashardSetTitle
} from "../actions/flashcardSets";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import ContentEditable from "react-contenteditable";
import newFormStyles from "./newFormStyles";
import TextField from "@material-ui/core/TextField";
import Test from "../Test";

class FlashcardSetFormcontainer extends Component {
  state = {
    title: "Title"
    //touched: false
  };

  //   handleChange = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });

    this.props.dispatchNewFlaschardSetTitle(e.target.value);

    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.props
        .dispatchCreateFlashcardSet(this.state)
        .then((flashcardSetId) => {
          this.props.history.push(`/flashcardsets/${flashcardSetId}`);
        });
    }, 3000);
  };

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.dispatchCreateFlashcardSet(this.state).then((flashcardSetId) => {
  //       debugger;
  //       this.props.history.push(`/flashcardsets/${flashcardSetId}`);
  //     });
  //   };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          id='standard-basic'
          label='title'
          // inputProps={{ min: 0, style: { textAlign: "center" } }}
          onChange={this.handleChange}
        ></TextField>

        {/* <Test /> */}
      </div>
      //  <ContentEditable
      //     className={classes.newForm}
      //     html={this.state.title}
      //     //placeholder='Enter Title'
      //     disabled={false}
      //     onChange={this.handleChange}
      //   />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newFlashcardSetTitle: state.flashcardSets.newFlashcardSetTitle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateFlashcardSet: (formData) =>
      dispatch(createFlashcardSet(formData)),
    dispatchNewFlaschardSetTitle: (title) =>
      dispatch(newFlashardSetTitle(title))
  };
};

export default compose(
  withStyles(newFormStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(FlashcardSetFormcontainer);
