import { useState } from "react"

function Search({ourWords, myKey}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [currentWord, setCurrentWord] = useState({
        word: "",
        definition: "",
        partOfSpeech: "",
        synonyms: []
    })
    
    console.log(currentWord)

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    function handleSearch() {
        
        const searchArray = ourWords.filter(word => word.word.toLowerCase() === searchTerm.toLowerCase())
       
        if(searchArray.length > 0) {
            const word = searchArray[0]
            setCurrentWord({
                word: word.word,
                definition: word.definition,
                partOfSpeech: word.partOfSpeech,
                synonyms: word.synonyms
            })
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
        </div>
    )
}

export default Search