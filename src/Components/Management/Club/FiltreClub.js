import React, { Component } from 'react'
import {Select } from 'antd'
import HelperClub from '../../../Helper/ClubsLigues/helperLigueClub'
import './design.scss'
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import api from '../../../api/index'

const { Option } = Select
export default class FiltreClub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: 'Choisir une Région',
            regions: [],
            departements: [],
            departement: 'Choisir un departement',
            discipline: 'Choisir une discipline',
            disabledDepartement: true,
            disciplines: [
                {
                    _id: "1",
                    libelle: "Judo"
                },
                {
                    _id: "5e621fe66a175811a09ed488",
                    libelle: "Aikido"
                }
            ]
        }
        
    }
    componentDidMount() {
        this.getRegions()
    }
    async getRegions() {
        try {
            /*
           await api.GetRegions().then((response) =>{
               if(response.data.success) {
                   this.setState({
                       regions: response.data.data
                   })
               }
           }) 
           */
          this.setState({
            regions: HelperClub.getRegions()
        })
        } catch (err) {
            console.log(err)
        }
    }
    onChangeRegion(_id) {
        if(_id !== undefined) {
            this.state.regions.forEach(region => {
                if(region._id === _id) {
                    this.setState({
                        region: region.libelle,
                        departement: "Choisir un departement"
                    })
                    this.props.regionSelected(_id)
                }
            });
            this.getDepartements(_id)
        }
    }
    onChangeDepartement(_id) {
        if(_id !== undefined) {
            this.state.departements.forEach(departement => {
                if(departement._id === _id) {
                    this.setState({
                        departement: departement.libelle
                    })
                    this.props.departementSelected(_id)
                }
            });
            //this.getDepartements(code)
        }
    }
    async getDepartements(_id) {
        try {
            /*
            let payload = {
                code: codeRegion
            }
            await api.GetDepartementsByRegion(payload).then((response) =>{
                if(response.data.success) {
                    this.setState({
                        departements: response.data.data
                    })
                }
            }).catch(err =>{
                console.log(err)
            })
            */
            this.setState({
                departements: HelperClub.getDepartementsByRegion(_id)
            })

        } catch (err) {
            console.log(err)
        }
    }
    onChangeDiscipline(_id) {
        this.state.disciplines.forEach(discipline => {
            if(discipline._id === _id) {
                this.setState({
                    discipline: discipline.libelle,
                    departement: "Choisir un departement",
                    region: 'Choisir une Région',
                })
            }
        });
        this.props.disciplineSelected(_id)
    }
    renderRegion() {
        return this.state.regions.map((region, index) => {
            return (
                <Option value={region._id} key={index}>
                    {region.libelle}
                </Option>
            )
        })
    }
    renderDepartements() {
        return this.state.departements.map((departement, index) => {
            return (
                <Option value={departement._id} key={index}>
                    {departement.libelle}
                </Option>
            )
        })
    }
    renderDisciplienes() {
        return this.state.disciplines.map((discipline, index) => {
            return (
                <Option value={discipline._id} key={index}>
                    {discipline.libelle}
                </Option>
            )
        })
    }
    render() {
        return (
            <div id="2">
                <h4 className="titreAccueil">
                    Trouver un Club <br />
                    <small style={{ fontSize: 10 }}>Chercher un club dans votre zone ?</small>
                </h4>
                <div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                                <Form.Group controlId="discipline">
                                    <p className="">
                                        *Discipline
                                    </p>
                                        <Select 
                                        onChange={this.onChangeDiscipline.bind(this)} 
                                        value={this.state.discipline} disabled={this.state.disabled}
                                        size="large"
                                        style={{width: "80%"}}
                                        >
                                            {this.renderDisciplienes()}
                                        </Select>
                                </Form.Group>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 ">
                                <Form.Group controlId="region">
                                    <p className="">
                                        *Région
                                    </p>
                                        <Select 
                                            onChange={this.onChangeRegion.bind(this)} 
                                            value={this.state.region} disabled={this.state.disabled}
                                            size="large"
                                            style={{width: "80%"}}
                                        >
                                            {this.renderRegion()}
                                        </Select>
                                    
                                </Form.Group>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
                                <Form.Group controlId="region">
                                    <p className="">
                                        *Departement
                                    </p>
                                        <Select 
                                        onChange={this.onChangeDepartement.bind(this)} 
                                        value={this.state.departement} disabled={this.state.disabled}
                                        size="large"
                                        style={{width: "80%"}}
                                        >
                                            {this.renderDepartements()}
                                        </Select>
                                </Form.Group>
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}
