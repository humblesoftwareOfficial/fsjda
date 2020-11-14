import React, { Component } from 'react'
import { Col } from 'antd'
import jigaro from '../../assets/fsjda/jigaro.png'
export default class JudoValeurs extends Component {

    render() {
        return (
            <Col>
                <p className="titreAccueilF">
                    Le Judo et ses valeurs
                    <hr/>
                </p>
                
                <img src={jigaro} className='imgObjectifs' alt="image2" />
                <br/>
                <i>"Le Judo est le meilleur sport formateur pour les enfants et les jeunes entre 4 et 21 ans"  - UNESCO</i>
                <br/>
                <br/>
                <p className="presentation">
                    Le judo, ou la voie de la souplesse, est un art martial créé au Japon par  
                    <i style={{fontWeight: 'bold'}}> Jigoro Kano</i> en 1882. C'est un sport multidimensionnel qui englobe une 
                    pédagogie physique, mentale et morale. L'enseignement du judo est accompagné 
                    de l'inculcation au judoka de valeurs morales qui sont définies dans le code 
                    moral du Judo.
                </p>
                <p className="presentation" style={{fontWeight: 'bold'}}>
                    Code Moral du Judo
                </p>
                <div className="presentation">
                    <ul className="c">
                        <li> La politesse, c'est le respect d’autrui. </li>
                        <li> Le courage, c'est faire ce qui est juste. </li>
                        <li> La sincérité, c'est s'exprimer sans déguiser sa pensée. </li>
                        <li> L'honneur, c'est être fidèle à la parole donnée. </li>
                        <li> La modestie, c'est parler de soi-même sans orgueil. </li>
                        <li> Le respect, sans respect aucune confiance ne peut naître. </li>
                        <li> Le contrôle de soi, c'est savoir se taire lorsque monte sa colère. </li>
                        <li> L'amitié, c'est le plus pur et le plus fort des sentiments humains. </li>
                    </ul>
                </div>
                <p className="presentation" style={{fontWeight: 'bold'}}>
                    Sport multidimensionnel 
                </p>
                <p className="presentation">
                    Le Judo développe l’équilibre, la souplesse et contribue à l'éducation. 
                    Il permet au pratiquant (judoka) de devenir non seulement plus adroit et plus fort, 
                    mais aussi d’apprendre le respect des règles, de mesurer ses forces et ses faiblesses, 
                    de progresser et de dépasser ses limites. Le Judo est aussi un sport de défense qui 
                    protège le judoka, il est adapté à tous les âges.
                </p>
            </Col>
        )
    }
}