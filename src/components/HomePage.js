import { useEffect, useState } from "react"
import WordDisplay from "./WordDisplay"

function HomePage({myKey, user, handleSubmit}) {
    const [dayWord, setDayWord] = useState({
        word: "",
        definition: "",
        partOfSpeech: "",
        synonyms: []
    })

    useEffect(() => {
        console.log('I triggered!')
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
                let useDef
                if (data.hasOwnProperty("results")){
                    if (data.results.length > 1){
                        let randomIndex = Math.floor((Math.random() * data.results.length) - 1)
                        console.log(randomIndex)
                        useDef = data.results[randomIndex].definition
                    } else {
                        useDef = data.results[0].definition
                    }
                } else {
                    useDef = "what do you think it means???"
                }
                setDayWord({
                    word: data.word,
                    definition: useDef,
                    partOfSpeech: data.hasOwnProperty("results") ? data.results[0].partOfSpeech : "what do you think it is???",
                    synonyms: (data.hasOwnProperty("results") && typeof data.results[0].synonyms !== 'undefined') ? data.results[0].synonyms : ["what do you think they are???"]
                })
            })
    }, [])

    return (
        <div>
            <h1 id="title">CRUDdy Words</h1>
            {user !== "" ? <h2>Welcome {user.name}!</h2> : null}
            <h3>Word of the Day:</h3>
            <WordDisplay currentWord={dayWord} user={user} handleSubmit={handleSubmit}/>
            <p>This API is useless and has ridiculous or missing definitions. Help make this API better by defining or modifying your own words.</p>
        </div>
    )
}

export default HomePage