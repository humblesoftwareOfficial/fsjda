import React, { Component } from 'react'
import { List } from 'antd'
import CardClub from '../Management/Club/CardClub'
import { Form } from 'react-bootstrap'
import InfosLigueDakar from './InfosLigueDakar'

import InfosLigueAiki from './InfosLigueAiki'
import InfosLigueNord from './InfosLigueNord'
import InfosLigueCentre from './InfosLigueCentre'
import InfosLigueSud from './InfosLigueSud'
export default class DisplayLigue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: [],
            clubName: '',
            array: []
        }
        this.changePage = this.changePage.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() {
        //console.log(this.props.clubs)
        this.setState({
            clubs: this.props.clubs,
            clubName: ''
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
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            clubs: this.props.clubs.filter(x => x.libelle.toUpperCase().includes(e.target.value.toUpperCase())),
        });
    }
    renderLigueInfos() {
        switch (this.props.ligue.libelle) {
            case "Ligue Dakar":
                return <InfosLigueDakar/>
            case "Ligue Aikido":
                return <InfosLigueAiki/>
            case "Ligue Nord":
                return <InfosLigueNord/>
            case "Ligue Centre":
                return <InfosLigueCentre/>
            case "Ligue Sud":
                return <InfosLigueSud/>
            default:
                break;
        }
    }
    render() { //contentPrésentation
        return (
            <div className={this.props.device ? "contentPrésentationMobileFC": "contentPrésentation"}>
                <p className='titre'>
                    {this.props.ligue.libelle}
                </p>
                {
                    this.renderLigueInfos()
                }
                <div className="contentFiltreClub">
                    <Form >
                        <Form.Control
                            type="text"
                            placeholder="Rechercher un club"
                            value={this.state.clubName}
                            name="clubName"
                            onChange={this.onChange}
                        />
                    </Form>
                </div>
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
                    dataSource={this.state.clubs}
                    grid={{ gutter: 16, column: 3 }}
                    renderItem={club => (
                        <List.Item key={club.code}>
                            <CardClub key={club.code} club={club} />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
