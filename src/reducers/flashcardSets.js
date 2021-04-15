import {
  START_LOADING_FLASHCARDSETS,
  SUCCESSFULLY_LOADED_FLASHCARDSETS,
  SELECT_FLASHCARDSET,
  SELECT_FLASHCARDSET_BY_ID,
  SUCCESSFULLY_CREATED_FLASHCARD_SET,
  DELETE_FLASHCARDSET,
  ADDING_FLASHCARDSET_STATE,
  NEW_FLASHCARDSET_TITLE,
  SUCCESSFULLY_UPDATED_FLASHCARD_SET,
  UPDATE_FLASHCARDSET_NAME
} from "../actions";

const initialState = {
  loadingState: "notStarted",
  list: [],
  selectedFlashcardSet: {},
  addingFlashcardSet: false,
  newFlashcardSetTitle: "Title"
};

export default function FlashcardSetsReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_FLASHCARDSETS:
      return { ...state, loadingState: "inProgress" };
    case SUCCESSFULLY_LOADED_FLASHCARDSETS:
      return {
        ...state,
        list: action.payload,
        loadingState: "successful"
      };
    case SELECT_FLASHCARDSET:
      return {
        ...state,
        selectedFlashcardSet: action.flashcardSet
      };
    case SELECT_FLASHCARDSET_BY_ID:
      //debugger;
      return {
        ...state,
        selectedFlashcardSet: action.payload
      };
    case SUCCESSFULLY_CREATED_FLASHCARD_SET:
      return {
        ...state,
        selectedFlashcardSet: action.payload,
        list: state.list.concat(action.payload),
        addingFlashcardSet: false,
        newFlashcardSetTitle: "New Title"
      };
    case DELETE_FLASHCARDSET:
      return {
        ...state,
        list: state.list.filter(
          (flashcard) => flashcard.id !== action.payload.id
        )
      };
    case ADDING_FLASHCARDSET_STATE:
      return {
        ...state,
        addingFlashcardSet: action.payload
      };
    case NEW_FLASHCARDSET_TITLE:
      return {
        ...state,
        newFlashcardSetTitle: action.payload
      };

    case UPDATE_FLASHCARDSET_NAME:
      return {
        ...state,
        list: state.list.map((flashcardSet) => {
          if (flashcardSet.id == action.payload.id) {
            return { ...flashcardSet, title: action.payload.newName };
          }
          return flashcardSet;
        })
      };

    case SUCCESSFULLY_UPDATED_FLASHCARD_SET:
      return {
        ...state,
        selectedFlashcardSet: action.payload,
        list: state.list.map((flashcardSet) => {
          if (flashcardSet.id == action.payload.id) {
            return action.payload;
          }
          return flashcardSet;
        })
      };

    default:
      return state;
  }
}
