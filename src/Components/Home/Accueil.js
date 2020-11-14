import React, { Component } from 'react'
import Header from '../Utils/Header'
import { Layout } from 'antd'
import Content from './Content'
import BarreEvenements from '../Evenements/BarreEvenements'
import './styles/design.scss'
import 'antd/dist/antd.css';
import Footer from '../Utils/Footer'
import Partenaires from '../Partenaires/Partenaires'
import PresentationJudoSengage from './PresentationJudoSengage'
import AccesRapide from './AccueilAccessCard'
import SocialNetworks from './SocialNetworks'
import ActualitesVideos from '../Actualites/ActualitesVideos/ActualiteVideosContent'
export default class Accueil extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Layout>
                <Header fixed={true}></Header>
                <Content></Content>
                <BarreEvenements/>
                <ActualitesVideos/>
                <AccesRapide/>
                
                <PresentationJudoSengage/>
                <SocialNetworks/>
                <Partenaires />
               
                <Footer></Footer>
            </Layout>
        )
    }
}
