import { Divider } from "@material-ui/core";
import React from "react";
import FlashcardSetListItem from "./FlashcardSetListItem";

class FlashcardSetsList extends React.Component {
  render() {
    const sortedFlashcardSet = this.props.flashcardSets.reverse();
    return sortedFlashcardSet.map((set) => {
      return (
        <div>
          <FlashcardSetListItem flashcardSet={set} />
          <Divider></Divider>
        </div>
      );
    });
  }
}

export default FlashcardSetsList;
