import React, { Component } from 'react'
import { Icon } from 'antd'
import './sidenav.css'
export default class HeaderFromPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 50,
            bottom: 10,
            click: false,
            title: '',
            subMenuSelected: null
        }
        this.onClick = this.onClick.bind(this)
        this.OnSubMenuClicked = this.OnSubMenuClicked.bind(this)
    }
    onClick() {
        if (this.state.click) {
            document.getElementById("mySidenav").style.width = "0";
            this.setState({
                click: false,
                title: this.props.title
            })
        } else {
            document.getElementById("mySidenav").style.width = "90%";
            this.setState({
                click: true,
                title: ''
            })
        }
    }
    componentDidMount() {
        this.setState({
            title: this.props.title
        })
    }
    renderMenu() {
        if (this.props.menu.length > 0) {
            if (this.state.subMenuSelected === null) {
                let k = this.props.menu[0].key ? this.props.menu[0].key : this.props.menu[0].code
                let l = this.props.menu[0].name ? this.props.menu[0].name : this.props.menu[0].libelle
                let _id = this.props.menu[0]._id ? this.props.menu[0]._id : null
                this.setState({
                    subMenuSelected: {k, l, _id}
                })
                this.props.OnSubMenuClicked(k, l, _id)
            } 
            return this.props.menu.map((menu, index) => {
                let key = menu.key ? menu.key : menu.code
                let libelle = menu.name ? menu.name : menu.libelle
                let _id = menu._id ? menu._id: null
                return (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a href="#" key={key} onClick={() => this.OnSubMenuClicked(key, libelle, _id)}>
                        <Icon type="select" />
                        {libelle}
                    </a>
                )
            })
        } else {
            return (
                null
            )
        }
    }
    OnSubMenuClicked(key, libelle, _id) {
        this.onClick()
        console.log(_id)
        this.props.OnSubMenuClicked(key, libelle, _id)
    }
    render() {
        return (
            <>
                <div id="mySidenav" className="sidenav">
                    <p className="closebtn" onClick={this.onClick}>&times;</p>
                    {this.renderMenu()}
                    <br />
                </div>
                
                    <div className="colorNavBar" onClick={this.onClick} style={{ marginBottom: '10px'}}>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                                <p style={{ color: 'rgb(11, 24, 34)', fontSize: '16px', fontWeight: 'bold' }}>
                                    <Icon type="menu" />
                                     {this.state.title}
                                </p>
                            </div>
                        </div>
                    </div>
                
            </>
        )
    }
}
