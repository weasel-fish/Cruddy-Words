import { useEffect, useState } from "react"
import ModifyWord from "./ModifyWord"

function WordDisplay({ currentWord, user, handleSubmit }) {
    const [modify, setModify] = useState(false)
    const {word, definition, partOfSpeech, synonyms} = currentWord

    function handleClick() {
        setModify(true)
    }

    useEffect(() => {
        setModify(false)
    }, [currentWord])

    return (
        <div>
            <h3>{word}</h3>
            <p>Part of Speech: {partOfSpeech}</p>
            <p>Definition: {definition}</p>
            <ul>Synonyms: {synonyms.map(syn => <li key={syn}>{syn}</li>)}</ul>
            {user === "" ? null : modify ? <ModifyWord currentWord={currentWord} user={user} handleSubmit={handleSubmit}/> : <button onClick={handleClick}>Modify This Word!</button>}
            {user === '' ? null : <button onClick={() => handleSubmit(currentWord, 'favorited')}>{currentWord.favorited ? "UNLIKE" : "LIKE"}</button>}
        </div>
    )
}

export default WordDisplay