import { useState } from "react"
import styled from "styled-components"

const ModifyStyle = styled.div`
    border: 2px solid darkgray;
    padding: 10px;
    border-radius: 5px;
    font-size: .8em;
    padding-bottom: 50px;

    label {
        padding-right: 10px;
    }

    input[type=text] {
        width: 50%;
        padding: 6px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 2px solid darkgray;
        border-radius: 5px;
    }

    .modButton {
        background-color: lightgray;
        color: black;
        border: 2px solid white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        float: left;
        display: block;
        border-radius: 8px;

        &:hover {
        background-color: grey;
        color: white;
        }
    }
`

function ModifyWord({ currentWord, user, handleSubmit }) {
    const [formData, setFormData] = useState({...currentWord})

    function handleChange(e) {
        const prop = e.target.name
        const val = e.target.value
        const newData = {
            ...formData, [prop]: val
        }
        setFormData(newData)
    }

    return (
        <ModifyStyle>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(formData, 'modified')}
            }>
                <label>Word:</label>
                <input type="text" name="word" value={formData.word} onChange={handleChange}/><br></br>
                <label>Part Of Speech:</label>
                <input type="text" name="partOfSpeech" value={formData.partOfSpeech} onChange={handleChange}/><br></br>
                <label>Definition:</label>
                <input type="text" name="definition" value={formData.definition} onChange={handleChange}/><br></br>
                <label>Synonyms (comma-separated):</label>
                <input type="text" name="synonyms" value={formData.synonyms} onChange={handleChange}/><br></br>
                <input className='modButton' type="submit" value="Modify Word"/>
            </form>
        </ModifyStyle>
    )
}

export default ModifyWord