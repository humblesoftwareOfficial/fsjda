import React, { Component } from 'react'
import {Layout, Row, Col} from 'antd'
import VideosCard from './ActualitesVideosCard'
import Utils from '../../../Utils/detectDevice'
export default class ActualiteVideosContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: ''
        }
    }
    componentDidMount() {
        this.setState({
            device: Utils.DetectDevice()
        })
    }
    render() {
        return (
            <Layout style={{

                margin: "10px 16px",
            }}>
                {
                    this.state.device === 'MOBILE' ?
                    (
                        <Row>
                            <Col>
                            <VideosCard device={this.state.device} 
                                name="MNFCA19" 
                                lien="d17jWdFZglI"
                                description="Mbagnick Ndiaye(SEN) vs Mohamed Sofiane Belrekaa(ALG) " 
                                annee="2019"
                                event="championnats d'Afrique 2019 (finale)"
                            />
                            </Col>
                            <Col>
                            <VideosCard device={this.state.device} name="MNGPB19" 
                                lien="iaZeIvhrHqs"
                                    description="Mbagnick Ndiaye(SEN) vs Zarko Culum(SRB)" 
                                    annee="2019"
                                    event="Grand Prix de Budapest 2019"
                                />                            
                            </Col>
                            <Col>
                            <VideosCard device={this.state.device} name="MNGPS20" 
                                lien="SA_tALrpezs"
                                    description="Mbagnick Ndiaye(SEN) vs MEYER Roy(NED)" 
                                    annee="2020"
                                    event="Grand Slam Paris 2020"
                                />
                            </Col>
                            <Col>
                            <VideosCard device={this.state.device} name="MNGPTA20" 
                                lien="BmNo2em1VTc"
                                    description="Mbagnick Ndiaye(SEN) vs Rakhimov Temur (TJK)" 
                                    annee="2020"
                                    event="Grand Prix Tel Aviv 2020"
                                />
                            </Col>
                            <Col>
                            <VideosCard device={this.state.device} name="MNSP20" 
                                    lien="cbHPEymp4mA"
                                    description="Mbagnick Ndiaye(SEN) vs Luka Lomidze(FRA)" 
                                    annee="2020"
                                    event="Grand Slam Paris 2020"
                                />
                            </Col>
                            <Col>
                            <VideosCard device={this.state.device} name="YDCMJ19" 
                                lien="vc9ISz3-hdM"
                                description="Yacine Diatta(SEN) vs une Ashley King (USA)" 
                                annee="2019"
                                event="Championnats du monde Juniors 2019 Marrakech"
                            />
                            </Col>
                        </Row>
                    ):
                    (
                        <Row>
                            <VideosCard device={this.state.device} 
                                name="MNFCA19" 
                                lien="d17jWdFZglI"
                                description="Mbagnick Ndiaye(SEN) vs Mohamed Sofiane Belrekaa(ALG) " 
                                annee="2019"
                                event="championnats d'Afrique 2019 (finale)"
                            />
                            <VideosCard device={this.state.device} name="MNGPB19" 
                                lien="iaZeIvhrHqs"
                                    description="Mbagnick Ndiaye(SEN) vs Zarko Culum(SRB)" 
                                    annee="2019"
                                    event="Grand Prix de Budapest 2019"
                                />
                            <VideosCard device={this.state.device} name="MNGPS20" 
                                lien="SA_tALrpezs"
                                    description="Mbagnick Ndiaye(SEN) vs MEYER Roy(NED)" 
                                    annee="2020"
                                    event="Grand Slam Paris 2020"
                                />
                            <VideosCard device={this.state.device} name="MNGPTA20" 
                                lien="BmNo2em1VTc"
                                    description="Mbagnick Ndiaye(SEN) vs Rakhimov Temur (TJK)" 
                                    annee="2020"
                                    event="Grand Prix Tel Aviv 2020"
                                />
                            <VideosCard device={this.state.device} name="MNSP20" 
                                    lien="cbHPEymp4mA"
                                    description="Mbagnick Ndiaye(SEN) vs Luka Lomidze(FRA)" 
                                    annee="2020"
                                    event="Grand Slam Paris 2020"
                                />
                            <VideosCard device={this.state.device} name="YDCMJ19" 
                                lien="vc9ISz3-hdM"
                                description="Yacine Diatta(SEN) vs une Ashley King (USA)" 
                                annee="2019"
                                event="Championnats du monde Juniors 2019 Marrakech"
                            />
                        </Row>
                    )
                }
            </Layout>
        )
    }
}
