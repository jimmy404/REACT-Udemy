import React, { Component } from 'react'

const HelloRender = (props) => <h1>Hola render!</h1>

class Render extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = { mensaje: 'otro mensaje' }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    console.log('render')
    return (
      <HelloRender/>
    );
  }
}

export default Render