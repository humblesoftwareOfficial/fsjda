import React, {Component} from 'react'
import Header from '../Utils/Header'
import Partenaires from '../Partenaires/Partenaires'
import SocialNetwork from '../Home/SocialNetworks'
import Footer from '../Utils/Footer'
import {Layout} from 'antd'
export default class LoginEspace extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        try {
            
        } catch (error) {
            
        }
    }
    render() {
        return(
            <Layout className="background">
                <Header/>
                <SocialNetwork/>
                <Partenaires/>
                <Footer/>
            </Layout>
        )
    }
}