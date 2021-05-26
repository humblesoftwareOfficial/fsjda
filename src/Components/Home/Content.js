import React, { Component } from 'react'
import { Layout, Col, Row } from 'antd'
import {Link} from 'react-router-dom'
import ContentImage from './ContentImage'
import 'antd/dist/antd.css';
import ico_un from '../../assets/icones/1.png'
import ico_deux from '../../assets/icones/2.png'
import tokyo from '../../assets/icones/tokyo.png'
import ico_quatre from '../../assets/icones/4.png'
import ico_cinq from '../../assets/icones/5.png'
import ico_six from '../../assets/icones/6.png'
import ico_sept from '../../assets/icones/7.png'
import ico_huit from '../../assets/icones/8.png'
import ico_neuf from '../../assets/icones/9.png'
import Principal from '../Update/Home/Principal';
export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: '',
            titre: '',
            description: '',
        }
        this.onImageChange = this.onImageChange.bind(this)
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
    onImageChange(titre, description) {
        this.setState({
            titre: titre,
            description: description
        })
    }
    render() {
        return (
            <div>
                <Principal device={this.state.device}/>
            </div>
        )
    }
}
