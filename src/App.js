import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink, useHistory}  from 'react-router-dom'
import FlashcardSetsIndexContainer from './containers/FlashcardSetsIndexContainer'
import FlashcardSetFormContainer from './containers/FlashcardSetFormContainer'
import NewFlashcardContainer from './containers/NewFlashcardContainer'
import FlashcardShowContainer from './containers/FlashcardShowContainer'

function App() {
  
  return (
    <div className="App">
     

     <Router>

      <div className="text-center bg-blue-900 text-yellow-100 p-4">
        <NavLink 
          className="inline-block py-2 px-2" 
          activeClassName="text-yellow-300"
          exact
          to="/"
          >
            Flashcard Sets
        </NavLink>

        <NavLink 
          className="inline-block py-2 px-2" 
          activeClassName="text-yellow-300"
          exact
          to="/flashcardsets/new"
          >
           New Flashcard Set
        </NavLink>
      </div>

       <Switch>
         <Route exact path="/"> <FlashcardSetsIndexContainer /> </Route>
         <Route path="/flashcardsets/new" component={FlashcardSetFormContainer}/>
         <Route path="/flashcardsets/:flashcardsetId/flashcards/new" component={NewFlashcardContainer}/>
         <Route path="/flashcardsets/:flashcardsetId" component={FlashcardShowContainer}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
