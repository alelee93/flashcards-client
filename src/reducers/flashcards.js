import {
  START_LOADING_FLASHCARDS,
  SUCCESSFULLY_LOADED_FLASHCARDS,
  ADDING_FLASHCARD,
  SUCCESSFULLY_CREATED_FLASHCARD,
  DELETE_FLASHCARD
  // FAILED_LOADING_FLASHCARDSETS,
  // ADD_FLASHCARDS,
} from "../actions";

const initialState = {
  inSelectedflashcardSet: [],
  flashcardSetsLoaded: {},
  addingFlashcard: false
};

export default function FlashcardsReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_FLASHCARDS:
      return {
        ...state,
        flashcardSetsLoaded: {
          ...state.flashcardSetsLoaded,
          [action.payload]: "inProgress"
        }
      };
    case SUCCESSFULLY_LOADED_FLASHCARDS:
      //debugger;
      return {
        flashcardSetsLoaded: {
          ...state.flashcardSetsLoaded,
          [action.payload]: "successful"
        },
        // inSelectedflashcardSet: state.inSelectedflashcardSet
        // .filter((flashcard) => flashcard.flashcard_set_id == action.payload.flashcard_set.id)
        // .concat(action.payload.flashcards)
        inSelectedflashcardSet: action.payload.flashcards,
        addingFlashcard: false
      };

    case ADDING_FLASHCARD:
      return {
        ...state,
        addingFlashcard: action.payload
      };

    case SUCCESSFULLY_CREATED_FLASHCARD:
      debugger;
      return {
        ...state,
        inSelectedflashcardSet: state.inSelectedflashcardSet.concat(
          action.payload
        ),
        addingFlashcard: false
      };

    case DELETE_FLASHCARD:
      return {
        ...state,
        inSelectedflashcardSet: state.inSelectedflashcardSet.filter(
          (flashcard) => flashcard.id !== action.payload.id
        )
      };
    default:
      return state;
  }
}
