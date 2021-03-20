import React from 'react'

const FlashcardSetListItem = ({flashcardSet}) => {
    //debugger
    return <li className='' key={flashcardSet.id}> {flashcardSet.title} </li>

}

export default FlashcardSetListItem