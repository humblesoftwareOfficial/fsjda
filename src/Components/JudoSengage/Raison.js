import React, {Component} from 'react'
import image_un from '../../assets/judosengage/1.png'
import image_deux from '../../assets/judosengage/2.png'
import image_trois from '../../assets/judosengage/3.png'
export default class Raison extends Component {

    render() {
        return (
            <div className="contentTrouverClub">
                <p className="titreAccueil">
                    Raison d'être
                </p>
                <p className="titre">
                     "Le Judo est le meilleur sport formateur pour les enfants et les jeunes entre 4 et 21 ans."   
                </p>
                <p>
                    UNESCO
                </p>
                <div className="row rcornerBlue">
                    <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                        <img src={image_un} className='imgAmbition' alt="image2"/>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8 col-lg-8 rcorner">
                        <p className="presentation">
                            Le Judo est une Art martial qui contribue à l’éducation et à la formation. 
                        </p>
                        <p className="presentation">
                            Il participe au développement de l’humain dans nos pays grâce aux valeurs incarnées.
                        </p>
                        <p className="presentation">
                            Code moral : <small>politesse – courage – sincérité – honneur – modestie – respect - contrôle de soi - amitié.</small>
                        </p>
                    </div>
                </div>
                <br/>
                <div className="row rcornerBlue">
                    <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                        <img src={image_deux} className='imgAmbition' alt="image2"/>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8 col-lg-8 rcorner">
                        <p className="presentation">
                            Nouvel élan avec un plan de développement orienté performance et massification.
                        </p>
                        <p className="presentation">
                            Premiers résultats effectifs grâce au programme <b style={{fontWeight: 'bold'}}>"Judo à l’école"</b> qui a permis de massifier la pratique à l’intérieur du Sénégal
                        </p>
                        <p className="presentation">
                            <b style={{fontWeight: 'bold'}}>Objectif de la seconde phase: </b>Vulgariser et rendre le Judo accessible aux Jeunes, aux Femmes et aux Populations défavorisées
                        </p>
                    </div>
                </div>
                <br/>
                <div className="row rcornerBlue">
                    <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                        <img src={image_trois} className='imgAmbition' alt="image2"/>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8 col-lg-8 rcorner">
                        <p className="presentation">
                            <b style={{fontWeight: 'bold'}}>Cibles principales: </b>
                            les femmes et les mineurs en détention, les enfants malades, 
                            les enfants de la rue communément appelés "talibés", les jeunes de 
                            la région naturelle de la Casamance et de certaines localités et écoles 
                            des banlieues (Rufisque, Pikine, Guédiawaye, etc.)
                        </p>
                        <p className="presentation">
                            <b style={{fontWeight: 'bold'}}>Le but du programme est de renforcer le lien social, </b>
                            contribuer à l’éducation grâce au sport et mieux participer au développement.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}