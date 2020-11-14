import React, { Component } from 'react'
import { Layout, Row, Col, Spin, Icon, Affix } from 'antd'
import Header from '../../Utils/Header'
import Footer from '../../Utils/Footer'
import AlbumContent from './AlbumContent'
import ImageContent from './ImageContent'
//import api from '../../../api/index'
import Utils from '../../../Utils/detectDevice'
import HeaderFromPage from '../../Utils/HeaderFromPage'
import Partenaires from '../../Partenaires/Partenaires'
import SocialNetwork from '../../Home/SocialNetworks'
import ActualiteVideosContent from '../../Actualites/ActualitesVideos/ActualiteVideosContent'
import HelperMedia from '../../../Helper/Media/helperMedia'
const antIcon = <Icon type="loading" style={{ fontSize: 56 }} spin />;
export default class Mediatheque extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumSelected: null,
            images: null,
            loading: false,
            device: '',
            albums: [],
            top: 50,
            partenaireVisible: false
        }
        this.onAlbumSelect = this.onAlbumSelect.bind(this)
    }
    componentDidMount() {
        try {
            window.scrollTo(0,0)
            this.setState({
                device: Utils.DetectDevice()
            })
            this.getAlbums()
            
        } catch (err) {
            console.log(err)
        }
    }
    async getAlbums() {
        /*
        await api.GetAlbums().then((response) => {
            if (response.data.success) {
                this.setState({
                    albums: response.data.data,
                    loading: false
                })
            }
        }).catch(err => {
            console.log(err)
        })
        */
       this.setState({
           albums: HelperMedia.getAlbums(),
           loading: false
       })
    }
    async onAlbumSelect(code, libelle, _id, first) {
        let alb = {
            libelle: libelle,
            code: code
        }
        this.setState({
            albumSelected: alb,
            loading: true
        })
        /*
        
        const payload = {
            code: alb.code
        }
        await api.GetImageByAlbum(payload).then((response) => {
            if (response.data.success) {
                this.setState({
                    images: response.data.data,
                    loading: false
                })
            }
        }).catch(err => {
            console.log(err)
        })
        */
       if(this.state.device === "LAPTOP" && !first) {
            document.getElementById('video').scrollIntoView() ;
       }
        this.setState({
            images: HelperMedia.getImagesByAlbum(_id)
        }, () => this.setState({
            loading: false
        }))
    }
    onSwitch() {
        
    }
    render() {
        return (
            <Layout className="background">
                <Header fixed={false} active="mediatheque"></Header>
                <Row>
                    {
                        this.state.device === 'MOBILE' ?
                            (
                                <>
                                    <Affix offsetTop={this.state.top}>
                                        <div className="enteteContent">
                                            <small className="entete">MÉDIATHÈQUE</small>
                                        </div>
                                    </Affix>
                                    <HeaderFromPage title="Albums" menu={this.state.albums} OnSubMenuClicked={this.onAlbumSelect} />
                                    {
                                        this.state.loading ?
                                            (
                                                <div style={{ marginTop: '50px' }}>
                                                    <h4> {this.state.albumSelected.libelle}</h4>
                                                    <Spin indicator={antIcon} />
                                                    <p>Chargement des Images ...</p>
                                                </div>
                                            ) :
                                            (
                                                <Col >
                                                    <ImageContent
                                                        images={this.state.images}
                                                        device={this.state.device}
                                                        album={this.state.albumSelected}
                                                    />
                                                    <ActualiteVideosContent/>
                                                </Col>
                                            )
                                    }
                                </>
                            ) :
                            (
                                <>
                                <ActualiteVideosContent />
                                <hr id="video"/>
                                        <Col span={8}>
                                            <Affix>
                                            <div >
                                                <AlbumContent 
                                                    onAlbumSelect={this.onAlbumSelect} 
                                                    device={this.state.device}               
                                                />
                                            </div>
                                            </Affix>
                                        </Col>
                                    {
                                        this.state.loading ?
                                            (
                                                <div style={{ marginTop: '50px' }}>
                                                    <h4> {this.state.albumSelected.libelle}</h4>
                                                    <Spin indicator={antIcon} />
                                                    <p>Chargement des Images ...</p>
                                                </div>
                                            ) :
                                            (
                                                <Col span={16}>
                                                    <ImageContent
                                                        images={this.state.images}
                                                        device={this.state.device}
                                                        album={this.state.albumSelected}
                                                    />
                                                    
                                                </Col>
                                            )
                                    }
                                </>
                            )
                    }
                </Row>
                <SocialNetwork/>
                <Partenaires />
                <Footer />
            </Layout >
        )
    }
}