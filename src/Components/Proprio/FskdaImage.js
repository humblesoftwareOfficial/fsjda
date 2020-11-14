import React, { Component } from 'react'
import image from '../../assets/fsjda/logo.png'
export default class FskdaImage extends Component {
    render() {
        return (
            <div>
                {
                    this.props.min ?
                    (
                        <img src={image} className="App-logo-Min" alt="logo" />
                    ):
                    (
                        <img src={image} className="App-logo" alt="logo" />
                    )
                }
            </div>
        )
    }
}
