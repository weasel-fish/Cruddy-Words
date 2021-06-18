import { useState } from "react"
import WordDisplay from "./WordDisplay"
import styled from "styled-components"

const SearchStyle = styled.div`
    text-align: center;
    font-family: 'Walter Turncoat', cursive;

    .searchHere {
        width: 100%;
        font-family: 'Lato', sans-serif;
        min-width: 15ch;
        max-width: 20ch;
        border: 1px solid darkgrey;
        border-radius: 0.25em;
        padding: 0.25em 0.5em;
        font-size: 1.25rem;
        margin: 5px;
        line-height: 1.3;
        background-color: #fff;
        background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
        vertical-align: middle;
    }
    .submitSearch {
        background-color: lightgray;
        color: black;
        border: 2px solid white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 5px;
        transition-duration: 0.4s;
        cursor: pointer;
        display: inline-block;
        border-radius: 8px;
        vertical-align: middle;

        &:hover {
        background-color: grey;
        color: white;
        }
    }
    form {
        text-align: center;

    }
`

function Search({ourWords, myKey, user, handleSubmit, handleLike}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [currentWord, setCurrentWord] = useState({
        word: "",
        definition: "",
        partOfSpeech: "",
        synonyms: []
    })
    const [display, setDisplay] = useState(false)

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    function handleSearch() {
        
        let searchArray = ourWords.filter(word => word.word.toLowerCase() === searchTerm.toLowerCase())
        
        if(user !== '') {
            searchArray = searchArray.filter(word => word.userAssc === user.id)
        }

        if(searchArray.length > 0) {
            const word = searchArray[0]
            console.log(searchArray)
            setCurrentWord({
                id: word.id,
                userAssc: word.userAssc,
                word: word.word,
                definition: word.definition,
                partOfSpeech: word.partOfSpeech,
                synonyms: word.synonyms
            })
            setDisplay(true)
        } else {
            fetch(`https://wordsapiv1.p.rapidapi.com/words/${searchTerm.toLowerCase()}`, {
                method: "GET",
                headers: {
                    'x-rapidapi-key': myKey,
                    'x-rapidapi-host': "wordsapiv1.p.rapidapi.com"
                    }
                })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                let useDef
                if (data.hasOwnProperty("results")){
                    if (data.results.length > 1){
                        let randomIndex = Math.floor(Math.random() * data.results.length ) -1
                        useDef = data.results[randomIndex].definition
                    } else {
                        useDef = data.results[0].definition
                    }
                } else {
                    useDef = "what do YOU think it means???"
                }
                setCurrentWord({
                    word: data.word,
                    definition: useDef,
                    partOfSpeech: data.hasOwnProperty("results") ? data.results[0].partOfSpeech : "what part of speech do YOU think it is???",
                    synonyms: (data.hasOwnProperty("results") && typeof data.results[0].synonyms !== 'undefined') ? data.results[0].synonyms : ["what do YOU think they are???"]
                })
                setDisplay(true)
            })
        }
    }

    return (
        <SearchStyle>
            <h1>Look up a word!</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSearch()
            }}>
                <input className="searchHere" onChange={handleChange} value = {searchTerm} type='text' name='search' placeholder='Type here'></input>
                <input className="submitSearch" type='submit'></input>
            </form>
            {display ? <WordDisplay currentWord={currentWord} user={user} handleSubmit={handleSubmit} handleLike={handleLike}/> : null}
        </SearchStyle>
    )
}

export default Search