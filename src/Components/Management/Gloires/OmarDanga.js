import React, {Component} from 'react'
import omar from '../../../assets/gloires/omarDanga.jpg'
export default class OmarDanga extends Component {

    render() {
        return (
            <div className={this.props.device === "MOBILE" ? "contentLigueMobile": "contentPrésentation"}>
                <p className='titre'>
                    Maitre Omar Danga LOUM
                </p>
                <img src={omar} alt="maitre seydou" className="imgGloire" />
                <p>
                    <i>
                        Consacré Judo Legend par la FIJ <br />
                        Membre de la Commission des Vétérans de la 
                        Fédération Internationale de Judo

                    </i>
                </p>
                <p className="presentation">
                    Maître Omar Danga Loum  <cite style={{fontWeight: 'bold'}}>(4ème Dan de Judo)</cite>,
                    est un haut cadre de l’administration sénégalaise qui a dédié la majeure 
                    partie de sa vie au sport, aux arts martiaux, mais plus 
                    particulièrement au Judo. Omar Danga Loum est inspecteur principal de 
                    l'éducation populaire de la Jeunesse et des Sports en retraite. 
                    Il est né en 1946 à Kaolack où il a fondé et présidé la ligue régionale de 
                    Judo Boxe et Karaté du Sine Saloum de 1969 à 1976.  
                </p>
                <p className="presentation">
                    Serviteur inlassable et dévoué de cette discipline, Danga Loum a toujours 
                    fait siennes les valeurs qui forgent l'homme dans sa vie. Il est membre de 
                    la Fédération sénégalaise de judo depuis 1969, ancien Président de la même 
                    fédération et il a été Secrétaire Général de l'Union africaine de judo 
                    pendant 25 ans. En effet, depuis 1979 Omar Danga Loum fréquente les instances 
                    internationales du Judo. 
                </p>
                <p className="presentation">
                    Danga Loum a aussi une parfaite connaissance des dossiers du Judo africain et mondial. 
                    Il a ainsi assisté et participé activement à l'essor du Judo, non seulement au Sénégal, 
                    mais sur tout le continent africain. Il est le premier africain nominé Judo LEGEND par 
                    la Fédération Internationale de Judo sur proposition de son Président MARIUS VIZER. 
                    Aujourd'hui il est membre de la Commission des vétérans de la FIJ depuis 2009. 
                    Au niveau national Omar Danga Loum est officier dans l'ordre national du Lion et 
                    grand officier de l'ordre national du mérite Sénégalais.
                </p>
            </div>
        )
    }
}