import { useState } from "react"
import ModifyWord from "./ModifyWord"

function WordDisplay({ currentWord, user, handleSubmit }) {
    const [modify, setModify] = useState(false)
    const {word, definition, partOfSpeech, synonyms} = currentWord

    console.log(user)

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
        </div>
    )
}

export default WordDisplay