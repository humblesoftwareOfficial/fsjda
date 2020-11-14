import React, { Component } from 'react'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import Utils from '../../Utils/detectDevice'
export default class SocialNetworks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: ''
        }
    }
    componentDidMount() {
        this.setState({
            device: Utils.DetectDevice()
        })
    }
    render() {
        return (
            <>
                {
                    this.state.device === 'MOBILE' ?
                        (
                            <div className="contentAccessRapide">
                                <div className="">
                                    <h2 className="separator" style={{color: '#face0c'}}>Suivez-Nous</h2>
                                    <hr className="separator" />
                                    <div style={{ textAlign: "center" }}>
                                        <span className="cercleSN">
                                            <a href="https://web.facebook.com/fsjda/" target="blank">
                                                <img src={facebook} className="imgCercle" alt="logo" />
                                            </a>
                                        </span>
                                        <span className="cercleSN">
                                            <a href="https://www.youtube.com/channel/UCFjErv89WmzldnOLhsbEaig" target="blank">
                                                <img src={youtube} className="imgCercle" alt="logo" />
                                            </a>
                                        </span>
                                        <span className="cercleSN">
                                            <a href="https://www.twitter.com/judo_senegal/" target="blank">
                                                <img src={twitter} className="imgCercle" alt="logo" />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) :
                        (
                            <div className="contentSocialNetworks">
                                <div className="">
                                    <h2 className="separator" style={{ color: '#face0c' }}>Suivez-Nous</h2>
                                    <hr className="separator" />
                                    <div style={{ textAlign: "center" }}>
                                        <span className="cercleSN">
                                            <a href="https://web.facebook.com/fsjda/" target="blank">
                                                <img src={facebook} className="imgCercle" alt="logo" />
                                            </a>
                                        </span>
                                        <span className="cercleSN">
                                            <a href="https://www.youtube.com/channel/UCFjErv89WmzldnOLhsbEaig" target="blank">
                                                <img src={youtube} className="imgCercle" alt="logo" />
                                            </a>
                                        </span>
                                        <span className="cercleSN">
                                            <a href="https://www.twitter.com/judo_senegal/" target="blank">
                                                <img src={twitter} className="imgCercle" alt="logo" />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </>
        )
    }
}