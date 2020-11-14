import React, {Component} from 'react'
import amara from '../../../assets/gloires/amaraDabo.jpg'
export default class AmaraDabo extends Component {

    render() {
        return (
            <div className={this.props.device === "MOBILE" ? "contentLigueMobile": "contentPrésentation"}>
                <p className='titre'>
                    Maitre Amara DABO
                </p>
                <img src={amara} alt="maitre seydou" className="imgGloire" />
                <p className="presentation">
                     Maitre Amara Dabo, affectueusement appelé <b style={{fontWeight: 'bold'}}>PA Dabo</b>,
                     est un monument du judo sénégalais. PA Dabo fût rappelé à Dieu le 03 février 
                     2006, d'une crise cardiaque après le second but de Mamadou Niang à l'occasion 
                     du quart de finale des Championnats d’Afrique de Football entre le Sénégal 
                     et la Guinée à Alexandrie en 2006. 
                </p>
                
                <p className="presentation">
                    Fondateur du dojo Momar Dieng, la plus grande école de judo de 1967 à nos jours,
                     Me Dabo a été Président de la Fédération Sénégalaise de Judo, 
                     Directeur Technique National, et Entraîneur national. 
                     Il a formé plusieurs ceintures noires et Champions d’Afrique tels 
                     que Khalifa Diouf, deux fois champion d'Afrique, Malang Dabo, 
                     Atoumane Guèye, Abdoulaye KOTE, entre autres.
                </p>
                <p className="presentation">
                    Maître AMARA DABO a été un Arbitre international de Judo avec des prestations 
                    appréciées au niveau des Championnats d'Afrique, du Monde et des 
                    Jeux Olympiques. Son parcours au Judo est digne d'éloges sur le 
                    plan technique, administratif et humain.
                </p>
                <p className="presentation">
                    Son nom sera à tout jamais immortalisé par le Dojo National qui porte son nom.
                </p>
            </div>
        )
    }
}