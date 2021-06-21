import { useEffect } from "react"

function HomePage() {
    const myKey='your key here'
    
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
            .then(console.log)

    }, [])
    

    return (
        <div>
            <h1>Cruddy Words</h1>
            <h3>Word of the Day:</h3>
            <p>word: is a word</p>
        </div>
    )
}

export default HomePage