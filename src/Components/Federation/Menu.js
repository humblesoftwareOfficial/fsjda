import React, { Component } from 'react'
import Utils from '../../Utils/detectDevice'
import { Layout, Row, Col} from 'antd'
import './design.scss'
import HistoireJudo from './HistoireJudo'
import PresentationFederation from './PresentationFederation'
import VisionPresident from './VisionPredident'
import JudoValueurs from './JudoValeurs'
import Bureau from './Bureau'
import Progression from './Progression'
import Statuts from './Statuts'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: ''
        }
        this.hideShow = this.hideShow.bind(this)
    }
    componentDidMount() {
        this.setState({
            device: Utils.DetectDevice()
        })
    }
    renderContent() {
        switch (this.props.subMenu) {
            case 1:
                return <JudoValueurs/>
            case 2:
                return <HistoireJudo/>
            case 3:
                return <PresentationFederation/>
            case 4:
                return <VisionPresident/>
            case 5:
                return <Bureau/>
            case 6:
                return <Progression/>
            case 7:
                return <Statuts/>
            default:
                return <JudoValueurs/>
        }
    }
    hideShow(element) {
        var x = document.getElementById(element);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    render() {
        return (
            <Layout style={{ backgroundColor: '#FFF0' }}>
                
                    {
                        this.state.device === "MOBILE" ?
                        (
                            <div className="contentPrésentationMobileF">
                                
                                <div id="valeurs" style={{marginBottom: '100px'}}>
                                    <Col>
                                        <JudoValueurs/>
                                    </Col>
                                </div>
                               
                                <div id="progression" style={{marginBottom: '100px'}}>
                                    <Col >
                                        <Progression/>
                                    </Col>
                                </div>
                                
                                <div id="histoire" style={{marginBottom: '100px'}}>
                                    <Col >
                                        <HistoireJudo/>
                                    </Col>
                                </div>
                                
                                <div id="presentation" style={{marginBottom: '100px'}}>
                                    <Col >
                                        <PresentationFederation/>
                                    </Col>
                                </div>
                                
                                <div id="vision" style={{marginBottom: '100px'}}>
                                    <Col>
                                        <VisionPresident/>
                                    </Col>
                                </div>
                                
                                <div id="statuts" style={{marginBottom: '100px'}}>
                                    <Col >
                                        <Statuts/>
                                    </Col>
                                </div>
                                
                                <div id="bureau" style={{marginBottom: '100px'}}>
                                    <Col >
                                        <Bureau/>
                                    </Col>
                                </div>
                                

                            </div>
                        ):
                        (
                            <>
                            <Row className="contentPrésentation">
                                {
                                    this.renderContent()
                                }
                                </Row>
                            </>
                        )
                    }
            </Layout>
        )
    }
}