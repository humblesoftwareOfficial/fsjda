import React, { Component } from 'react'
import { Col, } from 'antd'
import cblanche from '../../assets/ceinture/cblanche.gif'
import cblanchejaune from '../../assets/ceinture/cblanchejaune.gif'
import cjaune from '../../assets/ceinture/cjaune.gif'
import corangejaune from '../../assets/ceinture/cjauneorange.gif'
import corange from '../../assets/ceinture/corange.gif'
import corangeverte from '../../assets/ceinture/corangeverte.gif'
import cverte from '../../assets/ceinture/cverte.gif'
import cbleue from '../../assets/ceinture/cbleue.gif'
import cmarron from '../../assets/ceinture/cmarron.gif'
import cnoire from '../../assets/ceinture/cnoire.gif'
import crougeblanche from '../../assets/ceinture/crougeblanche.gif'
import crouge from '../../assets/ceinture/crouge.gif'
export default class Progression extends Component {

    render() {
        return (
            <Col>
                <p className="titreAccueilF">
                    La progession en Judo
                    <hr />
                </p>
                <p className="presentation">
                    Les ceintures symbolisent la progression et elles sont délivrées par le
                    maître jusqu’à la ceinture marron. Pour la ceinture noire, il faut obtenir
                    un total de 100 points lors des Shiai (compétitions accessibles à
                    partir de la ceinture marron), et ensuite réussir un examen officiel
                    de Kata supervisé par la Commission nationale des Grades de la Fédération.
                </p>
                <table>
                <tbody>
                    <tr>
                        <td ><img alt="cblanche" src={cblanche}/></td>
                        <td>Ceinture blanche</td>
                        <td >
                            <p className="presentationCeinture">
                                4/6 ans minimum<br/>
                                Pour les plus jeunes, un dispositif spécifique est proposé dans certains clubs :
                                l’Eveil Judo des 4/5 ans.<br/>
                                • Ceinture blanche: 4 ans minimum<br/>
                                • Ceinture blanche avec une bande jaune horizontale : 5 ans minimum<br/>
                                • Ceinture blanche avec deux bandes jaunes horizontales : 6 ans minimum
                            </p>
                        </td>
                        
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={cblanchejaune}/></td>
                        <td >Ceinture blanche/jaune</td>
                        <td >
                            <p className="presentationCeinture">
                                7 ans minimum
                            </p>
                        </td> 
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={cjaune}/></td>
                        <td >Ceinture jaune</td>
                        <td >
                            <p className="presentationCeinture">
                                8 ans minimum
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={corangejaune}/></td>
                        <td >Ceinture jaune/orange</td>
                        <td >
                            <p className="presentationCeinture">
                                9 ans minimum
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={corange}/></td>
                        <td >Ceinture orange</td>
                        <td >
                            <p className="presentationCeinture">
                                10 ans minimum
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={corangeverte}/></td>
                        <td >Ceinture orange/verte</td>
                        <td >
                            <p className="presentationCeinture">
                                11 ans minimum
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={cverte}/></td>
                        <td >Ceinture verte</td>
                        <td >
                            <p className="presentationCeinture">
                                12 ans minimum
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={cbleue}/></td>
                        <td >Ceinture bleue</td>
                        <td >
                            <p className="presentationCeinture">
                                13 ans minimum
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={cmarron}/></td>
                        <td >Ceinture marron</td>
                        <td >
                            <p className="presentationCeinture">
                                14 ans minimum
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={cnoire}/></td>
                        <td >Ceinture noire</td>
                        <td >
                            <p className="presentationCeinture">
                            • 1er dan 15 ans minimum<br/>
                            • 2ème dan 17 ans minimum<br/>
                            • 3ème dan 20 ans minimum<br/>
                            • 4ème dan 24 ans minimum<br/>
                            • 5ème dan 29 ans minimum
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={crougeblanche}/></td>
                        <td >Ceinture rouge et blanche</td>
                        <td >
                            <p className="presentationCeinture">
                                6ème, 7ème et 8ème dan
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td ><img alt="cblanche" src={crouge}/></td>
                        <td >Ceinture rouge</td>
                        <td >
                            <p className="presentationCeinture">
                                9ème et 10ème dan
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Col>
        )
    }
}