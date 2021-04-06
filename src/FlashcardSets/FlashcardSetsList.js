import { Divider } from "@material-ui/core";
import React from "react";
import FlashcardSetListItem from "./FlashcardSetListItem";

class FlashcardSetsList extends React.Component {
  // flashcardSetsList = ({flashcardSets}) => {

  //     debugger
  //     return(
  //     flashcardSets.map(set => {
  //         return(
  //             <div>
  //                 <FlashcardSetListItem flashcardSet={set} selectFlashcard = {this.props.selectFlashcard}/>
  //                 <Divider></Divider>
  //             </div>
  //         )
  //     })
  //     )
  // }

  render() {
    const sortedFlashcards = this.props.flashcardSets.reverse();
    return sortedFlashcards.map((set) => {
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
