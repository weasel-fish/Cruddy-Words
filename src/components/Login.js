import { useState } from "react"
import styled from "styled-components"

const LoginStyle = styled.div`
    text-align: center;
    font-family: 'Walter Turncoat', cursive;
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
                <input onChange={handleChange} type="text" placeholder="Your name here..." value={userInput}></input>
                <input type="submit" value="Submit"></input>
            </form>
            
        </LoginStyle>
    )
}

export default Login