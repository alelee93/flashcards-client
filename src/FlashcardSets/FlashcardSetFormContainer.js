import React, {Component} from 'react'

export default class FlashcardSetFormcontainer extends Component {

    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/flashcard_sets', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({flashcard_set: this.state})
        })
        .then(res => res.json())
        .then(flashcardSetJson => {
            debugger
            this.props.history.push('/')
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6" >
                <h1 className="text-center text-3xl font-semibold mb-2">New Flashcard Set</h1>
                <fieldset>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Flashcard Set Title"
                    className="w-full border p-4 my-4"
                />
                <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit">Submit</button>
                </fieldset>
            </form>
        )
    }
}
