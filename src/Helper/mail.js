import nodemailer from 'nodemailer'

const sendMail = async(nom, prenom, telephone, adresse, email) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'humblekingqueen@gmail.com',
          pass: 'cm199292'
        }
      });
      var mailOptions = {
        from: 'Humble Soft',
        to: 'mamadou001thiam@gmail.com', //sg@senegal-judo.com
        subject: 'INSCRIPTION SITE WEB FSJDA✔',
        text: 'Bonjour, vous avez une nouvelle inscription via le formulaire du site FSJDA. \n\n' + 'Nom: ' + nom + '\n' + 'Prénom: ' + prenom + '\n' + 'Téléphone: ' + telephone +'\n' +'Adresse: ' + adresse + '\n' +'Email: ' + email +'\n\nCordialement, \néquipe HumbleSoft'
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return false
        } else {
            return true
        }
      });
}

const Help = {
    sendMail
}

export default Help