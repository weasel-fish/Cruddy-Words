import { useState } from "react"
import WordDisplay from "./WordDisplay"

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
                    useDef = "what do you think it means???"
                }
                setCurrentWord({
                    word: data.word,
                    definition: useDef,
                    partOfSpeech: data.hasOwnProperty("results") ? data.results[0].partOfSpeech : "what do you think it is???",
                    synonyms: (data.hasOwnProperty("results") && typeof data.results[0].synonyms !== 'undefined') ? data.results[0].synonyms : ["what do you think they are???"]
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
            {display ? <WordDisplay currentWord={currentWord} user={user} handleSubmit={handleSubmit} handleLike={handleLike}/> : null}
        </div>
    )
}

export default Search