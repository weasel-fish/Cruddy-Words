import { useState } from "react"
import WordDisplay from "./WordDisplay"

function Search({ourWords, myKey, user, handleSubmit}) {
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
        
        const searchArray = ourWords.filter(word => word.word.toLowerCase() === searchTerm.toLowerCase())
       
        if(searchArray.length > 0) {
            const word = searchArray[0]
            setCurrentWord({
                id: word.id,
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
                setCurrentWord({
                    word: data.word,
                    definition: data.hasOwnProperty("results") ? data.results[0].definition : "what do you think it means???",
                    partOfSpeech: data.hasOwnProperty("results") ? data.results[0].partOfSpeech : "what do you think it is???",
                    synonyms: data.hasOwnProperty("results") ? data.results[0].synonyms : "what do you think they are???"
                })
                setDisplay(true)
            })
        }
    }

    return (
        <div>
            <h1>Look up a word!</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSearch()
            }}>
                <input onChange={handleChange} value = {searchTerm} type='text' name='search' placeholder='Type here'></input>
                <input type='submit'></input>
            </form>
            {display ? <WordDisplay currentWord={currentWord} user={user} handleSubmit={handleSubmit}/> : null}
        </div>
    )
}

export default Search