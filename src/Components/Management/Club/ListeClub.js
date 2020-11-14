import React, { Component } from 'react'
import Header from '../../Utils/Header';
import Footer from '../../Utils/Footer';
import Partenaires from '../../Partenaires/Partenaires'
import { Form } from 'react-bootstrap';
import CardClub from './CardClub'
import { Layout, List } from 'antd'
//import api from '../../../api/index'
import { Select, Spin, Icon } from 'antd'
import SocialNetwork from '../../Home/SocialNetworks'
import Utils from '../../../Utils/detectDevice'
import HelperClub from '../../../Helper/ClubsLigues/helperLigueClub'
const { Option } = Select
const antIcon = <Icon type="loading" style={{ fontSize: 56 }} spin />;
export default class ListeClub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: [],
            regions: [],
            departements: [],
            clubName: '',
            region: 'Région',
            departement: 'Département',
            discipline: "Discipline",
            ligue: 'Ligue',
            array: [],
            ligues: [],
            disciplines: [
                {
                    _id: "1",
                    libelle: "Judo"
                },
                {
                    _id: "5e621fe66a175811a09ed488",
                    libelle: "Aikido"
                }
            ],
            chargement: true,
            device: '',
            arrayDiscipline: [],
            arrayRegion: [],
            arrayDepartement: [],
            arrayLigue: []
        }
        this.changePage = this.changePage.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() {
        window.scrollTo(0,0)
        this.getClubs()
        this.getRegions()
        this.getLigues()
        this.setState({
            device: Utils.DetectDevice()
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
    onChangeRegion(_id) {
        if (_id !== undefined) {
            if (_id === 1) {
                this.setState({
                    region: 'TOUTES LES REGIONS',
                    departement: "Département",
                    ligue: 'Ligue',
                    clubName: '',
                    array: this.state.arrayDiscipline,
                    chargement: true
                }, ()=>{
                    this.setState({
                        chargement: false
                    })
                })
            } else {
                this.state.regions.forEach(region => {
                    if (region._id === _id) {
                        let clubs = HelperClub.FiltreClubRegion(this.state.arrayDiscipline, _id)
                        this.setState({
                            region: region.libelle,
                            departement: "Choisir un departement",
                            ligue: 'Ligue',
                            clubName: '',
                            chargement: true,
                            array: clubs,
                            arrayRegion: clubs
                        }, () => this.setState({
                            chargement: false
                        }))
                        //this.getClubByRegions(_id)
                    }
                });
                this.getDepartements(_id)
            }
        }
    }
    onChangeLigue(_id) {
        if (_id !== undefined) {
            if (_id === 1) {
                this.setState({
                    ligue: 'TOUTES LES LIGUES',
                    clubName: '',
                    departement: "Département",
                    departements: [],
                    region: 'Région',
                    discipline: 'Discipline',
                    array: this.state.arrayLigue,
                    chargement: true
                }, () => this.setState({
                    chargement: false
                }))
                //this.getClubs()
            } else {
                this.state.ligues.forEach(ligue => {
                    if (ligue._id === _id) {
                        this.setState({
                            ligue: ligue.libelle,
                            departement: "Département",
                            region: 'Région',
                            departements: [],
                            discipline: 'Discipline',
                            chargement: true
                        })
                        this.getClubsByLigue(_id)
                    }
                });
                //this.getClubsByLigue(code)
            }
        }
    }
    async getClubByRegions(_id) {
        /*
        let payload = {
            code: code
        }
        await api.GetClubsByRegion(payload).then((response) => {
            if (response.data.success) {
                this.setState({
                    clubs: response.data.data,
                    array: response.data.data,
                    chargement: false
                })
            }
        }).catch(err => {
            console.log(err)
        })
        */
       this.setState({
           clubs: HelperClub.getClubsByRegion(_id),
           array: HelperClub.getClubsByRegion(_id),
           chargement: false
       })
    }
    async getClubsByDepartements(_id) {
        try {
            /*
            let payload = {
                code: code
            }
            await api.GetClubsByDepartement(payload).then((response) => {
                if (response.data.success) {
                    this.setState({
                        clubs: response.data.data,
                        array: response.data.data,
                        clubName: '',
                        chargement: false
                    })
                }
            }).catch(err => {
                console.log(err)
            })
            */
           this.setState({
            clubs: HelperClub.getClubsByDepartements(_id),
            array: HelperClub.getClubsByDepartements(_id),
            clubName: '',
            chargement: false
        })
        } catch (err) {
            console.log(err)
        }
    }
    async getClubsByLigue(_id) {
        try {
            /*
            let payload = {
                code: code
            }
            await api.GetClubsByLigue(payload).then((response) => {
                if (response.data.success) {
                    this.setState({
                        clubs: response.data.data,
                        array: response.data.data,
                        clubName: '',
                        chargement: false
                    })
                } else {
                    this.setState({
                        clubs: [],
                        chargement: false
                    })
                }
            })
            */
           this.setState({
            clubs: HelperClub.getClubsByLigue(_id),
            array: HelperClub.getClubsByLigue(_id),
            clubName: '',
            chargement: false
        })
        } catch (err) {
            this.setState({
                clubs: []
            })
        }
    }
    onChangeDepartement(_id) {
        if (_id !== undefined) {
            this.state.departements.forEach(departement => {
                if (departement._id === _id) {
                    let clubs = HelperClub.FiltreClubDepartement(this.state.arrayRegion, _id)
                    this.setState({
                        departement: departement.libelle,
                        array: clubs,
                        arrayDepartement: clubs,
                        chargement: true
                    }, ()=>this.setState({
                        chargement: false
                    }))
                }
            });
            //this.getClubsByDepartements(_id)
        }
    }
    onChangeDiscipline(_id) {
        this.state.disciplines.forEach(discipline => {
            if(discipline._id === _id) {
                this.setState({
                    discipline: discipline.libelle,
                    departement: "Departement",
                    region: 'Région',
                    ligue: 'Ligue',
                    clubName: ''
                })
            }
        });
        if(_id === "1") {
            let clubs = HelperClub.getClubsDisciplineJudo()
            this.setState({
                array: clubs,
                arrayDiscipline: clubs
            })
        } else {
            let clubs = HelperClub.getClubsDisciplineAikido()
            this.setState({
                array: clubs,
                arrayDiscipline: clubs
            })
        }
    }
    renderRegion() {
        return this.state.regions.map((region, index) => {
            return (
                <Option value={region._id} key={region._id}>
                    {region.libelle}
                </Option>
            )
        })
    }
    renderDepartements() {
        return this.state.departements.map((departement, index) => {
            return (
                <Option value={departement._id} key={index}>
                    {departement.libelle.toUpperCase()}
                </Option>
            )
        })
    }
    renderLigues() {
        return this.state.ligues.map((ligue, index) => {
            return (
                <Option value={ligue._id} key={index}>
                    {ligue.libelle.toUpperCase()}
                </Option>
            )
        })
    }
    renderDisciplines() {
        return this.state.disciplines.map((discipline, index) => {
            return (
                <Option value={discipline._id} key={index}>
                    {discipline.libelle}
                </Option>
            )
        })
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            array: this.state.clubs.filter(x => x.libelle.toUpperCase().includes(e.target.value.toUpperCase())),
        });
    }
    async getClubs() {
        /*
            await api.GetClubs().then((response) => {
            if (response.data.success) {
                this.setState({
                    clubs: response.data.data,
                    array: response.data.data,
                    chargement: false
                })
            }
        }).catch(err => {
            console.log(err)
        })
        */
       let clubs = HelperClub.getClubs()
       this.setState({
           clubs: clubs,
           array: clubs,
           arrayDiscipline: clubs,
           arrayRegion: [],
           arrayDepartement: [],
           arrayLigue: []
           
       }, () => this.setState({
            chargement: false
       }))
    }
    async getRegions() {
        try {
            /*
            await api.GetRegions().then((response) => {
                if (response.data.success) {
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
    async getDepartements(_id) {
        try {
            /*
            let payload = {
                code: codeRegion
            }
            await api.GetDepartementsByRegion(payload).then((response) => {
                if (response.data.success) {
                    this.setState({
                        departements: response.data.data
                    })
                }
            }).catch(err => {
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
    async getLigues() {
        try {
            /*
            await api.GetLigues().then((response) => {
                if (response.data.success) {
                    this.setState({
                        ligues: response.data.data
                    })
                }
            })
            */
           this.setState({
               ligues: HelperClub.getLigues()
           })
        } catch (err) {
            this.setState({
                ligues: []
            })
        }
    }
    render() {
        return (
            <Layout className="background">
                <Header active="ligues" />
                <div className={this.state.device === "MOBILE" ? "contentPrésentationMobileF": "contentTrouverClub"}>
                    <h2 className="separator" style={{ color: "#021930" }}>LISTE DES CLUBS ET DOJOS</h2>
                    <hr className="separator" />
                    <div className="contentFiltreClub">
                        <Form>
                            <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                                <Form.Group controlId="discipline">
                                        <Select 
                                        onChange={this.onChangeDiscipline.bind(this)} 
                                        value={this.state.discipline} disabled={this.state.disabled}
                                        size="large"
                                        style={{width: "80%"}}
                                        >
                                        {this.renderDisciplines()}
                                        </Select>
                                </Form.Group>
                            </div>
                                
                                <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                                    <Form.Group controlId="region">
                                        <Select
                                            onChange={this.onChangeRegion.bind(this)}
                                            value={this.state.region} disabled={this.state.disabled}
                                            size="large"
                                            style={{ width: "100%" }}
                                        >
                                            <Option value={1} >
                                                TOUTES LES REGIONS
                                        </Option>
                                            {this.renderRegion()}
                                        </Select>

                                    </Form.Group>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                                    <Form.Group controlId="departement">
                                        <Select
                                            onChange={this.onChangeDepartement.bind(this)}
                                            value={this.state.departement} disabled={this.state.disabled}
                                            size="large"
                                            style={{ width: "100%" }}
                                        >
                                            {this.renderDepartements()}
                                        </Select>
                                    </Form.Group>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                                    <Form.Group controlId="ligues">
                                        <Select
                                            onChange={this.onChangeLigue.bind(this)}
                                            value={this.state.ligue} disabled={this.state.disabled}
                                            size="large"
                                            style={{ width: "100%" }}
                                        >
                                            <Option value={1} >
                                                TOUTES LES LIGUES
                                        </Option>
                                            {this.renderLigues()}
                                        </Select>
                                    </Form.Group>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Nom"
                                        value={this.state.clubName}
                                        name="clubName"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                        </Form>
                    </div>
                    {
                        this.state.chargement ?
                            (
                                <div style={{ marginTop: '50px' }}>
                                    <h4> RECUPERATION DES CLUBS</h4>
                                    <Spin indicator={antIcon} />
                                    <p>Veuillez patienter...</p>
                                </div>
                            ) :
                            (
                                <List
                                    itemLayout="vertical"
                                    size="default"
                                    loading={this.state.loading}
                                    pagination={{
                                        onChange: page => {
                                            this.changePage()
                                        },
                                        pageSize: 12,
                                    }}
                                    dataSource={this.state.array}
                                    grid={{ gutter: 16, column: 4 }}
                                    renderItem={club => (
                                        <List.Item key={club.code}>
                                            <CardClub key={club.code} club={club} />
                                        </List.Item>
                                    )}
                                />
                            )
                    }
                </div>
                <SocialNetwork/>
                <Partenaires />
                <Footer />
            </Layout>
        )
    }
}