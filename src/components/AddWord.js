import { useState } from "react"

function AddWord({handleSubmit}) {
    const [formData, setFormData] = useState({
        word: "",
        definition: "",
        partOfSpeech: "",
        synonyms: []
    })

    function handleChange(e) {
        const prop = e.target.name
        const val = e.target.value
        const newData = {
            ...formData, [prop]: val
        }
        setFormData(newData)
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(formData, 'created')}
            }>
                <label>Word:</label>
                <input type="text" name="word" value={formData.word} onChange={handleChange}/><br></br>
                <label>Part Of Speech:</label>
                <input type="text" name="partOfSpeech" value={formData.partOfSpeech} onChange={handleChange}/><br></br>
                <label>Definition:</label>
                <input type="text" name="definition" value={formData.definition} onChange={handleChange}/><br></br>
                <label>Synonyms (comma-separated):</label>
                <input type="text" name="synonyms" value={formData.synonyms} onChange={handleChange}/><br></br>
                <input type="submit" value="Add Word"/>
            </form>
        </div>
    )
}

export default AddWord