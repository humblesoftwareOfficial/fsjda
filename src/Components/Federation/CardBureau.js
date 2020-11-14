import React, { Component } from 'react'
//import { Card } from 'react-bootstrap'
//import {Row, Col} from 'antd'

export default class CardBureau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            color: "",
            src: null
        }
    }
    componentDidMount(){
        try {
            this.setState({
                details: this.props.details.split(';'),
                src: require(`../../assets/bureau/${this.props.img}`)
            })
            switch (this.props.fonction) {
                case "Président":
                    this.setState({
                        color: "#d6cfcf"
                    })
                    break;
                case "Secrétaire Général":
                    this.setState({
                        color: "#f5f1c3"
                    })
                    break;
                case "Vice-président": 
                    this.setState({
                        color: "#c3eff5"
                    })
                    break;
                case "Vice-présidente": 
                    this.setState({
                        color: "#c3eff5"
                    })
                    break;
                case "Trésorier Général":
                    this.setState({
                        color: "#f5dac3"
                    })
                    break;
                case "Directeur Technique National":
                    this.setState({
                        color: "#e4f5c3"
                    })
                    break;
                default:
                    break;
            }
        } catch (err) {
            console.log(err)
        }
    }
    renderDetails() {
        return this.state.details.map((det, index) =>{
            return(
                <p key={index}>
                    {det}
                </p>
            )
        })
    }
    render() {
        return (
            <div className="row">

            </div>
        )
    }

}
/*


<Card style={{ marginBottom: 5, minHeight: '13rem', 
                    backgroundColor: this.state.color }}>
                <Card.Body>
                    <Row>
                        <Col >
                            <i className="profileMembre">
                                <img src={this.state.src} className='imgMembre' alt="image1" />
                            </i>
                            <p className="profileClubName">{this.props.fonction}</p>
                            <p>{this.props.prenom + " " + this.props.nom}</p>
                            {this.renderDetails()}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            */