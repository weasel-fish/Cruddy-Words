import { useEffect, useState } from "react"
import WordDisplay from "./WordDisplay"
import styled from "styled-components"

const HomeStyling = styled.div`
    font-size: 1.5em;

    h2 {
        text-align: center;
        font-weight: bold;
    }
`

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
                    useDef = "what do YOU think it means???"
                }
                setDayWord({
                    word: data.word,
                    definition: useDef,
                    partOfSpeech: data.hasOwnProperty("results") ? data.results[0].partOfSpeech : "what part of speech do YOU think it is???",
                    synonyms: (data.hasOwnProperty("results") && typeof data.results[0].synonyms !== 'undefined') ? data.results[0].synonyms : ["what do YOU think they are???"]
                })
            })
    }, [])

    return (
        <div>
            <h1 id="title">CRUDdy Words</h1>
            <HomeStyling>
                {user !== "" ? <h2>Welcome {user.name}!</h2> : null}
                <div className='homeContainer'>
                    <div className='homeBox1'>
                        <p>We jokingly named this <strong>CRUDdy Words</strong> as a reference to the CRUD operations we've learned to implement.</p>
                        <p>We quickly discovered that this API is useless and has ridiculous or missing definitions.</p>
                        <p>Help make this dictionary better by defining or modifying your own words!</p>
                    </div>
                    <div className='homeBox2'>
                        <h3>Word of the Moment:</h3>
                        <WordDisplay currentWord={dayWord} user={user} handleSubmit={handleSubmit}/>
                    </div>
                </div>
            </HomeStyling>
        </div>
    )
}

export default HomePage