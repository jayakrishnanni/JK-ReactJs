import React, { Component } from 'react'

export class ClassClick extends Component {
  ClassClick() {
        console.log('Hello')
  }
  render() {
    return (
      <div><button onClick={this.ClassClick}>click me</button></div>
    )
  }
}

export default ClassClick