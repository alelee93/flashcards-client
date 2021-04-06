import {
  START_LOADING_FLASHCARDSETS,
  SUCCESSFULLY_LOADED_FLASHCARDSETS,
  //FAILED_LOADING_FLASHCARDSETS,
  //ADD_FLASHCARDSET,
  SELECT_FLASHCARDSET,
  SELECT_FLASHCARDSET_BY_ID,
  SUCCESSFULLY_CREATED_FLASHCARD_SET,
  DELETE_FLASHCARDSET,
  ADDING_FLASHCARDSET_STATE,
  NEW_FLASHCARDSET_TITLE
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
      //debugger;
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
      //debugger
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
      //debugger;
      return {
        ...state,
        newFlashcardSetTitle: action.payload
      };
    default:
      return state;
  }
}
