import React, {Component} from 'react'
//import api from '../../api/index'
import LigueCard from './LigueCard'
import {Affix } from 'antd'
import HelperLigues from '../../Helper/ClubsLigues/helperLigueClub'
export default class ContentLigues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ligues: [],
            ligueSelected: null
        }
        this.onLigueSelect = this.onLigueSelect.bind(this)
    }
    componentDidMount() {
        this.getLigues()
    }
    async getLigues() {
        try {
            /*
            await api.GetLigues().then((response) =>{
                if(response.data.success) {
                    this.setState({
                        ligues: response.data.data
                    })
                }
            })
            */
           const lg = HelperLigues.getLigues()
           this.setState({
               ligues: lg
           })
        } catch (err) {
            this.setState({
                ligues: []
            })
        }    
    }
    renderLigues() {
        if(this.state.ligues.length > 0) {
            if(this.state.ligueSelected === null) {
                let li = {
                    code: this.state.ligues[0].code,
                    libelle: this.state.ligues[0].libelle,
                    _id: this.state.ligues[0]._id
                }
                this.setState({
                    ligueSelected: li
                })
                this.props.onLigueSelect(li.code, li.libelle, li._id)
                return this.state.ligues.map((ligue, index) => {
                    if(ligue.code === li.code) {
                        return (
                            <LigueCard key={ligue.code} ligue={ligue} onLigueSelect={this.onLigueSelect} active={true}/>
                        )
                    } else {
                        return (
                            <LigueCard key={ligue.code} ligue={ligue} onLigueSelect={this.onLigueSelect} active={false}/>
                        )
                    }
                })
            } else {
                return this.state.ligues.map((ligue, index) => {
                    if(ligue.code === this.state.ligueSelected.code) {
                        return (
                            <LigueCard key={ligue.code} ligue={ligue} onLigueSelect={this.onLigueSelect} active={true}/>
                        )
                    } else {
                        return (
                            <LigueCard key={ligue.code} ligue={ligue} onLigueSelect={this.onLigueSelect} active={false}/>
                        )
                    }
                })
            }
        } else {
            return null
        }
    }
    onLigueSelect(ligue) {
        this.setState({
            ligueSelected: ligue
        })
        this.props.onLigueSelect(ligue.code, ligue.libelle, ligue._id)
    }
    render() {
        return(
            <Affix>
                <div className="contentSectionAlbum">
                    <p className='titre'>
                        Ligues
                    </p>
                    {this.renderLigues()}
                </div>
            </Affix>
        )
    }
}