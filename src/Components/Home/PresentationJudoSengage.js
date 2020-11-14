import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Layout} from 'antd'
import Animation from '../JudoSengage/Animation'
export default class PresentationJudoSengage extends Component {

    render() {
        return(
            <Layout style={{
                minHeight: 100,
                
            }}>
                <Link to="/judo">
                    <div className="contentPrésentationMobileF">
                        <div>
                            <h2 className="separator">"Le Judo s'Engage"</h2>
                            <hr className="separator" />
                        </div>
                        <Animation />
                    </div>
                </Link>
            </Layout>
        )
    }
}