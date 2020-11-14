import React, { Component } from 'react'
import { Col } from 'antd'
import president from '../../assets/fsjda/president.jpg'
export default class VisionPresident extends Component {
    render() {
        return (
            <>
                <Col>
                    <div className="">
                        <p className="titreAccueilF">
                            Vision du président
                            <hr />
                        </p>
                        
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                                <img src={president} className='imgJudoPresentationGroupe' alt="image2" />
                                <p style={{ fontWeight: 'bold', color: '#000' }}>
                                    <b>Babacar Makhtar WADE</b>
                                </p>
                                <p style={{ fontSize: 12, color: '#000' }}>
                                    <i>Expert-comptable</i> <br />
                                    <i>Président de la Fédération Sénégalaise de Judo</i> <br />
                                    <i>Trésorier Général du CNOSS (Comité National Olympique Sénégalais)</i> <br />
                                    <i>Coordonnateur adjoint Jeux Olympiques de la Jeunesse JOJ DAKAR 2022</i> <br />
                                </p>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                                <p className="presentation">
                                    Au-delà d’être un sport, le Judo est une Art martial, contribuant sous
                                    ce rapport à l’éducation, à la formation et au développement de l’humain
                                    dans nos pays grâce aux valeurs cardinales qui le définissent.
                                </p>
                                <p className="presentation">
                                    Depuis cinq ans, le judo Sénégalais est dans un tournant majeur avec la mise en œuvre
                                    d’un plan de développement orienté "Performance" qui commence à produire des résultats,
                                    et je citerai entre autres le programme "Judo à l’école"  qui a permis de massifier la
                                    pratique du judo à l’intérieur du Sénégal.
                            </p>
                                <p className="presentation">
                                    Le judo Sénégalais a décroché en 2019 trois titres de Champions
                                    d’Afrique à Cape Town chez les Séniors, et à Dakar chez les Cadets
                                    et Juniors. Au surplus, l’unique médaille d’Or remportée par le
                                    Sénégal toutes disciplines confondues lors des derniers
                                    Jeux Africains de Rabat, l’a été par le Judo.
                            </p>
                                <p className="presentation">
                                    Cette dynamique va être poursuivie et consolidée par nos projets
                                    en cours, afin de mener à bien nos objectifs de développement et
                                    prendre part positivement aux Jeux Olympiques de TOKYO 2020 et
                                    PARIS 2024, ainsi que les JOJ DAKAR 2022.
                            </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </>
        )
    }
}