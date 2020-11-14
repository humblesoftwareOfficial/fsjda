import React, { Component } from 'react'
import PalmaresCard from './PalmaresCard'
import { List, Select } from 'antd'
import { Form } from 'react-bootstrap';
import HelperCompetitions from '../../../Helper/Palmares/HelperCompetitions'
const { Option } = Select
export default class PalmaresContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            medailles: [],
            athlete: '',
            categorie: '',
            typeMedaille: 'Médaille',
            typeMedailles: []
        }
        this.changePage = this.changePage.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeCategorie = this.onChangeCategorie.bind(this)
    }
    componentDidMount() {
        this.setState({
            medailles: this.props.medailles,
            typeMedailles: HelperCompetitions.getTypeMedailles()
        })
    }
    componentDidUpdate() {
        
    }
    renderMedailles() {
        return this.props.medailles.map((medaille, index) => {
            return (
                <PalmaresCard key={index} medaille={medaille} />
            )
        })
    }
    changePage() {
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
            window.scrollTo(0, 200);
        }, 1000)
    }
    orderMedaille() { //Classifier les médailles or - argent - bronze

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            //competitions: this.props.competitions.filter(x => x.libelle.toUpperCase().includes(e.target.value.toUpperCase())),
        });
        if (e.target.value.trim('').length > 0) {
            //this.globalFiltre(e.target.value, this.state.categorie, this.state.typeMedaille, true, false, false)
            let medailles = []
            this.props.medailles.forEach(med => {
                let me = HelperCompetitions.getMedailleById(med._id)
                if (me.athlete.nom.toUpperCase().includes(e.target.value.toUpperCase()) || me.athlete.prenom.toUpperCase().includes(e.target.value.toUpperCase())) {
                    medailles.push(med)
                }
            });
            if(this.state.categorie.trim('').length > 0) {
                medailles = medailles.filter(x => x.description.toUpperCase().includes(this.state.categorie.toUpperCase()))
            }
            this.setState({
                medailles: medailles
            })

        } else {
            if(this.state.categorie.trim('').length > 0) {
                this.setState({
                    medailles: this.props.medailles.filter(x => x.description.toUpperCase().includes(this.state.categorie.toUpperCase()))
                })
            } else {
                this.setState({
                    medailles: this.props.medailles
                })
            }
        }
    }
    onChangeCategorie(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        if(e.target.value.trim('').length > 0) {
            let medailles= []
            let medaillesC = this.props.medailles.filter(x => x.description.toUpperCase().includes(e.target.value.toUpperCase()))
            if(this.state.athlete.trim('').length > 0) {
                medaillesC.forEach(med => {
                    let me = HelperCompetitions.getMedailleById(med._id)
                    if (me.athlete.nom.toUpperCase().includes(this.state.athlete.toUpperCase()) || me.athlete.prenom.toUpperCase().includes(this.state.athlete.toUpperCase())) {
                        medailles.push(med)
                    }
                });
                this.setState({
                    medailles: medailles
                })
            } else {
                this.setState({
                    medailles: medaillesC
                })
            }
            
        } else {
            if(this.state.athlete.trim('').length > 0) {
                let medailles = []
                this.props.medailles.forEach(med => {
                    let me = HelperCompetitions.getMedailleById(med._id)
                    if (me.athlete.nom.toUpperCase().includes(this.state.athlete.toUpperCase()) || me.athlete.prenom.toUpperCase().includes(this.state.athlete.toUpperCase())) {
                        medailles.push(med)
                    }
                });
                this.setState({
                    medailles: medailles
                })
            } else {
                this.setState({
                    medailles: this.props.medailles
                })
            }
        }
    }
    renderTypMedailles() {
        return this.state.typeMedailles.map((tm, index) => {
            return (
                <Option value={tm._id} key={index}>
                    {tm.libelle.toUpperCase()}
                </Option>
            )
        })
    }
    onChangeTypeMedaille(_id) {
        let find = false
        this.state.typeMedailles.forEach(tm => {
            if (tm._id === _id) {
                find = true
                this.setState({
                    typeMedaille: tm.libelle.toUpperCase(),
                })
            }
        });
        if(!find) {
            this.setState({
                typeMedaille: '--TOUTES--',
            })
        }
        if(_id !== '0') {
            let medailles= []
            let medaillesC = this.props.medailles.filter(x => x.idTypeMedaille.includes(_id))
            if(this.state.athlete.trim('').length > 0) {
                medaillesC.forEach(med => {
                    let me = HelperCompetitions.getMedailleById(med._id)
                    if (me.athlete.nom.toUpperCase().includes(this.state.athlete.toUpperCase()) || me.athlete.prenom.toUpperCase().includes(this.state.athlete.toUpperCase())) {
                        medailles.push(med)
                    }
                });
                this.setState({
                    medailles: medailles
                })
            } else {
                this.setState({
                    medailles: medaillesC
                })
            }
        } else {
            
        }
    }
    globalFiltre(athlete, categorie, typeMedaille, athleteChanged, categorieChanged, typeMedailleChanged) {
        let medailles = []
        console.log(athlete)
        console.log(categorie)
        if (athleteChanged) {
            this.props.medailles.forEach(med => {
                let me = HelperCompetitions.getMedailleById(med._id)
                if (me.athlete.nom.toUpperCase().includes(athlete.toUpperCase()) || me.athlete.prenom.toUpperCase().includes(athlete.toUpperCase())) {
                    medailles.push(med)
                }
            });
            if(categorie.trim('').length > 0) {
                medailles = medailles.filter(x => x.description.includes(categorie))
            }
            //console.log(medailles)
            this.setState({
                medailles: medailles
            })
        } else {
            if(categorie.trim('').length > 0) {
                this.setState({
                    medailles: this.props.medailles.filter(x => x.description.includes(categorie))
                })
            }
        }
        if(categorieChanged) {
            let medaillesC = this.props.medailles.filter(x => x.description.includes(categorie))
            if(athlete.trim('').length > 0) {
                medaillesC.forEach(med => {
                    let me = HelperCompetitions.getMedailleById(med._id)
                    if (me.athlete.nom.toUpperCase().includes(athlete.toUpperCase()) || me.athlete.prenom.toUpperCase().includes(athlete.toUpperCase())) {
                        medailles.push(med)
                    }
                });
                this.setState({
                    medailles: medailles
                })
            } else {
                this.setState({
                    medailles: medaillesC
                })
            }
            
        }
        if(!athleteChanged && !categorieChanged && !typeMedailleChanged) {
            this.setState({
                medailles: this.props.medailles
            })
        }
        //
    }
    render() { //contentPrésentation
        console.log(this.state.medailles)
        return (
            <div className={this.props.device ? "contentPrésentation" : "contentPrésentationMobileFC"}>
                <p className='titre'>
                    Palmarès
                </p>
                {
                    this.props.medailles.length > 0 ?
                        (
                            <>
                                <h4>{this.props.competition}</h4>
                                <div className="row contentFiltreClub">
                                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                                        <h4>Rechercher</h4>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Athlète"
                                            value={this.state.athlete}
                                            name="athlete"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                                        <Form.Control
                                            type="text"
                                            placeholder="Catégorie"
                                            value={this.state.categorie}
                                            name="categorie"
                                            onChange={this.onChangeCategorie}
                                        />
                                    </div>
                                    
                                </div>
                                <List
                                    itemLayout="vertical"
                                    size="default"
                                    loading={this.state.loading}
                                    pagination={{
                                        onChange: page => {
                                            this.changePage()
                                        },
                                        pageSize: 10,
                                    }}
                                    dataSource={this.state.medailles}
                                    grid={{ gutter: 16, column: 2 }}
                                    renderItem={medaille => (
                                        <List.Item key={medaille.code}>
                                            <PalmaresCard key={medaille.code} medaille={medaille} />
                                        </List.Item>
                                    )}
                                />
                            </>
                        ) :
                        (
                            <p>SELECTIONNEZ UNE COMPETITION POUR VOIR LES MEDAILLES OBTENUES PAR NOS ATHLETES</p>
                        )
                }
            </div>
        )
    }
}
//{this.renderMedailles()}

/*


<div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                                        <Select
                                            onChange={this.onChangeTypeMedaille.bind(this)}
                                            value={this.state.typeMedaille} disabled={this.state.disabled}
                                            size="large"
                                            style={{ width: "80%" }}
                                        >
                                            <Option value='0'>
                                                --TOUTES--
                                        </Option>
                                            {this.renderTypMedailles()}
                                        </Select>
                                    </div>
*/