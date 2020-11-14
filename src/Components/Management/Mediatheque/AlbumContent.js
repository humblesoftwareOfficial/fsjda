import React, { Component } from 'react'
import { List, Row } from 'antd'
import './design.scss'
import AlbumCard from './AlbumCard'
//import api from '../../../api/index'
import HelperMedia from '../../../Helper/Media/helperMedia'
export default class AlbumContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            albums: [],
            albumSelected: null
        }
        this.onAlbumSelect = this.onAlbumSelect.bind(this)
    }
    componentDidMount() {
        try {
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
    changePage() {
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }
    onAlbumSelect(album) {
        this.setState({
            albumSelected: album
        })
        this.props.onAlbumSelect(album.code, album.libelle, album._id)
    }
    renderAlbum() {
        if(this.state.albums.length > 0) {
            if(this.state.albumSelected === null) {
                let al = {
                    code: this.state.albums[0].code,
                    libelle: this.state.albums[0].libelle,
                    _id: this.state.albums[0]._id
                }
                this.setState({
                    albumSelected: al
                })
                this.props.onAlbumSelect(al.code, al.libelle, al._id, 1)
                return this.state.albums.map((album, index) => {
                    if(album.code === al.code) {
                        return (
                            <AlbumCard key={album.code} album={album} onAlbumSelect={this.onAlbumSelect} active={true}/>
                        )
                    } else {
                        return (
                            <AlbumCard key={album.code} album={album} onAlbumSelect={this.onAlbumSelect} active={false}/>
                        )
                    }
                })
            } else {
                return this.state.albums.map((album, index) => {
                    if(album.code === this.state.albumSelected.code) {
                        return (
                            <AlbumCard key={album.code} album={album} onAlbumSelect={this.onAlbumSelect} active={true}/>
                        )
                    } else {
                        return (
                            <AlbumCard key={album.code} album={album} onAlbumSelect={this.onAlbumSelect} active={false}/>
                        )
                    }
                })
            }
        } else {
            return null
        }
    }
    render() {
        return (
            <div className="contentSectionAlbum">
                <p className='titre'>
                    Albums
                </p>
                <div>
                    {
                        this.props.device === 'MOBILE' ?
                            (
                                <List
                                    itemLayout="vertical"
                                    size="default"
                                    loading={this.state.loading}
                                    pagination={{
                                        onChange: page => {
                                            this.changePage()
                                        },
                                        pageSize: 3,
                                    }}
                                    dataSource={this.state.albums}
                                    renderItem={album => (
                                        <List.Item key={album.code}>
                                            <AlbumCard key={album.code} album={album} onAlbumSelect={this.onAlbumSelect} />
                                        </List.Item>
                                    )}
                                />
                            ) :
                            (
                                <div className="deroulantPalmares">
                                        <Row>
                                            {
                                                this.renderAlbum()
                                            }
                                        </Row>

                                    </div>
                            )
                    }
                </div>
            </div>
        )
    }
}
