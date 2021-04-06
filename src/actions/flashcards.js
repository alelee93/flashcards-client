import {
  START_LOADING_FLASHCARDS,
  SUCCESSFULLY_LOADED_FLASHCARDS,
  ADDING_FLASHCARD,
  SUCCESSFULLY_CREATED_FLASHCARD,
  DELETE_FLASHCARD
} from ".";

export const fetchFlashcards = (flashcardId) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_FLASHCARDS, payload: flashcardId });
    fetch(`http://localhost:3001/flashcard_sets/${flashcardId}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((flashcardsJson) => {
        dispatch({
          type: SUCCESSFULLY_LOADED_FLASHCARDS,
          payload: flashcardsJson
        });
      });
  };
};

export const addingFlashcard = (state) => {
  return {
    type: ADDING_FLASHCARD,
    payload: state
  };
};

export const createFlashcard = (data, id) => {
  //debugger;
  return (dispatch) => {
    return fetch(`http://localhost:3001/flashcard_sets/${id}/flashcards`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((errors) => Promise.reject(errors));
        }
      })
      .then((flashcard) => {
        // debugger;
        dispatch({
          type: SUCCESSFULLY_CREATED_FLASHCARD,
          payload: flashcard
        });
      });
  };
};

export const deleteFlashcard = (flashcard) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/flashcard_sets/${flashcard.flashcard_set_id}/flashcards/${flashcard.id}`,
      {
        method: "DELETE"
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((errors) => Promise.reject(errors));
        }
      })
      .then((flashcardSetJson) => {
        dispatch({
          type: DELETE_FLASHCARD,
          payload: flashcardSetJson
        });
      })
      .catch((error) => alert(error));
  };
};
