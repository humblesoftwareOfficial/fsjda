import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'mdbreact/dist/css/mdb.css'
import {Link} from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import { Popover } from 'antd';
export default class DisciplineCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: null
        }
    }
    componentDidMount() {
        if (this.props.subMenu) {
            try {
                if (this.props.options) {
                    this.setState({
                        options: this.optionItemConstruct(this.props.options)
                    })
                }
            } catch (error) {
                this.setState({
                    options: null
                })
            }
        }
    }
    optionItemConstruct(options) {
        return (
            <div>
                {
                    this.props.options.map((option, index) => {
                        return (
                            <p key={index} className="linkCover">
                                <Link className="linking" to="/">{option}</Link>
                            </p>
                        )
                    })
                }
            </div>
        )
    }
    render() {
        return (
            <>
                {
                    this.props.subMenu ?
                        (
                            <Popover placement="bottom" title={this.props.titre} content={this.state.options} trigger="hover">
                                <MDBBtn color={this.props.couleur} size="sm">{this.props.titre}</MDBBtn>
                            </Popover>
                        ) :
                        (
                            <Link to={this.props.to}>
                                <MDBBtn color={this.props.couleur} size="sm">{this.props.titre}</MDBBtn>
                            </Link>
                        )
                }
            </>
        )
    }
}
