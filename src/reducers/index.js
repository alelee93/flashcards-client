import { combineReducers } from 'redux'
import flashcardSetsReducer from './flashcardSets'
import flashcardsReducer from './flashcards'


export default combineReducers({
    flashcardSets: flashcardSetsReducer,
    flashcards: flashcardsReducer,
})