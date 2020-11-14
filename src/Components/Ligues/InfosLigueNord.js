import React, { Component } from 'react'

export default class InfosLigueNord extends Component {
    render() {
        return (
            <div style={{ color: "#000" }}>
                <p className="presentation">
                 La ligue Nord regroupe les clubs de Judo des régions de Saint Louis, Louga, Matam et Podor. 
                </p>
                <div className="rcorner">
                    <div>
                        <p>Président<br /> <b>M. Ngor FAYE</b></p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>1ere Vice-Présidente<br /> <b>Mme. Fatma DIOP NIASSE</b></p>
                        </div>
                        <div className="col-4">
                            <p>2em Vice-Président<br /> <b>M. Alioune GAYE</b></p>
                        </div>
                        <div className="col-4">
                            <p>3em Vice-Président<br /> <b>M. Cheikh DIALLO</b></p>
                        </div>
                        <div className="col-4">
                            <p>4em Vice-Président<br /> <b>M. Birame NDIAYE</b></p>
                        </div>
                        <div className="col-4">
                            <p>Trésorier <br /> <b>M. Babacar MBENGUE</b></p>
                        </div>
                        <div className="col-4">
                            <p>Secrétaire Général<br /> <b>M. Ibrahima DEH</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}