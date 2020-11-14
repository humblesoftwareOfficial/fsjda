import React, { Component } from 'react'
import {Layout} from 'antd'
import Discipline from './Discipline'
import ButoonDesign from './ButoonDesign';
import './design.scss'
const { Content } = Layout;
export default class ContentButtonAccueil extends Component {
    render() {
        return (
            <Content style={{  marginTop: 0, backgroundColor: '#FFF', marginBottom: 5}}>
                <ButoonDesign titre="Actualités" id="1" couleur="#07ad01"></ButoonDesign>
                <ButoonDesign titre="Evénements" id="2" couleur="#face0c"></ButoonDesign>
                <ButoonDesign titre="Galerie" id="3" couleur="#face0c"></ButoonDesign>
                <ButoonDesign titre="JO-2022" id="4" couleur="#cf1010"></ButoonDesign>
            </Content>
        )
    }
}
