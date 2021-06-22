import { useState } from "react"

function Login( {userList, handleLogin, handleNewUser} ) {
    const [userInput, setUserInput] = useState('')

    function handleChange(e) {
        setUserInput(e.target.value)
    }

    return (
        <div>
            <h1>LOGIN:</h1>
            <select id="user" name="user" onChange={handleLogin}>
                <option value="" disabled selected>Select here</option>
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
            
        </div>
    )
}

export default Login