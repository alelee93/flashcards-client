import React, { Component } from 'react'

export default class FlashcardShowContainer extends Component {

    state = {
        flashcard_set: {},
        flashcards: [],
        loading: true,
    }

    componentDidMount(){
        // const FlashcardSetId = this.props.match.params.flashcardsetId
        //debugger
        const selectedFlashcardSetId = this.props.selectedflashcardSet.id
        fetch( `http://localhost:3001/flashcard_sets/${selectedFlashcardSetId}`)
            .then(res => res.json())
            .then(({ flashcard_set, flashcards}) => {
                //debugger
                this.setState({
                    flashcard_set: flashcard_set,
                    flashcards: flashcards,
                    loading: false
                })
            })
    }

    componentDidUpdate = () =>  {
      //debugger
      if (this.props.selectedflashcardSet.id !== this.state.flashcard_set.id) {
        const selectedFlashcardSetId = this.props.selectedflashcardSet.id
        fetch( `http://localhost:3001/flashcard_sets/${selectedFlashcardSetId}`)
            .then(res => res.json())
            .then(({ flashcard_set, flashcards}) => {
                this.setState({
                    flashcard_set,
                    flashcards,
                    loading: false
                })
            })
      } 
    }

    render(){
        // if(this.state.loading){
        //    return <div>Loading Spinner</div> 
        // }

//debugger
console.log("rendering flashcards for set", this.state.flashcard_set)
//debugger
    if (this.state.flashcard_set) {
        return(
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
            <h1 className="text-3xl font-bold text-center">
              {this.state.flashcard_set.title}
            </h1>
            <div className="grid grid-cols-3">
              {this.state.flashcards.map((flashcard) => (
                <figure>
                  <img className="" alt={flashcard.card_number} src={flashcard.poster_url} />
                  <p>{flashcard.question}</p>
                  <p>{flashcard.answer}</p>
                  {/* Later we'll add a spoiler here to show the description */}
                </figure>
              ))}
            </div> 
            </section>   
        )
              } else return(<div></div>)
       
    }
}