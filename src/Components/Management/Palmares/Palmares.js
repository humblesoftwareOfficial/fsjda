import React, { Component } from 'react'
import { Layout, Row, Col, Spin, Icon, Select, Affix } from 'antd'
import Header from '../../Utils/Header'
import Footer from '../../Utils/Footer'
import SectionPalmares from './SectionPalmares'
import PalmaresContent from './PalmaresContent'
//import api from '../../../api/index'
import Utils from '../../../Utils/detectDevice'
import HeaderFromPage from '../../Utils/HeaderFromPage'
import Partenaires from '../../Partenaires/Partenaires'
import SocialNetwork from '../../Home/SocialNetworks'
import HelperCompetitions from '../../../Helper/Palmares/HelperCompetitions'
const { Option } = Select
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
export default class Palmares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            competitions: [],
            medailles: [],
            libelleCompetition: '',
            chargement: false,
            device: '',
            fullCompetitions: [],
            competition: 'NATIONAL',
            top: 50,
        }
        this.onCompetitionClicked = this.onCompetitionClicked.bind(this)
        this.onChangeCompetitionMobile = this.onChangeCompetitionMobile.bind(this)
    }
    componentDidMount() {
        this.getCompetitions()
        try {
            this.setState({
                device: Utils.DetectDevice()
            })
        } catch (err) {
            console.log(err)
        }
    }
    async getCompetitions() {
        try {
            /*
            await api.GetCompetitions().then((response) => {
                if (response.data.success) {
                    this.setState({
                        competitions: response.data.data
                    })
                }
            }).catch(err => {
                console.log(err)
            })
            */
           let competitions = HelperCompetitions.getCompetitions()
           this.setState({
               competitions: competitions.filter(comp => comp.details === 'NATIONAL'),
               fullCompetitions: competitions
           })
        } catch (err) {
            console.log(err)
        }
    }
    async getMedaillesByCompetition(_id) {
        /*
        this.setState({
            chargement: true
        })
        let payload = {
            code: code
        }
        await api.GetMedaillesByCompetition(payload).then((response) => {
            if (response.data.success) {
                this.setState({
                    medailles: response.data.data,
                    chargement: false
                })
            }
        }).catch(err => {
            console.log(err)
        })
        */
       this.setState({
           medailles: HelperCompetitions.getMedaillesByCompetiton(_id),
       }, () => this.setState({
            chargement: false
       }))
    }
    onCompetitionClicked(code, libelle, _id) {
        this.getMedaillesByCompetition(_id)
        this.setState({
            libelleCompetition: libelle,
            chargement: true
        })
        if (this.state.device === 'MOBILE') {
            //window.scrollTo(0, 200);
        } else {
            window.scrollTo(0, 0);
        }
    }
    onChangeCompetitionMobile(competition) {
        switch (competition) {
            case 'NATIONAL':
                this.setState({
                    competition: 'NATIONALES',
                    competitionSelected: null
                })
                
                this.OnchangeNiveauCompetition(competition)
                break;
            case 'INTERNATIONAL':
                this.setState({
                    competition: 'INTERNATIONALES',
                    competitionSelected: null
                })
                this.OnchangeNiveauCompetition(competition)
                break;
            default:
                break;
        }
    }
    OnchangeNiveauCompetition(niveau) {
        this.onCompetitionClicked(this.state.fullCompetitions[0].code,
            this.state.fullCompetitions[0].libelle, 
            this.state.fullCompetitions[0]._id)
        this.setState({
            competitions: this.state.fullCompetitions.filter(comp => comp.details === niveau),
        })
    }
    render() {
        return (
            <Layout className="background">
                <Header fixed={false} active="palmares"></Header>
                <Row>
                    {
                        this.state.device === 'MOBILE' ?
                            (
                                <>
                                <Affix offsetTop={this.state.top}>
                                        <div className="enteteContent">
                                            <small className="entete">RÉSULTATS</small>
                                        </div>
                                    </Affix>
                                    <Col>
                                    
                                    <div style={{marginBottom: '10px', marginTop: '10px'}}>
                                        <p>NIVEAU DE COMPETITION</p>
                                        <Select 
                                        onChange={this.onChangeCompetitionMobile}
                                            size="large"
                                            style={{width: "80%"}}
                                            value={this.state.competition}
                                        >
                                            <Option value="NATIONAL">
                                                NATIONALES
                                            </Option>
                                            <Option value="INTERNATIONAL">
                                                INTERNATIONALES
                                            </Option>
                                        </Select>
                                        </div>
                                        <HeaderFromPage title="Compétitions" menu={this.state.competitions} OnSubMenuClicked={this.onCompetitionClicked} />
                                        {
                                            this.state.chargement ?
                                                (
                                                    <div style={{ marginTop: '50px' }}>
                                                        <h4> {this.state.libelleCompetition}</h4>
                                                        <Spin indicator={antIcon} />
                                                        <p>Chargement des médailles ...</p>
                                                    </div>
                                                ) :
                                                (
                                                    <PalmaresContent medailles={this.state.medailles}
                                                        competition={this.state.libelleCompetition} />
                                                )
                                        }
                                        
                                    </Col>
                                    
                                </>
                            ) :
                            (
                                <>
                                    <Col span={8}>
                                        <SectionPalmares competitions={this.state.competitions}
                                            onCompetitionClicked={this.onCompetitionClicked}
                                            device={this.state.device} OnchangeNiveauCompetition={this.OnchangeNiveauCompetition.bind(this)}
                                        />
                                    </Col>
                                    <Col span={16}>
                                        {
                                            this.state.chargement ?
                                                (
                                                    <div style={{ marginTop: '50px' }}>
                                                        <h4> {this.state.libelleCompetition}</h4>
                                                        <Spin indicator={antIcon} />
                                                        <p>Chargement des médailles ...</p>
                                                    </div>
                                                ) :
                                                (
                                                    <PalmaresContent medailles={this.state.medailles}
                                                        competition={this.state.libelleCompetition} device={this.state.device}/>
                                                )
                                        }
                                    </Col>
                                </>
                            )
                    }
                </Row>
                <SocialNetwork/>
                <Partenaires/>
                <Footer></Footer>
            </Layout>
        )
    }
}

/*
<Col>
                                        <SectionPalmares competitions={this.state.competitions}
                                            onCompetitionClicked={this.onCompetitionClicked}
                                            device={this.state.device} />
                                    </Col>

*/