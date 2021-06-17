import HomePage from "./HomePage"
import NavBar from "./NavBar"
import Search from "./Search"
import AddWord from "./AddWord"
import MyWords from "./MyWords"
import Login from "./Login"
import {Switch, Route} from 'react-router-dom'

function PageContent() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component ={HomePage} />
                <Route exact path='/search' component ={Search} />
                <Route exact path='/addword' component ={AddWord} />
                <Route exact path='/mywords' component ={MyWords} />
                <Route exact path='/login' component ={Login} />
            </Switch>
        </div>
    )
}

export default PageContent