import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Search from "./Search"
import AddWord from "./AddWord"
import MyWords from "./MyWords"
import Login from "./Login"
import {Switch, Route, useHistory} from 'react-router-dom'
import { useEffect, useState } from "react"

function PageContent() {
    const myKey=""
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
        goHome()
    }

    function handleNewUser(newUser) {
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: newUser})
        })
        .then(resp => resp.json())
        .then(data => {
            const newUserList = [...userList, data]
            setUserList(newUserList)
            setUser(data)
            goHome()
        })
    }

    function handleSubmit(object, type){

        if (typeof object.synonyms === 'string') {
            let newsyn = object.synonyms.split(',')
            object.synonyms = newsyn
        }        

        if(object.userAssc === user.id) {
            const newObj = {...object}

            if(type === 'favorited') {
                let liked = newObj.favorited
                newObj.favorited = !liked
            }

            fetch(`http://localhost:4000/words/${object.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newObj)
            })
            .then(resp => resp.json())
            .then((data) => {
                history.push('/mywords')
                const indx = ourWords.findIndex(word => word.id === data.id)
                const newArray = [...ourWords]
                newArray.splice(indx, 1, data)
                setOurWords(newArray)
            })
        } else {
            const newObj = {
                ...object,
                userAssc: user.id,
                favorited: false,
                modified: false,
                created: false
            }

            delete newObj.id

            newObj[type] = true

            fetch(`http://localhost:4000/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newObj)
            })
            .then(resp => resp.json())
            .then((data) => {
                history.push('/mywords')
                const newArray = [...ourWords]
                newArray.push(data)
                setOurWords(newArray)
            })
        }
    }


    return (
        <div>
            <NavBar user={user} handleLogout={handleLogout}/>
            <Switch>
                <Route exact path='/' component ={() => <HomePage myKey={myKey} user={user} handleSubmit={handleSubmit}/>} />
                <Route exact path='/search' component ={() => <Search ourWords={ourWords} myKey={myKey} user={user} handleSubmit={handleSubmit}/>} />
                <Route exact path='/addword' component ={() => <AddWord user={user} handleSubmit={handleSubmit}/>} />
                <Route exact path='/mywords' component ={() => <MyWords usersWords={usersWords} user={user} handleSubmit={handleSubmit}/>} />
                <Route exact path='/login' component ={() => <Login userList={userList} handleLogin={handleLogin} user={user} handleNewUser={handleNewUser}/>} />
            </Switch>
        </div>
    )
}

export default PageContent