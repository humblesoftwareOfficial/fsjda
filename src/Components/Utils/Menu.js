import React, { Component } from 'react'
import BoutonMenu from './BoutonMenu'
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            up: false
        }
        this.upDownClick = this.upDownClick.bind(this)
    }
    upDownClick() {
        this.setState({
            up: !this.state.up
        })
    }
    render() {
        return (
            <div className="bodyDiscipline">
                <div>
                    <h4 style={{ color: 'rgb(247, 238, 187)', fontFamily: "Verdana, Arial, Tahoma, Serif" }}>
                        Fédération Sénégalaise de Judo <small style={{ fontSize: 10 }}>Et Disciplines Associées</small>
                    </h4>

                </div>
                <div>
                    <BoutonMenu titre="Accueil" couleur="dark" to="/"></BoutonMenu>
                    <BoutonMenu titre="Fédération" couleur="dark-green" to="/federation"></BoutonMenu>
                    <BoutonMenu titre="Ligues" couleur="blue" to="/partenaires"></BoutonMenu>
                    <BoutonMenu titre="Licenciés" couleur="amber" to="/inscription"></BoutonMenu>
                    <BoutonMenu titre="Palmares" couleur="unique" to="/palmares"></BoutonMenu>
                    <BoutonMenu titre="Médiathéque" couleur="mdb-color" to="/mediatheque"></BoutonMenu>
                    <BoutonMenu titre="Programme Le Judo s'Engage" couleur="white" to="/judo"></BoutonMenu>
                    <BoutonMenu titre="Gloires" couleur="deep-orange" to="/gloires"></BoutonMenu>
                </div>
            </div>
        )
    }
}
/*
<BoutonMenu titre="Disciplines" couleur="unique"
                                        subMenu={true}
                                        title="Disciplines"
                                        options={['Judo', 'Aïkido', 'Jujitsu', 'Sumo', 'Dakaîto-Ryu']}
                                    ></BoutonMenu>

*/