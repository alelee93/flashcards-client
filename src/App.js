import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink, useHistory}  from 'react-router-dom'
import FlashcardSetsIndexContainer from './FlashcardSets/FlashcardSetsIndexContainer'
import FlashcardSetFormContainer from './FlashcardSets/FlashcardSetFormContainer'
import NewFlashcardContainer from './Flashcards/NewFlashcardContainer'
import FlashcardShowContainer from './Flashcards/FlashcardShowContainer'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedFlashcardSetId: 1,
      selectedFlashcardSet: null,
      flashcards: null
    }
  }
  
  render() {
    return (
      <div className="App">
      

      <Router>

        <FlashcardSetsIndexContainer />
        <FlashcardShowContainer selectedFlashcardSetId={this.state.selectedFlashcardSetId}/>

        {/* <div className="text-center bg-blue-900 text-yellow-100 p-4">
          <NavLink 
            className="inline-block py-2 px-2" 
            activeClassName="text-yellow-300"
            exact
            to="/"
            >
              Flashcard Sets
          </NavLink> */}

          {/* <NavLink 
            className="inline-block py-2 px-2" 
            activeClassName="text-yellow-300"
            exact
            to="/flashcardsets/new"
            >
            New Flashcard Set
          </NavLink> */}
        {/* </div> */}

        <Switch>
          {/* <Route exact path="/"> <FlashcardSetsIndexContainer /> </Route> */}
          <Route path="/flashcardsets/new" component={FlashcardSetFormContainer}/>
          <Route path="/flashcardsets/:flashcardsetId/flashcards/new" component={NewFlashcardContainer}/>
          <Route path="/flashcardsets/:flashcardsetId" component={FlashcardShowContainer}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
