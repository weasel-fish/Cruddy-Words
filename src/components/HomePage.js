import { useEffect, useState } from "react"

function HomePage({myKey}) {

    const [dayWord, setDayWord] = useState({
        word: "",
        definition: "",
        partOfSpeech: "",
        synonyms: []
    })
    
    console.log(dayWord)

    useEffect(() => {

        fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true',
            {
	        method: "GET",
	        headers: {
		        'x-rapidapi-key': myKey,
		        'x-rapidapi-host': "wordsapiv1.p.rapidapi.com"
                }
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setDayWord({
                    word: data.word,
                    definition: data.hasOwnProperty("results") ? data.results[0].definition : "what do you think it means???",
                    partOfSpeech: data.hasOwnProperty("results") ? data.results[0].partOfSpeech : "what do you think it is???",
                    synonyms: data.hasOwnProperty("results") ? data.results[0].synonyms : "what do you think they are???"
                })
            })

    }, [])
    

    return (
        <div>
            <h1>Cruddy Words</h1>
            <h3>Word of the Day:</h3>
            <p>{dayWord.word}</p>
            <p>Part Of Speech: {dayWord.partOfSpeech}</p>
            <p>Definition: {dayWord.definition}</p>
            <p>This is our website and this is what it does BLAH BLAH BLAH</p>

        </div>
    )
}

export default HomePage