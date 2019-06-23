// create your App component here
import React, {Component} from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            peopleInSpace : []
        }
    }

    updatePeopleInSpace(){
        return this.state.peopleInSpace.map((person) => 
        <div>
            <h1>{person.name}</h1>
            <h2>{person.craft}</h2>
        </div>)
    }

    render(){
        return(
            <div>
                {this.updatePeopleInSpace()}
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
    }
}

export default App