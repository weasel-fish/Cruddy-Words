function Login( {userList, handleLogin} ) {

    console.log(userList)

    return (
        <div>
            <h1>LOGIN:</h1>
            <select id="user" name="user" onChange={handleLogin}>
                <option value="" disabled selected>Select here</option>
                {userList.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
            </select>
            <h1>Create New User:</h1>
            <form>
                <input type="text" placeholder="Your name here..."></input>
                <input type="submit" value="Submit"></input>
            </form>
            
        </div>
    )
}

export default Login