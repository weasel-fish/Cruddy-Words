import { useState } from "react"
import styled from "styled-components"

const AddStyled = styled.div`
    text-align: center;

    .theContainer {
        display: flex;
        justify-content: center;
    }
    
    .theForm {
        border: 2px solid darkgray;
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
        text-align: left;
        width: 60%;
    }

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

    .addButton {
        background-color: lightgray;
        color: black;
        border: 2px solid white;
        padding: 8px 16px;
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

    h1 {
        text-align: center;
        font-family: 'Walter Turncoat', cursive;
    }

`

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
        <AddStyled>
            <h1>Add a Word!</h1>
            <div className="theContainer">
                <div class="theForm">
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
                        <input className="addButton" type="submit" value="Add Word"/>
                    </form>
                </div>
            </div>
        </AddStyled>
    )
}

export default AddWord