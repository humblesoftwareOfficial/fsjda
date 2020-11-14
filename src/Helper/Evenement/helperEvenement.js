import _fDate from './date.json'
import _fEvents from './evenements.json'

const getEvenementsMonth = (mois) => {
    const dates = _fDate.filter(date => date.mois === mois)
    let arrayEvents = []
    dates.forEach(date => {
        let eve = _fEvents.find(ev => ev.idDate === date._id)
        eve.date = {
            jour: date.jour,
            mois: date.mois,
            annee: date.annee,
            heure: date.heure,
            minute: date.minute
        }
        arrayEvents.push(eve)
    });
    return arrayEvents
}
const Help = {
    getEvenementsMonth
}
export default Help