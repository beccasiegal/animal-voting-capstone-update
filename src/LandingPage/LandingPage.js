import React from "react"
import { Link, Router } from 'react-router-dom'

class LandingPage extends React.Component{
render (){
    return (
        <Router>
        <header role="banner">
        <h1>Animal Naming App</h1>
    </header>
    
    <section>
        <p>Choose an image of an animal on the next page, give it a name, then vote on your favoirte name from the list</p>
    </section>
    <section>
    <Link to= '/animals' >Choose an animal</Link>
    </section>
    </Router>
    )
}
}
  
export default LandingPage