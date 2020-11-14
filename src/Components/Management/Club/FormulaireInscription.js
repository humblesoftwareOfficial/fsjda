import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'antd'
import emailjs from 'emailjs-com';
export default class Formulaire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            dnaissance: '',
            telephone: '',
            email: '',
            erreur: '',
            message: '',
            sucess: false
        }
        this.onSend = this.onSend.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSend() {
        if (this.checkFields()) {
            if (this.checkEmail(this.state.email)) {
                this.setState({
                    erreur: '',
                    message: 'Envoi du formulaire en cours ...',
                    success: true
                })
                var payload = {
                    nom: this.state.nom,
                    prenom: this.state.prenom,
                    telephone: this.state.telephone,
                    email: this.state.email,
                    adresse: this.state.adresse,
                }
                emailjs.send('gmail', 'fsjda', payload, 'user_Z3LnKVBdfGeKJbSzwnVGv')
                .then((result) => {
                    this.setState({
                        nom: '',
                        prenom: '',
                        telephone: '',
                        email: '',
                        adresse: '',
                        message: 'Envoi du formulaire réussi!',
                        success: true
                    })
                }, (error) => {
                    this.setState({
                        erreur: "Une erreur est survenue lord de l'envoi du formulaire. veuillez ressayer",
                        message: 'Envoi du formulaire en cours ...',
                        success: false
                    })
                });
                
            }
        } else {
            this.setState({
                erreur: "*Veuillez remplir tous les champs SVP!",
                message: ''
            })
        }
    }
    checkFields() {
        return (
            this.state.nom.trim('').length > 0 &&
            this.state.prenom.trim('').length > 0 &&
            this.state.adresse.trim('').length > 0 &&
            this.state.telephone.trim('').length > 8 &&
            this.state.email.trim('').length > 0
        )
    }
    checkEmail(email, name) {
        var mail = email
        // eslint-disable-next-line
        var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!filter.test(mail)) {
            this.setState({
                erreur: "*E-mail invalide!",
                message: ''
            })
            return false;
        }
        return true
    }
    render() {
        return (
            <>
                {
                    this.state.success ?
                        (
                            <h4 style={{color: 'green'}}>{this.state.message}</h4>
                        ) :
                        (
                            <Form className="contentTrouverClub" id="3">
                                <small style={{ fontSize: 10 }}>
                                    A défaut de contacter directement un club, vous pouvez remplir ce formulaire
                                    afin d'être assisté(e) dans votre démarche d'inscription dans un club.
                                </small>
                                <h3>Formulaire d'nscription</h3>
                                <Form.Group controlId="nom">
                                    <Form.Control type="text" placeholder="Nom" name='nom' value={this.state.nom} onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group controlId="prenom">
                                    <Form.Control type="text" placeholder="Prénom" name='prenom' value={this.state.prenom} onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group controlId="adresse">
                                    <Form.Control type="adresse" placeholder="Adresse" name='adresse' value={this.state.adresse} onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group controlId="telephone">
                                    <Form.Control type="number" placeholder="Téléphone" name='telephone' value={this.state.telephone} onChange={this.onChange} />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Control type="email" placeholder="E-mail" name='email' value={this.state.email} onChange={this.onChange} />
                                    <Form.Text className="text-muted">
                                        <small style={{ color: '#000' }}>
                                            Cette adresse pourrait être utilisé pour répondre à votre message (Si nécessaire)
                                        </small>
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" onClick={this.onSend}>
                                    Envoyer
                                </Button>
                                <p style={{ color: 'red' }}>{this.state.erreur}</p>

                            </Form>
                        )
                }
            </>
        )
    }
}
