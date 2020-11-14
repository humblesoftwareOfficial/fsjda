import React, { Component } from 'react'

export default class InfosLigueDakar extends Component {
    render() {
        return (
            <div style={{ color: "#000" }}>
                <p className="presentation">
                    La ligue de Dakar regroupe les clubs de Judo de la région de Dakar.
                </p>
                <div className="rcorner">
                    <div>
                        <p>Président<br /> <b>M. Idrissa DIOP</b></p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <p>1er Vice-Président<br /> <b>M. Géraud AKPO</b></p>
                        </div>
                        <div className="col-4">
                            <p>2em Vice-Président<br /> <b>M. Papa Malick Pouye</b></p>
                        </div>
                        <div className="col-4">
                            <p>Trésorier <br /> <b>M. Pierre Sambou</b></p>
                        </div>
                        <div className="col-4">
                            <p>Secrétaire Général<br /> <b>M. Libasse MBAYE</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}