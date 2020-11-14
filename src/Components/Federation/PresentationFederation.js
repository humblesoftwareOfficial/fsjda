import React, {Component} from 'react'
import fsjda from '../../assets/fsjda/fsjda.jpg'
import { Link } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
export default class PresentationFederation extends Component {
    render() {
        return(
            <>
                <p className="titreAccueilF">
                    La Fédération
                    <hr />
                </p>

                <img src={fsjda} className='imgJudo' alt="image2" />
                <br/>
                <br/>
                <p className="presentation">
                    La Fédération Sénégalaise de Judo et Disciplines Assimilées a été créée
                    le 1er Novembre 1961.<br/>
                     A la demande des disciplines assimilées, elle porte désormais le nom de  
                     <b style={{fontWeight: 'bold'}}>
                         {" "}Fédération sénégalaise de Judo et Disciplines Associées – FSJDA.<br/>
                     </b>
                     Les disciplines couvertes par la fédération sont au nombre de cinq (5) 
                     dont <b>
                        le Judo, l'Aïkido, le Jujitsu, le Sumo et le Dakaîto-Ryu
                     </b>. 
                     La Fédération Sénégalaise de Judo et Disciplines Associées comprend:                   
                </p>
                <div className="presentation">
                    <ul className="c">
                        <li> des pratiquants licenciés ; </li>
                        <li> des associations et clubs affiliés, regroupant des pratiquants ; </li>
                        <li> et des ligues regroupant des clubs au niveau régional. </li>
                    </ul>
                </div>
                <p className="presentation">
                    *La licence fédérale est obligatoire pour tous les pratiquants et dirigeants de judo et disciplines associées.
                </p>
                <p className="presentation">
                    La fédération compte au total cinq (5) ligues, dont quatre (4) ligues de Judo 
                </p>
                <div className="presentation">
                    <ul className="c">
                        <li> 
                            <b style={{fontWeight: 'bold'}}>Ligue de Judo de Dakar</b>: {" "}
                            <>La ligue de Dakar regroupe les clubs de Judo de la région de Dakar </>
                        </li>
                        <li> 
                            <b style={{fontWeight: 'bold'}}>Ligue de Judo du Centre</b> : {" "}
                            <>La ligue Centre regroupe les clubs de Judo des régions de Thiès, Kaffrine, Kaolack, Diourbel et Fatick. </>
                        </li>
                        <li> 
                            <b style={{fontWeight: 'bold'}}>Ligue de Judo du Nord</b> :  {" "}
                            <>La ligue Nord regroupe les clubs de Judo des régions de Saint Louis, Louga, Matam et Podor </>
                        </li>
                        <li> 
                            <b style={{fontWeight: 'bold'}}>Ligue de Judo du Sud</b> : {" "} 
                            <>La ligue Sud regroupe les clubs de Judo des régions de Ziguinchor, Valingara, Kolda, Kédougou </>
                        </li>
                        <li> 
                            <b style={{fontWeight: 'bold'}}>Ligue d’Aïkido</b> : {" "}
                            <>La ligue d'Aikido regroupe les clubs d'Aikido du Sénégal. </>
                        </li>
                    </ul>
                </div>
                <div>
                        <Link to="/ligues">
                            <MDBBtn color="amber" size="lg">
                                Accéder aux ligues et clubs
                            </MDBBtn>
                        </Link>
                    </div>
            </>
        )
    }
}
