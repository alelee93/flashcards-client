import {
  ADD_FLASHCARDSET,
  START_LOADING_FLASHCARDSETS,
  SUCCESSFULLY_LOADED_FLASHCARDSETS,
  SELECT_FLASHCARDSET_BY_ID,
  SELECT_FLASHCARDSET,
  SUCCESSFULLY_CREATED_FLASHCARD_SET,
  DELETE_FLASHCARDSET,
  ADDING_FLASHCARDSET_STATE,
  NEW_FLASHCARDSET_TITLE,
  SUCCESSFULLY_UPDATED_FLASHCARD_SET,
  UPDATE_FLASHCARDSET_NAME
} from ".";

export const fetchFlashcardSets = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_FLASHCARDSETS });
    fetch("http://localhost:3001/flashcard_sets", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((flashcardSetsJson) => {
        dispatch({
          type: SUCCESSFULLY_LOADED_FLASHCARDSETS,
          payload: flashcardSetsJson
        });
      });
  };
};

export const createFlashcardSet = (formData) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/flashcard_sets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ flashcard_set: formData })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((errors) => Promise.reject(errors));
        }
      })
      .then((flashcardSetJson) => {
        dispatch({
          type: SUCCESSFULLY_CREATED_FLASHCARD_SET,
          payload: flashcardSetJson
        });
        return flashcardSetJson.id;
      });
    // .then(flashcardSetJson => {
    //     debugger
    //     selectFlashcardSet(flashcardSetJson)
    // })
  };
};

export const deleteFlashcardSet = () => {
  //debugger
  return (dispatch, getState) => {
    const { list, selectedFlashcardSet } = getState().flashcardSets;
    const flashcardSet = selectedFlashcardSet;
    const currflashcardSetIndex = list.findIndex(
      (item) => item.id == flashcardSet.id
    );

    let newSelectedFlashcardSet;

    if (list.length <= 1) {
      newSelectedFlashcardSet = null;
    } else if (currflashcardSetIndex == 0) {
      newSelectedFlashcardSet = list[1];
    } else {
      newSelectedFlashcardSet = list[currflashcardSetIndex - 1];
    }
    //debugger;
    return fetch(`http://localhost:3001/flashcard_sets/${flashcardSet.id}`, {
      method: "DELETE"
      // headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      // }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((errors) => Promise.reject(errors));
        }
      })
      .then((flashcardSetJson) => {
        //debugger;
        dispatch({
          type: DELETE_FLASHCARDSET,
          payload: flashcardSetJson
        });
        dispatch({
          type: SELECT_FLASHCARDSET_BY_ID,
          payload: newSelectedFlashcardSet
        });
        //debugger;
        return newSelectedFlashcardSet;
      })
      .catch((error) => alert(error));
  };
};

//NEED TO LOOK INTO THIS ONE
export const selectFlashcardSet = (flashcardSet) => {
  //debugger
  return {
    type: SELECT_FLASHCARDSET,
    flashcardSet
  };
};

export const updateFlashcardSetName = (newName, id) => {
  return {
    type: UPDATE_FLASHCARDSET_NAME,
    payload: { newName, id }
  };
};

//NEED TO LOOK INTO THIS ONE
export const selectFlashcardSetbyId = (flashcardSetId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/flashcard_sets/${flashcardSetId}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((flashcardSetsJson) => {
        //debugger
        dispatch({
          type: SELECT_FLASHCARDSET_BY_ID,
          payload: flashcardSetsJson.flashcard_set
        });
      });
  };
};

export const setStateForAddingFlashcardSet = (state) => {
  return {
    type: ADDING_FLASHCARDSET_STATE,
    payload: state
  };
};

export const newFlashardSetTitle = (title) => {
  //debugger;
  return {
    type: NEW_FLASHCARDSET_TITLE,
    payload: title
  };
};

export const updateFlashcardSet = (data, id) => {
  //debugger;
  return (dispatch) => {
    return fetch(`http://localhost:3001/flashcard_sets/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ flashcard_set: data })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((errors) => Promise.reject(errors));
        }
      })
      .then((flashcardSet) => {
        // debugger;
        dispatch({
          type: SUCCESSFULLY_UPDATED_FLASHCARD_SET,
          payload: flashcardSet
        });
      });
  };
};
