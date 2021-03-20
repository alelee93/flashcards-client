import { Divider } from '@material-ui/core'
import React from 'react'
import FlashcardSetListItem from './FlashcardSetListItem'


const FlashcardSetsList = ({flashcardSets}) => {

    //debugger
    return(
    flashcardSets.map(set => {
        return(
            <div>
                <FlashcardSetListItem flashcardSet={set}/>
                <Divider></Divider>
            </div>
        )
    })
    )

    // return (
    //      <>
    //         <h1>FlashcardSetsList</h1>
    //         <ul>
    //             {flashcardSets.map(set => <FlashcardSetListItem flashcardSet={set}/>)}
    //         </ul>
    //     </>

       
        
    // )
}

export default FlashcardSetsList