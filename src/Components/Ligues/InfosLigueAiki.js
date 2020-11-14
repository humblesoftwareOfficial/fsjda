import React, { Component } from 'react'
import InfosLigueAikido from './InfosLigueAikido'
export default class InfosLigueAiki extends Component {
    render() {
        return (
            <div style={{ color: "#000" }}>
                <p className="presentation">
                La ligue Aikido regroupe les clubs d'Aikido du Sénégal.
                </p>
                <div className="rcorner">
                    <div>
                        <p>Président<br /> <b>Colonel Massamba DIOP</b></p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>Vice-Président<br /> <b>Alioune Gaye</b></p>
                        </div>
                        <div className="col-4">
                            <p>Secrétaire Général<br /> <b>Babacar Ibrahima Diouf</b></p>
                        </div>
                        <div className="col-4">
                            <p>Trésorier<br /> <b>Pape Samba Sall</b></p>
                        </div>
                        <div className="col-4">
                            <p>Directeur Technique<br /> <b>Ismaila Sarr</b></p>
                        </div>
                    </div>
                    <InfosLigueAikido/>
                </div>
            </div>
        )
    }
}