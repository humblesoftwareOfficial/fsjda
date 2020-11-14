import React, { Component } from 'react'
import Header from '../Utils/Header'
import Footer from '../Utils/Footer'
import { Layout, Row, Col, Affix } from 'antd'
import Presentation from './Menu'
import MenuItem from './MenuItemPresentation'
import Utils from '../../Utils/detectDevice'
import Partenaires from '../Partenaires/Partenaires'
import SocialNetwork from '../Home/SocialNetworks'
export default class Federation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    name: 'Le Judo et ses valeurs',
                    key: 1
                },
                {
                    name: 'La progression au Judo',
                    key: 6
                },
                {
                    name: "L'histoire du Judo au Sénégal",
                    key: 2
                },
                {
                    name: 'Présentation de la Fédération',
                    key: 3
                },
                {
                    name: 'Vision du président',
                    key: 4
                },
                {
                    name: 'Statuts',
                    key: 7
                },
                {
                    name: 'Bureau Exécutif',
                    key: 5
                },
                
            ],
            subMenu: 1,
            device: '',
            top: 50,
            bottom: 10,
        }
        this.OnSubMenuClicked = this.OnSubMenuClicked.bind(this)
    }
    componentDidMount() {
        this.setState({
            device: Utils.DetectDevice()
        })
        window.scrollTo(0, 0)
    }
    renderMenu() {
        return this.state.menu.map((menu, index) => {
            if(menu.key === this.state.subMenu) {
                return (
                    <MenuItem key={index} menu={menu} OnSubMenuClicked={this.OnSubMenuClicked} active={true}/>
                )
            } else {
                return (
                    <MenuItem key={index} menu={menu} OnSubMenuClicked={this.OnSubMenuClicked} active={false}/>
                )
            }
            
        })
    }
    OnSubMenuClicked(key, name) {
        this.setState({
            subMenu: key
        })
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Layout className="background">
                {
                    this.state.device === 'MOBILE' ?
                        (
                            <>
                                <Header fixed={true} active="federation"></Header>
                                <Row>
                                    <Affix offsetTop={this.state.top}>
                                        <div className="enteteContent">
                                            <small className="entete">FÉDÉRATION</small>
                                        </div>
                                    </Affix>
                                    <Col>
                                        <Presentation subMenu={this.state.subMenu}/>
                                    </Col>
                                </Row>
                            </>
                        ) :
                        (
                            <>
                                <Header fixed={false} active="federation"/>
                                <Row>
                                    <Col span={8}>
                                        <Affix>
                                            <div className="contentPrésentationMenu">
                                                <p className='titre'>
                                                    Rubriques
                                                        </p>
                                                <div className="deroulant">
                                                    {this.renderMenu()}
                                                </div>
                                            </div>
                                        </Affix>
                                    </Col>
                                    <Col span={16}>
                                        <Presentation subMenu={this.state.subMenu} />
                                    </Col>
                                </Row>
                            </>
                        )
                }
                <SocialNetwork/>
                <Partenaires/>
                <Footer></Footer>
            </Layout>
        )
    }
}
