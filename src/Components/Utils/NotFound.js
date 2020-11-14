import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Partenaires from '../Partenaires/Partenaires'
import {Layout} from 'antd'
import notfound from './notfound.png'
export default class NotFound extends Component {

    render() {
        return(
            <Layout>
                <Header/>
                <div className="contentPrésentationMobileF">
                    <h1>Désolé, cette page n'existe pas.</h1>
                    <img src={notfound} alt="not_page" className="notfound"/>
                </div>
                <Partenaires/>
                <Footer/>
            </Layout>
        )
    }
}