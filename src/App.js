import React, { Component } from 'react'

export default class App extends Component {
   state = {}

   componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
         .then(resp => resp.json())
         .then(json => this.setState({data: json}))
   }
   

   render() {
      return (
         <div>
            
         </div>
      )
   }
}
