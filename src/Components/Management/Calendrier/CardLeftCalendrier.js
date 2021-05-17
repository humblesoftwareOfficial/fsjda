import React, { Component } from 'react'
//import api from '../../../api/index'
import calendrier from './Calendrier_Saison_2021.pdf'
import { MDBBtn } from "mdbreact";
import HelperEvenement from '../../../Helper/Evenement/helperEvenement'
export default class CardLeftCalendrier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mois: '',
            today: [],
            evenementMensuel: []
        }
    }
    componentDidMount() {
        try {
            this.setState({
                mois: this.defineMonth()
            })
            this.getEvenementsForMonth(this.defineMonth())
        } catch (err) {
            console.log(err)
        }
    }
    async getEvenementsForMonth(mm) {
        /*
        try {
            let payload = {
                mm: mm
            }
            await api.GetEvenementsForMonth(payload).then((response) => {
                if (response.data.success) {
                    this.setState({
                        evenementMensuel: this.trierEvenement(response.data.data),
                        //today: this.getEvenementDuJour(response.data.data)
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
        */
        this.setState({
            evenementMensuel: this.trierEvenement(HelperEvenement.getEvenementsMonth(mm))
        })
    }
    defineMonth() {
        let date = new Date()
        let mois = date.getMonth() + 1
        mois = mois.toString()
        if (mois.length < 2) {
            mois = '0' + mois
        }
        const monthNames = ["Janvier", "Fébrier", "Mars", "Avril", "Mai", "Juin",
            "Julliet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"
        ];
        this.setState({
            moisLettre: monthNames[date.getMonth()]
        })
        return mois
    }
    renderEvents() {
        return this.state.evenementMensuel.map((ev, index) => {
            return(
                <div key={index} style={{color: '#000', fontWeight: 'bold'}}>
                    <p>{ev.date.jour + '/' + ev.date.mois}</p>
                    {ev.libelle}
                    <hr/>
                </div>
            )
        })
    }
    trierEvenement(evenements) {
        return evenements.sort((a, b) => (a.date.jour > b.date.jour) ? 1 : ((b.date.jour > a.date.jour) ? -1 : 0));
    }
    render() {
        return (
            <div className="contentGloires">
                
                <h3>--  EVENEMENTS DU MOIS --</h3>
                <div>
                    {
                        this.renderEvents()
                    }
                </div>
                <a href={calendrier} download>
                    <MDBBtn color="black" size="sm">Télécharger le calendrier de la sasion</MDBBtn>
                </a>
            </div>
        )
    }
}