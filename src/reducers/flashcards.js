import {
  START_LOADING_FLASHCARDS,
  SUCCESSFULLY_LOADED_FLASHCARDS,
  ADDING_FLASHCARD,
  SUCCESSFULLY_CREATED_FLASHCARD,
  DELETE_FLASHCARD,
  SUCCESSFULLY_UPDATED_FLASHCARD,
  UPDATE_FLASHCARD_QUIZ
} from "../actions";

const initialState = {
  inSelectedFlashcardSet: [],
  flashcardSetsLoaded: {},
  addingFlashcard: false,
  flashcardsQuiz: false
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
        inSelectedFlashcardSet: action.payload.flashcards,
        addingFlashcard: false
      };

    case ADDING_FLASHCARD:
      //debugger;
      return {
        ...state,
        addingFlashcard: action.payload
      };

    case UPDATE_FLASHCARD_QUIZ:
      return {
        ...state,
        flashcardsQuiz: action.payload
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
