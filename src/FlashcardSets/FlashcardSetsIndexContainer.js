import React, {Component} from 'react'
import FlashcardSetsList from './FlashcardSetsList'

import { withStyles } from '@material-ui/core/styles';
import stylesSideBar from './stylesSideBar';
import List from '@material-ui/core/List';





class FlashcardSetsIndexcontainer extends Component {

   

    state = {
        flashcardSets: [],
        loading: true
    }

    componentDidMount(){

        fetch('http://localhost:3001/flashcard_sets', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(FlashcardSetsJson => {
                console.log("flashcardSets", FlashcardSetsJson)
                this.setState({
                    flashcardSets: FlashcardSetsJson,
                    loading: false
                })
            })
    }

    render(){
        //debugger
        const {classes} = this.props
        
        return(
            
            <section className={classes.root}>
                {this.state.loading ? 'loading spinner' : 
                <List>
                <FlashcardSetsList 
                    flashcardSets={this.state.flashcardSets} 
                    selectFlashcard = {this.props.selectFlashcard}
                    selectedflashcardSet = {this.props.selectedflashcardSet}
                    /> 
                </List>
                }
            </section>
        )
    }
      
}

export default withStyles(stylesSideBar)(FlashcardSetsIndexcontainer)


