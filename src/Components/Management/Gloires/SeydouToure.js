import React, { Component } from 'react'
import seydou from '../../../assets/gloires/maitreseydou.png'
export default class SeydouToure extends Component {
    render() {
        return (
                <div className={this.props.device === "MOBILE" ? "contentLigueMobile": "contentPrésentation"}>
                    <div>
                        <p className='titre'>
                            Maitre Seydou Nourou TOURE
                                                    </p>
                        <img src={seydou} alt="maitre seydou" className="imgGloire" />
                        <p>
                            <i>
                                Ceinture noire, 8ème Dan de Judo <br />
                                            Vice-président de la Fédération Sénégalaise de Judo<br />
                                            Directeur de la Commission des Grades
                            </i>
                        </p>
                        <p className="presentation">
                            Judoka le plus gradé du Sénégal, ceinture noire 8ème dan de Judo,
                            Maître Seydou Nourou Toure fait partie des rares exemples de
                            citoyens que chaque pays voudrait bien avoir. Sensei Touré est
                            d’abord un homme de sport "omnisport", en effet il a pratiqué
                            plusieurs sports dont la boxe, le handball, le basketball,
                            la natation, mais tomba amoureux fou du Judo en 1959.
                        </p>
                        <p className="presentation">
                            Maitre Touré a commencé le Judo à l’âge de 26 ans et il pratique ce sport 
                            jusqu'à présent. Champion du Sénégal a plusieurs reprises, champion 
                            d'Afrique individuel et par équipe, Maitre Touré a aussi participé à 
                            plusieurs tournois et compétitions de niveau mondial 
                            (Participation aux Jeux Olympiques en 1964 entre autres). 
                            Il a participé à plusieurs stages de formation au Japon 
                            à plusieurs reprises dans les années 60s et ce jusqu'aux années 80s. 
                            Il a aussi formé beaucoup de champions et combattants devenus ceintures 
                            noires.
                        </p>
                        <p className="presentation">
                            En tant qu’arbitre mondial et olympique, il a pris part aux Jeux 
                            olympiques d’Atlanta, de Sydney et aux Jeux Olympiques tenues en 
                            Grèce à Athènes. Pour beaucoup de jeunes Maître Touré a essentiellement 
                            été connu en tant que Directeur de l'Arbitrage Africain, poste qu’il a 
                            occupé de 1989 à 2004. À ce poste, il a rehaussé le niveau de l'arbitrage
                             à un niveau jamais atteint auparavant. Maitre Touré a dirigé plusieurs 
                             stages en tant que Arbitre mondial et consultant en Amérique, au Japon, 
                             en Europe et en Afrique.
                        </p>
                       
                    </div>
                </div>
        )
    }
}