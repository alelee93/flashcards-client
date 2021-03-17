import React from 'react'
import FlashcardSetListItem from './FlashcardSetListItem'


const FlashcardSetsList = ({flashcardSets}) => {
    //debugger
    return (
        <>
            <h1>FlashcardSetsList</h1>
            <ul>
                {flashcardSets.map(set => <FlashcardSetListItem flashcardSet={set}/>)}
            </ul>
        </>
    )
}

export default FlashcardSetsList