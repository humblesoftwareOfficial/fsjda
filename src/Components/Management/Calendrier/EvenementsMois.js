
import React, { Component } from "react"
//import api from '../../../api/index'
import CardCalendrier from './CardCalendrier'
import HelperEvenement from '../../../Helper/Evenement/helperEvenement'
export default class EvenementsMois extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mois: "",
            evenements: []
        }
    }
    componentDidMount() {
        this.defineMonth()
        this.getEvenementsMonth()
    }
    defineMonth() {
        try {
            switch (this.props.mois) {
                case "01":
                    this.setState({
                        mois: "Janvier"
                    })
                    break;
                case "02":
                    this.setState({
                        mois: "Février"
                    })
                    break;
                case "03":
                    this.setState({
                        mois: "Mars"
                    })
                    break;
                case "04":
                    this.setState({
                        mois: "Avril"
                    })
                    break;
                case "05":
                    this.setState({
                        mois: "Mai"
                    })
                    break;
                case "06":
                    this.setState({
                        mois: "Juin"
                    })
                    break;
                case "07":
                    this.setState({
                        mois: "Juillet"
                    })
                    break;
                case "08":
                    this.setState({
                        mois: "Août"
                    })
                    break;
                case "09":
                    this.setState({
                        mois: "Septembre"
                    })
                    break;
                case "10":
                    this.setState({
                        mois: "Octobre"
                    })
                    break;
                case "11":
                    this.setState({
                        mois: "Novembre"
                    })
                    break;
                case "12":
                    this.setState({
                        mois: "Décembre"
                    })
                    break;

                default:
                    break;
            }
        } catch (err) {
            console.log(err)
        }
    }
    async getEvenementsMonth() {
        try {
            /*
            const payload = {
                mm: this.props.mois
            }
            await api.GetEvenementsForMonth(payload).then((response) => {
                if (response.data.success) {
                    this.setState({
                        evenements: response.data.data,
                        today: this.getEvenementDuJour(response.data.data)
                    })
                }
            }).catch(err => {
                console.log('ERREUR/ ' + err)
                this.setState({
                    evenements: []
                })
            })
            */
           this.setState({
               evenements: HelperEvenement.getEvenementsMonth(this.props.mois)
           })
        } catch (err) {
            console.log(err)
        }
    }
    renderEvenements() {
        return this.state.evenements.map((ev, index) => {
            return (
                <CardCalendrier key={index} evenement={ev} />
            )
        })
    }
    getEvenementDuJour(evenements) {
        let date = new Date()
        let jour = date.getDate()
        let today = []
        evenements.forEach(evenement => {
            if (evenement.date.jour === jour.toString()) {
                today.push(evenement)
            }
        });
        return today;
    }
    
    render() {
        return (
            <div>
                <div className="separator">
                    <h4>{this.state.mois}</h4>

                </div>
                {this.renderEvenements()}
            </div>
        )
    }
}