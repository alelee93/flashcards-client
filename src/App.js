import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";
import FlashcardSetsIndexContainer from "./FlashcardSets/FlashcardSetsIndexContainer";
import FlashcardSetFormContainer from "./FlashcardSets/FlashcardSetFormContainer";
import NewFlashcardContainer from "./Flashcards/NewFlashcardContainer";
import FlashcardShowContainer from "./Flashcards/FlashcardShowContainer";
import TopBarContainer from "./TopBar/TopBarContainer";
import Test from "./Flashcards/Test";
import EditableTextField from "./EditableTextField";
//import Flashcard from "./FlashcardQuiz/FlashcardTest";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFlashcardSetId: 1,
      selectedFlashcardSet: null,
      flashcards: null,
      addingSet: true
    };
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <TopBarContainer />

          {/* {this.state.addingSet ? 
        <FlashcardSetFormContainer /> : null
        } */}

          <FlashcardSetsIndexContainer />

          <Route
            path='/flashcardsets/:flashcardsetId/flashcards/new'
            component={NewFlashcardContainer}
          />

          {/* <FlashcardSetsIndexContainer 
            selectFlashcard = {this.selectFlashcardSet} 
            selectedflashcardSet={this.state.selectedFlashcardSet}
            /> */}

          {/* { !this.state.addingSet ? 
        <FlashcardShowContainer selectedflashcardSet={this.state.selectedFlashcardSet}/> : null
        } */}

          <Switch>
            {/* <Route exact path="/"> <FlashcardSetsIndexContainer /> </Route> */}
            <Route exact path='/test' component={Test} />
            {/* <Route exact path='/testquiz' component={Flashcard} /> */}

            <Route
              exact
              path='/editableTestField'
              component={EditableTextField}
            />

            <Route
              exact
              path='/flashcardsets/new'
              component={FlashcardSetFormContainer}
            />
            {/* <Route
              path='/flashcardsets/:flashcardsetId/flashcards/new'
              component={NewFlashcardContainer}
            /> */}
            <Route
              path='/flashcardsets/:flashcardsetId'
              component={FlashcardShowContainer}
            />
          </Switch>
        </Router>
      </div>
    );
  }

  // selectFlashcardSet = (flashcardSet) => {
  //   console.log("currently updating state in App to", flashcardSet.id)
  //   this.setState({
  //     selectedFlashcardSetId: flashcardSet.id,
  //     selectedFlashcardSet: flashcardSet
  //   })
  // }

  // componentDidMount(){
  //   //debugger
  //   fetch(`http://localhost:3001/${this.state.selectedFlashcardSetId}/flashcards`, {
  //       method: 'get',
  //       headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //       }
  //   })
  //       .then(res => res.json())
  //       .then(FlashcardsJson => {
  //           this.setState({
  //               flashcards: FlashcardsJson
  //           })
  //       })
  // }
}

export default App;
