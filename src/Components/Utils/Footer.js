import React, { Component } from 'react'
import judo from '../../assets/fsjda/logo.png'
import fij from '../../assets/fij.png'
import aju from '../../assets/aju.png'
import './footer.css'
export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-md-6">
                            <h6 style={{color: '#FFF'}}>Coordonnées</h6>
                            <ul className="footer-links">
                                <li>152, rue Moussé Diop, B. P. 1867 0000 DAKAR</li>
                                <li><a href="mailto:contact@senegal-judo.com">contact@senegal-judo.com</a></li>
                                <a href="https://www.google.com/maps/dir//Rue+Mousse+Diop,+Dakar/@14.6689739,-17.4357645,19z/data=!4m17!1m7!3m6!1s0xec1724c62661e25:0xd6ba91e18922639e!2sRue+Mousse+Diop,+Dakar!3b1!8m2!3d14.6693709!4d-17.4351986!4m8!1m0!1m5!1m1!1s0xec1724c62661e25:0xd6ba91e18922639e!2m2!1d-17.4351986!2d14.6693709!3e3" target="blank">
                                    Voir sur la carte Google Maps
                                </a>
                            </ul>
                            <h6 style={{color: '#FFF'}}>Le Secrétaire général</h6>
                            <ul className="footer-links">
                                <li>M. El Hadji Massata DIAKHATE</li>
                                <li><a href="mailto:sg@senegal-judo.com">sg@senegal-judo.com</a></li>
                                <li><a href="tel:(+ 221 77 450 23 23 )">(+ 221 77 450 23 23 )</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img alt="judo" src={judo} className="imgJudoFooter"/>
                            <a href="https://www.ijf.org/" target="blank">
                                <img alt="judo" src={fij} className="imgJudoFooter" style={{marginRight: '20px'}}/>
                            </a>
                            <a href="http://africajudo.org/" target="blank">
                                <img alt="judo" src={aju} className="imgJudoFooter"/>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2020 Fédération Sénégalaise de Judo All Rights Reserved | by
                                    <a href="https://humbledesign.jimdofree.com/" target="blank">HumbleSoft</a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="https://web.facebook.com/fsjda/" target="blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="https://www.twitter.com/judo_senegal/" target="blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="youtube" href="https://www.youtube.com/channel/UCFjErv89WmzldnOLhsbEaig" target="blank"><i className="fa fa-youtube"></i></a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
        )
    }
}

//<li><a className="instagram" href="https://www.instagram.com/humblekingoff/" target="blank"><i className="fa fa-instagram"></i></a></li>