import React, { Component } from 'react'
import { Row, Affix, Select } from 'antd'
import './design.scss'
import { Form } from 'react-bootstrap';
import Competition from './Competion'
const { Option } = Select
export default class SectionPalmares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 50,
            competitionSelected: null,
            competition: 'NATIONALES',
            competitions: [],
            competitionName: ''
        }
        this.onCompetitionClicked = this.onCompetitionClicked.bind(this)
        this.onChangeNiveauCompetition = this.onChangeNiveauCompetition.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() {
        try {
            this.setState({
                competitions: this.props.competitions
            })
        } catch (error) {
            
        }
    }
    onCompetitionClicked(code, libelle, _id) {
        this.setState({
            competitionSelected: {code, libelle, _id}
        })
        this.props.onCompetitionClicked(code, libelle, _id)
    }
    onChangeNiveauCompetition(competition) {
        switch (competition) {
            case 'NATIONAL':
                this.setState({
                    competition: 'NATIONALES',
                    competitionSelected: null,
                    competitionName: ''
                })
                
                this.props.OnchangeNiveauCompetition(competition)
                break;
            case 'INTERNATIONAL':
                this.setState({
                    competition: 'INTERNATIONALES',
                    competitionSelected: null,
                    competitionName: ''
                })
                this.props.OnchangeNiveauCompetition(competition)
                break;
            default:
                this.setState({
                    competitionName: ''
                })
                break;
        }
    }
    renderCompetition() {
        if(this.state.competitionName.trim('').length > 0) {
            return this.state.competitions.map((competition, index) => {
                if(this.state.competitionSelected.code === competition.code) {
                    return (
                        <Competition key={index} competition={competition}
                            onCompetitionClicked={this.onCompetitionClicked} active={true}/>
                    )
                } else {
                    return (
                        <Competition key={index} competition={competition}
                            onCompetitionClicked={this.onCompetitionClicked} active={false}/>
                    )
                }
            })
        } else {
            if(this.props.competitions.length > 0) {
                if(this.state.competitionSelected === null) {
                    let comp = {
                        code: this.props.competitions[0].code,
                        libelle: this.props.competitions[0].libelle,
                        _id: this.props.competitions[0]._id
                    }
                    this.setState({
                        competitionSelected: comp
                    })
                    this.props.onCompetitionClicked(comp.code, comp.libelle, comp._id)
                    return this.props.competitions.map((competition, index) => {
                        if(competition.code === comp.code) {
                            return (
                                <Competition key={index} competition={competition}
                                    onCompetitionClicked={this.onCompetitionClicked} active={true}/>
                            )
                        } else {
                            return (
                                <Competition key={index} competition={competition}
                                    onCompetitionClicked={this.onCompetitionClicked} active={false}/>
                            )
                        }
                    })
                } else {
                    return this.props.competitions.map((competition, index) => {
                        if(this.state.competitionSelected.code === competition.code) {
                            return (
                                <Competition key={index} competition={competition}
                                    onCompetitionClicked={this.onCompetitionClicked} active={true}/>
                            )
                        } else {
                            return (
                                <Competition key={index} competition={competition}
                                    onCompetitionClicked={this.onCompetitionClicked} active={false}/>
                            )
                        }
                    })
                }
            } else {
                return null
            }
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            competitions: this.props.competitions.filter(x => x.libelle.toUpperCase().includes(e.target.value.toUpperCase())),
        });
    }
    render() {
        return (
            <>
                {
                    this.props.device === 'MOBILE' ?
                        (

                            <div className="contentSectionPalmares">
                                <p className='titre'>
                                    Compétitions
                                </p>
                                <div className="deroulantPalmares">

                                    <Row>
                                        {
                                            this.renderCompetition()
                                        }
                                    </Row>

                                </div>
                            </div>

                        ) :
                        (
                            <Affix>
                                <div className="contentSectionPalmares">
                                    <p className='titre'>
                                        Compétitions
                                    </p>
                                        <div style={{marginBottom: '10px'}}>
                                        <Select 
                                        onChange={this.onChangeNiveauCompetition}
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
                                        <div style={{marginBottom: '10px'}}>
                                        <Form.Control
                                                type="text"
                                                placeholder="Rechercher une compétition"
                                                value={this.state.competitionName}
                                                name="competitionName"
                                                onChange={this.onChange}
                                        />
                                        </div>
                                    <div className="deroulantPalmares">
                                        <Row>
                                            {
                                                this.renderCompetition()
                                            }
                                        </Row>

                                    </div>
                                </div>
                            </Affix>
                        )
                }
            </>
        )
    }
}
