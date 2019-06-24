// create your App component here
import React from 'react'

class App extends React.Component {
  state = {
    people: []
  }

  render () {
    return (
      <div>
        {this.state.people.map(person => <li> {person.name}</li>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        people: data.people
      })
    })
  }
}



export default App;
