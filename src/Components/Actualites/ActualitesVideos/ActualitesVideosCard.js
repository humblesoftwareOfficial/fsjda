import React, { Component } from 'react'
import { Col, Tag } from 'antd'
import { Card } from 'react-bootstrap'
import './actualites.css'

import YouTube from 'react-youtube';
export default class ActualitesVideosCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: '',
            opts: {
                height: '300',
                width: '100%',
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  
                },
              }
        }
        this._onReady = this._onReady.bind(this)
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    componentDidMount(){
        /*
        switch (this.props.name) {
            case 'MNFCA19':
                this.setState({
                    video: vUn
                })
                break;
            case 'MNSP20':
                this.setState({
                    video: vDeux
                })
                break;
            case 'YDCMJ19':
                this.setState({
                    video: vTrois
                })
                break;
            case 'MNGPTA20':
                    this.setState({
                        video: vSQuatre
                    })
                    break;
            case 'MNGPB19':
                this.setState({
                    video: vSCinq
                })
                break;
            case 'MNGPS20':
                this.setState({
                    video: vSSix
                })
                break;
            default:
                break;
        }
        */
    }
    render() {
        return (
            <>
                {
                    this.props.device === 'MOBILE' ?
                        (
                                <Card style={{  marginBottom: 15 }}>
                                <YouTube videoId={this.props.lien} opts={this.state.opts} onReady={this._onReady} />
                                    <Card.Body style={{ backgroundColor: 'rgb(22, 42, 58)' }}>
                                        <Card.Title className='titreActualites'>{this.props.event}</Card.Title>
                                        <p className='descriptionActualites'>
                                            {this.props.description}
                                        </p>
                                        <Card.Text >
                                            <Tag color="#000">{this.props.annee}</Tag>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        ) :
                        (
                            <Col span={8} className="pointer">
                                <Card style={{  marginBottom: 15, height: '28rem' }}>
                                    <YouTube videoId={this.props.lien} opts={this.state.opts} onReady={this._onReady} />
                                    <Card.Body style={{ backgroundColor: 'rgb(22, 42, 58)' }}>
                                        <Card.Title className='titreActualites'>{this.props.event}</Card.Title>
                                        <p className='descriptionActualites'>
                                        {this.props.description}
                                        </p>
                                        <Card.Text >
                                            <Tag color="#000">{this.props.annee}</Tag>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                }
            </>
        )
    }
}
