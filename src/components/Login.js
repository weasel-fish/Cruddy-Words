import { useState } from "react"
import styled from "styled-components"

const LoginStyle = styled.div`
    text-align: center;
    font-family: 'Walter Turncoat', cursive;

    select {
        width: 100%;
        font-family: 'Lato', sans-serif;
        min-width: 15ch;
        max-width: 30ch;
        border: 1px solid darkgrey;
        border-radius: 0.25em;
        padding: 0.25em 0.5em;
        font-size: 1.25rem;
        cursor: pointer;
        line-height: 1.1;
        background-color: #fff;
        background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
    }

    .nameHere {
        width: 100%;
        font-family: 'Lato', sans-serif;
        min-width: 15ch;
        max-width: 20ch;
        border: 1px solid darkgrey;
        border-radius: 0.25em;
        padding: 0.25em 0.5em;
        font-size: 1.25rem;
        margin: 5px;
        line-height: 1.3;
        background-color: #fff;
        background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
        vertical-align: middle;
    }
    .addUser {
        background-color: lightgray;
        color: black;
        border: 2px solid white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 5px;
        transition-duration: 0.4s;
        cursor: pointer;
        display: inline-block;
        border-radius: 8px;
        vertical-align: middle;

        &:hover {
        background-color: grey;
        color: white;
        }
    }
    form {
        text-align: center;

    }
`

function Login( {userList, handleLogin, handleNewUser} ) {
    const [userInput, setUserInput] = useState('')

    function handleChange(e) {
        setUserInput(e.target.value)
    }

    return (
        <LoginStyle>
            <h1>LOGIN:</h1>
            <select id="user" name="user" onChange={handleLogin} defaultValue="default">
                <option value="default" disabled>Select here</option>
                {userList.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
            </select>
            <h1>Create New User:</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleNewUser(userInput)
                }}>
                <input className="nameHere" onChange={handleChange} type="text" placeholder="Your name here..." value={userInput}></input>
                <input className="addUser" type="submit" value="Submit"></input>
            </form>
            
        </LoginStyle>
    )
}

export default Login