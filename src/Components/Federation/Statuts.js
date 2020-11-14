import React, { Component } from 'react'
import { Col } from 'antd'
import { MDBBtn } from "mdbreact";
import statuts from './StatutsFSJDA.pdf'
export default class Statuts extends Component {
    render() {
        return (
            <Col>
               <p className="titreAccueilF">
                    Statuts
                    <hr/>
                </p> 
                <p className="presentation" style={{fontWeight: 'bold'}}>
                    STATUTS ADOPTES PAR L’ASSEMBLEE GENERALE DU 29 OCTOBRE 2017
                </p>
                <p className="presentation">
                    La Fédération Sénégalaise de Judo et des Disciplines Associées –
                    FSJDA est une Association à but non lucratif.<br/>
                    LA FSJDA s'engage à se conformer aux statuts et à tous règlements
                    et décisions de la Fédération Internationale de Judo – FIJ.<br/>
                    LA FSJDA s’engage à se conformer aux statuts, lois, règlements et
                    décisions régissant les Fédérations sportives au Sénégal en
                    collaboration avec la FIJ.<br/>
                    La FSJDA est la seule Fédération habilitée à représenter la FIJ au
                    Sénégal. 
                </p>
                <a href={statuts} download>
                    <MDBBtn color="black" size="sm">VOIR LE DOCUMENT COMPLET DES STATUTS ADOPTES</MDBBtn>
                </a>
            </Col>
        )
    }
}
