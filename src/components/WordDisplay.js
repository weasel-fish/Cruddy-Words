import { useState } from "react"
import ModifyWord from "./ModifyWord"

function WordDisplay({ currentWord, user, handleSubmit, handleLike }) {
    const [modify, setModify] = useState(false)
    const {word, definition, partOfSpeech, synonyms} = currentWord

    function handleClick() {
        setModify(true)
    }

    return (
        <div>
            <h3>{word}</h3>
            <p>Part of Speech: {partOfSpeech}</p>
            <p>Definition: {definition}</p>
            <ul>Synonyms: 
                {typeof synonyms !== 'string' ? synonyms.map(syn => <li key={syn}>{syn}</li>) : <p>{synonyms}</p>}
            </ul>
            {user === "" ? null : modify ? <ModifyWord currentWord={currentWord} user={user} handleSubmit={handleSubmit}/> : <button onClick={handleClick}>Modify This Word!</button>}
            {user === '' ? null : <button onClick={() => handleSubmit(currentWord, 'favorited')}>Like</button>}
        </div>
    )
}

export default WordDisplay