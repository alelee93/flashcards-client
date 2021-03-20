import React from 'react'
import {Link} from 'react-router-dom'

const FlashcardListItem = ({flashcard}) => {
    return (
        <li className="" key={flashcard.id}>
            <Link to={`/flashcard/${flashcard.id}`}>
                {flashcard.question}<br />
                {flashcard.answer}
            </Link>
        </li>
    )
}

export default FlashcardListItem