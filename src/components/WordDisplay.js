import { useEffect, useState } from "react"
import ModifyWord from "./ModifyWord"
import styled from "styled-components"

const WordStyle = styled.div`
    font-family: 'Lato', sans-serif;

    button {
        background-color: lightgray;
        color: black;
        border: 2px solid white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        float: left;
        display: block;
        border-radius: 8px;

        &:hover {
        background-color: grey;
        color: white;
        }
    }

    .displayButtons {
    }

    ul {
        list-style-type: circle;
    }
`

function WordDisplay({ setCurrentWord, currentWord, user, handleSubmit }) {
    const [modify, setModify] = useState(false)
    const {word, definition, partOfSpeech, synonyms} = currentWord

    function handleClick() {
        setModify(true)
    }

    useEffect(() => {
        setModify(false)
    }, [currentWord])

    return (
        <WordStyle>
            <h4>{word}</h4>
            {/* <p>Definition:</p> */}
            <p>({partOfSpeech}) <span>&mdash;</span> {definition}</p>
            <p>Synonyms:</p>
            <ul> {synonyms.map(syn => <li key={syn}>{syn}</li>)}</ul>
            <div className='displayButtons'>
                {user === "" ? null : modify ? <ModifyWord setModify={setModify} setCurrentWord={setCurrentWord} currentWord={currentWord} user={user} handleSubmit={handleSubmit}/> : <button onClick={handleClick}>Modify This Word!</button>}
                {user === '' ? null : <button onClick={() => handleSubmit(currentWord, 'favorited')}>{currentWord.favorited ? "UNLIKE" : "LIKE"}</button>}
            </div>
        </WordStyle>
    )
}

export default WordDisplay