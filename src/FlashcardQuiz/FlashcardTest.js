import React, { useEffect } from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function FlashcardTest(props) {
  const { flashcards } = props;
  const classes = useStyles();
  const [selectedFlashcard, setSelectedFlashcard] = React.useState(
    flashcards[0]
  );

  const [selectedFlashcardIndex, setSelectedFlashcardIndex] = React.useState(0);

  useEffect(() => {
    setSelectedFlashcard(flashcards[selectedFlashcardIndex]);
  }, [selectedFlashcardIndex]);

  const handleNextClick = () => {
    const newIndex = Math.min(
      selectedFlashcardIndex + 1,
      flashcards.length - 1
    );
    setSelectedFlashcardIndex(newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = Math.max(selectedFlashcardIndex - 1, 0);
    setSelectedFlashcardIndex(newIndex);
  };

  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <h1>{selectedFlashcard.question}</h1>
          </div>

          <div className='flip-card-back'>
            <h1>{selectedFlashcard.answer}</h1>
          </div>
        </div>
      </div>

      <div>
        <ArrowBackIcon onClick={handlePrevClick} />
        <h1>{`${selectedFlashcardIndex + 1}/${flashcards.length}`}</h1>
        <ArrowForwardIcon onClick={handleNextClick} />
      </div>
    </div>
  );
}
