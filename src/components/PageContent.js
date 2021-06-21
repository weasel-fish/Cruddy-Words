import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Search from "./Search"
import AddWord from "./AddWord"
import MyWords from "./MyWords"
import Login from "./Login"
import {Switch, Route} from 'react-router-dom'
import { useEffect, useState } from "react"

function PageContent() {
    const myKey="your key goes here"
    const [ourWords, setOurWords] = useState([])
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/words')
        .then(resp => resp.json())
        .then(setOurWords)

        fetch('http://localhost:4000/users')
        .then(resp => resp.json())
        .then(setUserList)
    }, [])

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component ={() => <HomePage myKey={myKey}/>} />
                <Route exact path='/search' component ={() => <Search ourWords={ourWords} myKey={myKey}/>} />
                <Route exact path='/addword' component ={AddWord} />
                <Route exact path='/mywords' component ={MyWords} />
                <Route exact path='/login' component ={Login} />
            </Switch>
        </div>
    )
}

export default PageContent