import React, {Component} from 'react'
import FlashcardSetsList from './FlashcardSetsList'

export default class FlashcardSetsIndexcontainer extends Component {

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

        // setTimeout(() => {
        //     this.setState({
        //         flashcardSets: [
        //             {title: 'Ruby', id: 1}, 
        //             {title: 'React', id: 2},
        //         ],
        //         loading: false
        //     })
        // },1000)
    }

    render(){
        //debugger
        return(
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                {this.state.loading ? 'loading spinner' : <FlashcardSetsList flashcardSets={this.state.flashcardSets} /> }
            </section>
        )
    }
}
