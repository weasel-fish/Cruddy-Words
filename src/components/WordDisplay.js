import { useState } from "react"
import ModifyWord from "./ModifyWord"

function WordDisplay({ currentWord }) {
    const [modify, setModify] = useState(false)
    const {word, definition, partOfSpeech, synonyms} = currentWord

    console.log(currentWord)
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
            {modify ? <ModifyWord /> : <button onClick={handleClick}>Modify This Word!</button>}
        </div>
    )
}

export default WordDisplay