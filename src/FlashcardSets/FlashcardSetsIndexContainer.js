import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFlashcardSets } from "../actions/flashcardSets";
import FlashcardSetsList from "./FlashcardSetsList";

import { withStyles } from "@material-ui/core/styles";
import stylesSideBar from "./stylesSideBar";
import List from "@material-ui/core/List";
import { compose } from "redux";
import FlashcardSetListItemNew from "./FlashcardSetListItemNew";

class FlashcardSetsIndexcontainer extends Component {
  componentDidMount() {
    this.props.dispatchFetchFlashcardSets();
  }

  render() {
    //debugger
    const { classes } = this.props;

    if (this.props.loadingState === "notStarted") {
      return null;
    }

    return (
      <section className={classes.sidebarContainer}>
        {this.props.loadingState == "notStarted" ? (
          "loading spinner"
        ) : (
          <List>
            {this.props.addingFlashcardSet ? <FlashcardSetListItemNew /> : ""}
            <FlashcardSetsList
              flashcardSets={this.props.flashcardSets}
              // selectFlashcard = {this.props.selectFlashcard}
              // selectedflashcardSet = {this.props.selectedflashcardSet}
            />
          </List>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flashcardSets: state.flashcardSets.list,
    loadingState: state.flashcardSets.loadingState,
    selectedFlashcardSet: state.flashcardSets.selectedFlashcardSet,
    addingFlashcardSet: state.flashcardSets.addingFlashcardSet
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchFlashcardSets: () => dispatch(fetchFlashcardSets())
  };
};

export default compose(
  withStyles(stylesSideBar),
  connect(mapStateToProps, mapDispatchToProps)
)(FlashcardSetsIndexcontainer);
