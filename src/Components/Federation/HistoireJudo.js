import React, { Component } from 'react'
import { Col } from 'antd'
import ceinture from '../../assets/fsjda/judoceinture.png'
export default class HistoireFederation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Col>
                    <div>
                        <p className="titreAccueilF">
                            L'histoire du judo au Sénégal
                            <hr/>
                        </p>
                        
                    </div>
                    <img src={ceinture} className='imgJudo' alt="image2" />
                    <div className="row">
                        <div style={{ marginLeft: '14px', marginRight: '14px' }}>
                            <p className="presentation">
                                C’est en 1949 que le dojo de l’<small style={{fontWeight: 'bold'}}>
                                 Anse BERNARD
                                 </small> a ouvert ses portes.
                                Dirigé par un Adjudant  du nom de BERTIER, il fut fréquenté par des militaires
                                et réservistes.
                                Les premiers championnats du Sénégal de judo  eurent  lieu en 1954, ouverts aux militaires et réservistes.                                                                                                                                                                  À partir de 1955, d’autres dojos se sont installés et le judo commence à se pratiquer en dehors de Dakar. On pouvait noter le Club Libanais de la Renaissance dirigé par Maître RATE, puis le Judo Club de Dakar dirigé par maître BUDOT. Viennent ensuite l’Athlétique Judo Club (AJC), l’Union Sportive des Tireurs de Dakar (USTD), le Racine Club de St Louis, le Judo Club, Bata, la BA 160, le judo club de Médina, la base militaire de Thiès, Etc.
                            </p>
                            <p className="presentation">
                                Les premières compétitions internationales commencent en 1961
                                avec les jeux de l’Amitié à Abidjan.
                                Le Sénégal se classa 2ème derrière la France.
                                Les deuxièmes Jeux de l’Amitié eurent lieu en 1963 à Dakar et
                                le Sénégal se classa encore 2ème derrière la France mais ces jeux
                                furent marqués par la participation d’un Sénégalais d’origine qui
                                s’appelait Jonas CISSE.
                                    </p>
                            <p className="presentation" >
                                La fédération Sénégalaise de Judo fut créée le 1er Novembre 1961
                                et l’Union Africaine de Judo le 28 Novembre de la même année.
                                    </p>
                            <p className="presentation" >
                                Les premiers championnats d’Afrique furent organisés à Dakar en 1964
                                et les  premiers jeux Africains à Brazzaville en 1965.
                                La Ville d’Abidjan organisa les deuxièmes championnats d’Afrique
                                en 1967. Depuis, le Sénégal participe régulièrement à ces deux grands
                                rendez vous du judo Africains; et nos athlétes se sont fait remarqués
                                par leurs performances de haut niveau.
                                    </p>
                        </div>
                    </div>
            </Col>
        )
    }
}