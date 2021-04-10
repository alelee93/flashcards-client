import {
  START_LOADING_FLASHCARDS,
  SUCCESSFULLY_LOADED_FLASHCARDS,
  ADDING_FLASHCARD,
  SUCCESSFULLY_CREATED_FLASHCARD,
  DELETE_FLASHCARD,
  SUCCESSFULLY_UPDATED_FLASHCARD

  // FAILED_LOADING_FLASHCARDSETS,
  // ADD_FLASHCARDS,
} from "../actions";

const initialState = {
  inSelectedFlashcardSet: [],
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
      // debugger;
      return {
        flashcardSetsLoaded: {
          ...state.flashcardSetsLoaded,
          [action.payload]: "successful"
        },
        // inSelectedFlashcardSet: state.inSelectedFlashcardSet
        // .filter((flashcard) => flashcard.flashcard_set_id == action.payload.flashcard_set.id)
        // .concat(action.payload.flashcards)
        inSelectedFlashcardSet: action.payload.flashcards,
        addingFlashcard: false
      };

    case ADDING_FLASHCARD:
      //debugger;
      return {
        ...state,
        addingFlashcard: action.payload
      };

    case SUCCESSFULLY_CREATED_FLASHCARD:
      //debugger;
      return {
        ...state,
        inSelectedFlashcardSet: state.inSelectedFlashcardSet.concat(
          action.payload
        ),
        addingFlashcard: false
      };

    case DELETE_FLASHCARD:
      return {
        ...state,
        inSelectedFlashcardSet: state.inSelectedFlashcardSet.filter(
          (flashcard) => flashcard.id !== action.payload.id
        )
      };

    case SUCCESSFULLY_UPDATED_FLASHCARD:
      return {
        ...state,
        // inSelectedFlashcardSet: state.inSelectedFlashcardSet
        //   .filter((flashcard) => flashcard.id !== action.payload.id)
        //   .concat(action.payload),

        inSelectedFlashcardSet: state.inSelectedFlashcardSet.map(
          (flashcard) => {
            if (flashcard.id == action.payload.id) {
              return action.payload;
            }
            return flashcard;
          }
        )
      };

    default:
      return state;
  }
}
