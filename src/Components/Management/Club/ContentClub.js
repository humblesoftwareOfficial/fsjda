import React, { Component } from 'react'
import CardClub from './CardClub'
import { List } from 'antd'
//import api from '../../../api/index'
import Device from '../../../Utils/detectDevice'
import FiltreClub from './FiltreClub'
import ProcedureInscription from '../Inscription/ProcedureInscription'
import FormulaireInscription from './FormulaireInscription'
import HelperClub from '../../../Helper/ClubsLigues/helperLigueClub'
export default class ContentClub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: [],
            array: [],
            arrayDiscipline: [],
            arrayRegion: [],
            loading: true,
            device: ''
        }
        this.changePage = this.changePage.bind(this)
        this.goTop = React.createRef()
        this.OnRegionSelected = this.OnRegionSelected.bind(this)
        this.onDepartementSelected = this.onDepartementSelected.bind(this)
        this.onDisciplineSelected = this.onDisciplineSelected.bind(this)
        this.linkClicked = this.linkClicked.bind(this)
    }
    componentDidMount() {
        try {
            window.scrollTo(0, 0);
            this.getClubs()
            this.setState({
                device: Device.DetectDevice()
            })
        } catch (err) {
            console.log(err)
            this.setState({
                clubs: []
            })
        }
    }
    async getClubs() {
        try {
            /*
            await api.GetClubs().then((response) => {
                if (response.data.success) {
                    this.setState({
                        clubs: response.data.data,
                        loading: false
                    })
                }
            }).catch(err => {
                console.log(err)
                this.setState({
                    clubs: []
                })
            })
            */
           let clubs = HelperClub.getClubs()
           this.setState({
               clubs: clubs,
               array: clubs,
               arrayDiscipline: clubs,
               arrayRegion: clubs,
               loading: false
           })
        } catch (err) {
            console.log(err)
            this.setState({
                clubs: []
            })
        }
    }
    renderCard() {
        return this.state.clubs.map((club, index) => {
            return (
                <CardClub key={index} club={club} />
            )
        })
    }
    changePage() {
        this.setState({
            loading: true
        })
        
        setTimeout(() =>{
            this.setState({
                loading: false
            })
            window.scrollTo(0, 200);
        }, 1000)
    }
    async OnRegionSelected(_id) {
        try {
            /*
            let payload = {
                code: region
            }
            await api.GetClubsByRegion(payload).then((response) => {
                if(response.data.success) {
                    this.setState({
                        clubs: response.data.data
                    })
                }
            }).catch(err => {
                console.log(err)
            })
            */
            let clubs = HelperClub.FiltreClubRegion(this.state.arrayDiscipline, _id)
            this.setState({
                array: clubs,
                arrayRegion: clubs 
            })
        } catch (err) {
            console.log(err)
        }
    }
    async onDepartementSelected(_id) {
        try {
            /*
            let payload = {
                code: departement
            }
            await api.GetClubsByDepartement(payload).then((response) => {
                if(response.data.success) {
                    this.setState({
                        clubs: response.data.data
                    })
                }
            }).catch(err => {
                console.log(err)
            })
            */
            let clubs = HelperClub.FiltreClubDepartement(this.state.arrayRegion, _id)
            this.setState({
                array: clubs,
            })
        } catch (err) {
            console.log(err)
        }
    }
    async onDisciplineSelected(_id) {
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
    linkClicked(key) {
        this.props.linkClicked(key)
    }
    render() {
        return (
            <>
                {
                    this.state.device === "MOBILE" ?
                        (
                           <>
                            <ProcedureInscription device="mobile" linkClicked={this.linkClicked}/>
                            <div className="contentLigueMobile">
                                <FormulaireInscription/>
                            </div>
                                
                           </>
                        ) :
                        (
                           <>
                           {
                                this.props.subMenu === 2 ?
                                (
                                    <div className="contentFiltreClub">
                                    <FiltreClub ref={this.goTop} regionSelected={this.OnRegionSelected} departementSelected={this.onDepartementSelected} disciplineSelected={this.onDisciplineSelected}/>
                                        <List
                                            itemLayout="vertical"
                                            size="default"
                                            loading={this.state.loading}
                                            pagination={{
                                                onChange: page => {
                                                    this.changePage()
                                                },
                                                pageSize: 9,
                                            }}
                                            dataSource={this.state.array}
                                            grid={{ gutter: 16, column: 3 }}
                                            renderItem={club => (
                                                <List.Item key={club.code}>
                                                    <CardClub key={club.code} club={club} />
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                ):
                                (
                                    this.props.subMenu === 1 ?
                                    (
                                        <div className="contentTrouverClub">
                                            <ProcedureInscription linkClicked={this.linkClicked}/>
                                        </div>
                                    ):
                                    (
                                        this.props.subMenu === 3 ?
                                        (
                                            <div className="contentTrouverClub">
                                                <FormulaireInscription/>
                                            </div>
                                        ):
                                        (
                                            null
                                        )
                                    )
                                )
                            }
                           </>
                        )
                }
            </>
        )
    }
}

