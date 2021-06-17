import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
import { useRouteMatch } from "react-router-dom"
import WordDisplay from "./WordDisplay"

function HomePage({myKey, user, handleSubmit}) {

    const [dayWord, setDayWord] = useState({
        word: "",
        definition: "",
        partOfSpeech: "",
        synonyms: []
    })

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
                setDayWord({
                    word: data.word,
                    definition: data.hasOwnProperty("results") ? data.results[0].definition : "what do you think it means???",
                    partOfSpeech: data.hasOwnProperty("results") ? data.results[0].partOfSpeech : "what do you think it is???",
                    synonyms: (data.hasOwnProperty("results") && typeof data.results[0].synonyms !== 'undefined') ? data.results[0].synonyms : "what do you think they are???"
                })
            })

    }, [])

    return (
        <div>
            <h1>Cruddy Words</h1>
            {user !== "" ? <h2>Welcome {user.name}!</h2> : null}
            <h3>Word of the Day:</h3>
            <WordDisplay currentWord={dayWord} user={user} handleSubmit={handleSubmit}/>
            <p>This is our website and this is what it does BLAH BLAH BLAH</p>
        </div>
    )
}

export default HomePage