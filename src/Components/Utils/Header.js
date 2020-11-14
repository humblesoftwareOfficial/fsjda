import React, { Component } from 'react'
import NewHeader from './NewHeader'
import '../../Style/Style/component.css'
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      bottom: 10,
    };
  }
  render() {
    return (
        <NewHeader active={this.props.active}/>
      )
  }
}
