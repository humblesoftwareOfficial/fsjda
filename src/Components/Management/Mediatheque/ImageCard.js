import React, { Component } from 'react'
//import ReactDOM from 'react-dom';
import { Card, Col, } from 'react-bootstrap'
//import socketIOClient from 'socket.io-client';
//import { SocketIP } from '../../../api/socket'

export default class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: null
        }
        this.onClick = this.onClick.bind(this)
        this.onClose = this.onClose.bind(this)
    }
    onClickImage() {
    }
    async componentDidMount() {
        this.setState({
            src: require(`../../../assets/media/images/${this.props.album.code}/${this.props.image.description}.jpg`)
        })
        /*
        const socket = socketIOClient(SocketIP.ip);
        const media = {
            image: this.props.image,
            album: this.props.album
        }
        socket.emit(SocketIP.imageMessage, media)
        await socket.on(SocketIP.receiveImage, data => {
            this.setState({
                imageSource: data.buffer,
                imageComing: false
            }, () => {
                const buffer = data.buffer;
                ReactDOM.render(<img src={`data:image/jpeg;base64,${buffer}`} className="imgAlbum zoomMedia" alt="imagealbum" />, document.getElementById(data.buffer))

            })
        })
        */
    }
    onClick() {
        var modal = document.getElementById(this.props.image.description);
        modal.style.display = "block";
    }
    onClose() {
        var modal = document.getElementById(this.props.image.description);
        modal.style.display = "none";
    }
    render() {

        return (
            <Col className="hand">
                {
                    this.props.device === 'MOBILE' ?
                        (
                            <>
                                <Card style={{ minHeight: '10rem', }} onClick={this.onClick}>
                                    <Card.Body id={this.state.imageSource} >
                                        <img src={this.state.src} className="imgAlbum zoomMedia" alt="imagealbum" />
                                    </Card.Body>
                                </Card>
                                <div id={this.props.image.description} className="modalM">
                                        <div className="modal-contentM">
                                            <span className="closeM" onClick={this.onClose}>&times;</span>
                                            <img src={this.state.src} className="imgModal" alt="imagealbum" />
                                        </div>
                                </div>
                            </>
                        ) :
                        (
                            <>
                                <Card style={{ height: '10rem', }} >
                                    <Card.Body id={this.state.imageSource} onClick={this.onClick}>
                                        <img src={this.state.src} className="imgAlbum zoomMedia" alt="imagealbum" />
                                    </Card.Body>
                                </Card>
                                <div id={this.props.image.description} className="modalM">
                                    <div className="modal-contentM">
                                        <span className="closeM" onClick={this.onClose}>&times;</span>
                                        <img src={this.state.src} className="imgModal" alt="imagealbum" />
                                    </div>
                                </div>
                            </>
                        )
                }
            </Col>
        )
    }
}
