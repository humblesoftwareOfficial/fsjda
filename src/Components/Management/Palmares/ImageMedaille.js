import React, { Component } from 'react'
import argent from '../../../assets/fsjda/medaille-dargent.png'
import or from '../../../assets/fsjda/médaille-or-png.png'
import bronze from '../../../assets/fsjda/medaille-bronze.png'
export default class ImageMedaille extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }
    componentDidMount() {
       try {
           if(this.props.image === 'or') {
               this.setState({
                image: or
               })
           }
           if(this.props.image === 'argent') {
                this.setState({
                image: argent
                })
            }
            if(this.props.image === 'bronze') {
                this.setState({
                 image: bronze
                })
            }
       } catch (err) {
           this.setState({
               image: null
           })
       } 
    }
    render() {
        return (
            <img src={this.state.image} alt="imageMedaille" className="imgSection"/>
        )
    }
}
