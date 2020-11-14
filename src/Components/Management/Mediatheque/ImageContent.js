import React, { Component } from 'react'
import ImageCard from './ImageCard'
import { List } from 'antd'
export default class ImageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderImages() {
        return this.props.images.map((image, index) => {
            return (
                <ImageCard key={index} />
            )
        })
    }
    render() {
        return (
            <>
                <div className={this.props.device === "MOBILE" ? "contentPrésentationMobileFC": "contentPrésentation"}>
                    <p className="titre">Photos</p>
                    {
                        this.props.images ?
                            (
                                <>
                                    <p className="titre">{this.props.album.libelle}</p>
                                    {
                                        this.props.device === 'MOBILE' ?
                                            (
                                                <List
                                                    itemLayout="vertical"
                                                    size="default"
                                                    loading={this.state.loading}
                                                    dataSource={this.props.images}
                                                    grid={{ gutter: 16, column: 3 }}
                                                    renderItem={image => (
                                                        <List.Item key={image.code}>
                                                            <ImageCard key={image.code}
                                                                image={image}
                                                                onAlbumSelect={this.onAlbumSelect}
                                                                album={this.props.album}
                                                                device={this.props.device}
                                                            />
                                                        </List.Item>
                                                    )}
                                                />
                                            ) :
                                            (
                                                <List
                                                    itemLayout="vertical"
                                                    size="default"
                                                    loading={this.state.loading}
                                                    dataSource={this.props.images}
                                                    grid={{ gutter: 16, column: 4 }}
                                                    renderItem={image => (
                                                        <List.Item key={image.code}>
                                                            <ImageCard key={image.code}
                                                                image={image}
                                                                onAlbumSelect={this.onAlbumSelect}
                                                                album={this.props.album}
                                                                device={this.props.device}
                                                            />
                                                        </List.Item>
                                                    )}
                                                />
                                            )
                                    }
                                </>
                            ) :
                            (
                                <p>SELECTIONNEZ UN ALBUM POUR VOIR LES IMAGES</p>
                            )
                    }
                </div>
            </>
        )
    }
}
