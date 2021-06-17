import HomePage from "./HomePage"
import NavBar from "./NavBar"
import {Switch, Route} from 'react-router-dom'

function PageContent() {
    return (
        <div>
        <NavBar />
        <Route exact path='/' component ={HomePage} />
        </div>
    )
}

export default PageContent