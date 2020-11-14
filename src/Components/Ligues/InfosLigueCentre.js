import React, { Component } from 'react'

export default class InfosLigueCentre extends Component {
    render() {
        return (
            <div style={{ color: "#000" }}>
                <p className="presentation">
                La ligue Centre regroupe les clubs de Judo des régions de Thiès, Kaffrine, Kaolack, Diourbel et Fatick.
                </p>
                <div className="rcorner">
                    <div>
                        <p>Présidente<br /> <b>Mme. Ndèye Gnilane NDOUR</b></p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>Vice-Président<br /> <b>M. Atoumane GUEYE</b></p>
                        </div>
                        <div className="col-4">
                            <p>Trésorier <br /> <b>M. Moise Alexandre SENGHOR </b></p>
                        </div>
                        <div className="col-4">
                            <p>Secrétaire Général<br /> <b>Mme. Aissatou NIANG</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}