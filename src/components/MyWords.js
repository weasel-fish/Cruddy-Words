import { useState } from "react"
import WordDisplay from "./WordDisplay"
import styled from "styled-components"

const MyStyled = styled.div`
    h1 {
        text-align: center;
        font-family: 'Walter Turncoat', cursive;
    }
    .columnCont {
        display: flex;
        justify-content: space-evenly;
    }
    .ownColumn {
        width: 30%;
    }
    ul {
        text-align: left;
        list-style-type: circle;
        cursor: pointer;
    }
    .displayBox {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }
    .displayItem {
        width: 50%;
        text-align: left;
    }
`

function MyWords({usersWords, handleSubmit}) {
    const [currentWord, setCurrentWord] = useState('')
    const favorited = usersWords.filter(word => word.favorited)
    const ownWords = usersWords.filter(word => word.modified || word.created)

    function handleClick(word) {
        setCurrentWord(word)
    }

    return (
        <MyStyled>
            <h1>My Very Own CRUDdy Words</h1>
            <div className="displayBox">
                <div className="displayItem">
                    {currentWord !== '' ? <WordDisplay setCurrentWord={setCurrentWord} currentWord={currentWord} handleSubmit={handleSubmit}/> : null}
                </div>
            </div>
            <div className="columnCont">
                <div className="ownColumn">
                    <h2>Own Words</h2>
                    <ul>
                        {ownWords.map(word => <li key={word.id} onClick={() => handleClick(word)}>{word.word}</li>)}
                    </ul>
                </div>
                <div className="ownColumn">
                    <h2>Favorited Words</h2>
                    <ul>
                        {favorited.map(word => <li key={word.id} onClick={() => handleClick(word)}>{word.word}</li>)}
                    </ul>
                </div>
            </div>
        </MyStyled>
    )
}

export default MyWords