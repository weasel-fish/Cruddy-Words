import { useState } from "react"
import WordDisplay from "./WordDisplay"

function MyWords({usersWords}) {
    const [currentWord, setCurrentWord] = useState('')
    const favorited = usersWords.filter(word => word.favorited)
    const ownWords = usersWords.filter(word => word.modified || word.created)

    function handleClick(word) {
        setCurrentWord(word)
    }

    return (
        <div>
            {currentWord !== '' ? <WordDisplay currentWord={currentWord}/> : null}
            <div>
                <h1>Own Words</h1>
                <ul>
                    {ownWords.map(word => <li key={word.id} onClick={() => handleClick(word)}>{word.word}</li>)}
                </ul>
            </div>
            <div>
                <h1>Favorited Words</h1>
                <ul>
                    {favorited.map(word => <li key={word.id} onClick={() => handleClick(word)}>{word.word}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default MyWords