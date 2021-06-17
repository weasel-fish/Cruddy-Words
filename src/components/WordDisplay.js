function WordDisplay({ currentWord }) {

    console.log(currentWord)

    const {word, definition, partOfSpeech, synonyms} = currentWord
    console.log(word)

    return (
        <div>
            <h3>{word}</h3>
            <p>Part of Speech: {partOfSpeech}</p>
            <p>Definition: {definition}</p>
            <ul>Synonyms:
                {synonyms.map(syn => <li key={syn}>{syn}</li>)}
            </ul>
        </div>
    )
}

export default WordDisplay