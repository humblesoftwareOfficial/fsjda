import React, { Component } from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import {Layout, Row, Col} from 'antd'
import Partenaires from '../../Partenaires/Partenaires'
import TrouverUnClub from '../Club/TrouverUnClub'
import Utils from '../../../Utils/detectDevice'
import SocialNetwork from '../../Home/SocialNetworks'
const Content = Layout
export default class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device:'',
        }
        this.redirect = this.redirect.bind(this)
    }
    componentDidMount(){
        this.setState({
            device: Utils.DetectDevice()
        })
    }
    redirect() {
        this.props.history.push('/clubs');
        window.location.reload();
    }
    render() {
        return (
            <Layout className="background">
                <Header fixed={this.state.device === "MOBILE" ? true : false} active="inscription"></Header>
                <Content>
                    <Row>
                        <Col>
                            <TrouverUnClub redirect={this.redirect}/>
                        </Col>
                    </Row>
                </Content>
                <SocialNetwork/>
                <Partenaires/>
                <Footer></Footer>
            </Layout>
        )
    }
}
