import React, { Component } from 'react'

export default class ContactezNous extends Component {
    render() {
        return (
            <div>
               <h3>Contacts</h3> 
                
                <div>
                    <p style={{fontWeight: 'bold', color: '#000'}}>
                        <u>Secrétaire Général</u>
                    </p>
                    <p style={{fontWeight: 'bold', color: 'rgb(23, 49, 66)'}}>
                        M. El Hadji Massata DIAKHATE  
                    </p>
                    <p style={{fontWeight: 'bold', color: 'rgb(23, 49, 66)'}}>
                        sg@senegal-judo.com 
                    </p>
                    <p style={{fontWeight: 'bold', color: 'rgb(23, 49, 66)'}}>
                        (+ 221 77 450 23 23 )
                    </p>
                </div>
                <div>
                    <p style={{fontWeight: 'bold', color: '#FFF'}}>
                        <u>152, rue Moussé Diop, B. P. 1867 0000 DAKAR</u>
                        <br/>
                    </p>
                    <p style={{fontWeight: 'bold', color: 'rgb(23, 49, 66)'}}>
                        contact@senegal-judo.com
                    </p>
                    
                </div>
            </div>
        )
    }
}
