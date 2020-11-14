import React, { Component } from 'react'

export default class InfosLigueSud extends Component {
    render() {
        return (
            <div style={{ color: "#000" }}>
                <p className="presentation">
                La ligue Sud regroupe les clubs de Judo des régions de Ziguinchor, Valingara, Kolda, Kédougou.
                </p>
                <div className="rcorner">
                    <div>
                        <p>Président<br /> <b>Dr Simon TENDENG</b></p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>Vice-Président<br /> <b>M. Insa BASSENE</b></p>
                        </div>
                        <div className="col-4">
                            <p>Trésorier <br /> <b>M. Mamadou SAGNA </b></p>
                        </div>
                        <div className="col-4">
                            <p>Secrétaire Général<br /> <b>Mme. Adama DIOUF </b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}