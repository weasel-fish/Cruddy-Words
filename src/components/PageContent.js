import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Search from "./Search"
import AddWord from "./AddWord"
import MyWords from "./MyWords"
import Login from "./Login"
import {Switch, Route, useHistory} from 'react-router-dom'
import { useEffect, useState } from "react"

function PageContent() {
    const myKey="key goes here"
    const [ourWords, setOurWords] = useState([])
    const [userList, setUserList] = useState([])
    const [user, setUser] = useState("")

    useEffect(() => {
        fetch('http://localhost:4000/words')
        .then(resp => resp.json())
        .then(setOurWords)

        fetch('http://localhost:4000/users')
        .then(resp => resp.json())
        .then(setUserList)
    }, [])

    let history = useHistory()

    function goHome() {
        history.push("/")
    }

    function handleLogin(e){
        let userId = parseInt(e.target.value)
        let userObj = userList.find((user) => user.id === userId)
        setUser(userObj)
        goHome()
    }

    const usersWords = ourWords.filter(word => word.userAssc === user.id)

    function handleLogout() {
        setUser('')
    }

    function handleSubmit(object){
        console.log(object)
    }

    return (
        <div>
            <NavBar user={user} handleLogout={handleLogout}/>
            <Switch>
                <Route exact path='/' component ={() => <HomePage myKey={myKey} user={user} handleSubmit={handleSubmit}/>} />
                <Route exact path='/search' component ={() => <Search ourWords={ourWords} myKey={myKey} user={user} handleSubmit={handleSubmit}/>} />
                <Route exact path='/addword' component ={() => <AddWord user={user} handleSubmit={handleSubmit}/>} />
                <Route exact path='/mywords' component ={() => <MyWords usersWords={usersWords} user={user}/>} />
                <Route exact path='/login' component ={() => <Login userList={userList} handleLogin={handleLogin} user={user}/>} />
            </Switch>
        </div>
    )
}

export default PageContent