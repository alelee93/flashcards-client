import React, {Component} from 'react'

export default class NewFlascardContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const body = new FormData()

        body.append('flashcard[question]', form.question.value)
        body.append('flashcard[answer]', form.answer.value)
        body.append('flashcard[image]', form.image.files[0], form.image.value)
        body.append('flashcard[flashcard_set_id]', this.props.match.params.flashcardsetId)

        fetch('http://localhost:3001/flashcards', {
            method: 'post',
            body,
        })
            .then((res) => res.json())
            .then((eventJson) => {
                console.log(eventJson)
            })
    }

    render(){
        return(
            <form
            className="max-w-4xl w-11/12 mx-auto mt-16 shadow-lg px-8 py-6"
            onSubmit={this.handleSubmit}
          >
            <h1 className="text-3xl text-center font-semibold mb-8">New Flashcard</h1>
            <fieldset className="">
              <label htmlFor="question" className="block uppercase">
                Question
              </label>
              <input
                type="text"
                name="question"
                id="question"
                className="w-full border-2 p-4 my-4"
              />
            </fieldset>
            <fieldset className="">
              <label htmlFor="answer" className="block uppercase">
                Answer
              </label>
              <textarea
                className="w-full border-2 p-4 my-4"
                name="answer"
                id="answer"
              ></textarea>
            </fieldset>
            
           
            <fieldset className="">
              <label htmlFor="image" className="block uppercase">IMAGE</label>
              <input
                type="file"
                className="w-full my-4"
                name="image"
                id="image"
              />
            </fieldset>
            <button
              type="submit"
              className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200"
            >
              Add Flashcard
            </button>
          </form>
        )

    }
}