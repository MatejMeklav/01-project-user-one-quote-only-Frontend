import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <Button>{this.props.text}</Button>
    )
  }
}
