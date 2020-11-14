import React, { Component } from 'react'
import './designButton.scss'
export default class ButoonDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: ''
        }
    }
    componentDidMount() {
        this.detectmob()
    }
    detectmob() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            this.setState({
                device: 'MOBILE'
            })
        } else {
            this.setState({
                device: 'LAPTOP'
            })
        }
    }
    render() {
        return (
            <>
                {
                    this.state.device === 'LAPTOP' ?
                        (
                            <svg viewBox="45 60 400 320" xmlns="http://www.w3.org/2000/svg" className='svgLaptop'>
                                <path
                                    fill="#000"
                                    d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210"
                                    mask={"url(#" +this.props.id +")"}
                                ></path>
                                <mask id={this.props.id}>
                                    <rect width="100%" height="100%" fill="#fff" x={0} y={0} />
                                    <text x={150} y={227} fill="#000">
                                        {this.props.titre}
                                    </text>
                                </mask>
                            </svg>
                        ) :
                        (
                            <>
                                {
                                    this.state.device === 'MOBILE' ?
                                        (
                                            <svg viewBox="45 60 400 320" xmlns="http://www.w3.org/2000/svg" className='svgMobile'>
                                                <path
                                                    fill="#000"
                                                    d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210"
                                                    mask={"url(#" +this.props.id +")"}
                                                ></path>
                                                <mask id={this.props.id}>
                                                    <rect width="100%" height="100%" fill="#fff" x={0} y={0} />
                                                    <text x={150} y={227} fill="#000">
                                                        {this.props.titre}
                                                    </text>
                                                </mask>
                                            </svg>
                                        ) :
                                        (
                                            null
                                        )
                                }
                            </>
                        )
                }
            </>
        )
    }
}
