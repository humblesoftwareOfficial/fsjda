import React, { Component } from 'react';
import { Layout, Row, Col, Affix } from 'antd'
import ContentClub from './ContentClub'
import MenuItem from './MenuItemClub'
import './design.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Utils from '../../../Utils/detectDevice'
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuClub: [
                {
                    name: "Procédure d'inscription",
                    key: 1
                },
                {
                    name: "Trouver un club",
                    key: 2
                },
                {
                    name: "Formulaire d'inscription",
                    key: 3
                }
            ],
            device: '',
            subMenu: 1,
            top: 50,
            bottom: 10,
        }
        this.OnSubMenuClicked = this.OnSubMenuClicked.bind(this)
        this.linkClicked = this.linkClicked.bind(this)
    }
    componentDidMount() {

        this.setState({
            device: Utils.DetectDevice()
        })
    }
    OnSubMenuClicked(key) {
        this.setState({
            subMenu: key
        })
        window.scrollTo(0, 0)
    }
    linkClicked(key) {
        if (this.state.device === "LAPTOP") {
            this.OnSubMenuClicked(key)
        } else {
            if (key === 2) {
                this.props.redirect()
            } else {
                var elmnt = document.getElementById(key);
                elmnt.scrollIntoView();
            }
        }
    }
    renderMenuClub() {
        return this.state.menuClub.map((menu, index) => {
            if (menu.key === this.state.subMenu) {
                return (
                    <MenuItem OnSubMenuClicked={this.OnSubMenuClicked} menu={menu} key={index} active={true} />
                )
            } else {
                return (
                    <MenuItem OnSubMenuClicked={this.OnSubMenuClicked} menu={menu} key={index} active={false} />
                )
            }
        })
    }
    render() {
        return (
            <Layout style={{ backgroundColor: '#FFF0' }} className="background">
                <Row>
                    {
                        this.state.device === 'MOBILE' ?
                            (
                                <>
                                    <Affix offsetTop={this.state.top}>
                                        <div className="enteteContent">
                                            <small className="entete">INSCRIPTION</small>
                                        </div>
                                    </Affix>
                                    <Col>

                                        <div className="">
                                            <ContentClub subMenu={this.state.subMenu} linkClicked={this.linkClicked} />
                                        </div>
                                    </Col>
                                </>
                            ) :
                            (
                                <>
                                    <Col span={8}>
                                        <Affix>
                                            <div className="contentTrouverClub">
                                                <p className='titre'>
                                                    Menu
                                            </p>
                                                {
                                                    this.renderMenuClub()
                                                }
                                            </div>
                                        </Affix>
                                    </Col>
                                    <Col span={16}>
                                        <ContentClub subMenu={this.state.subMenu} linkClicked={this.linkClicked} />
                                    </Col>
                                </>
                            )
                    }
                </Row>
            </Layout>
        );
    }
}
