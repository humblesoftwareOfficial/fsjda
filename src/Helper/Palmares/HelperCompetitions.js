import _fcompetitions from './competitions'
import _fathleteCompetions from './athletecompetition.json'
import _fathlete from './athletes.json'
import _fmedailles from './medailles.json'
import _f_typemedaille from './typemedailles.json'
const getCompetitions  = () => {
    let competitions = _fcompetitions
    return competitions
}

const getMedaillesByCompetiton = (idCompetition) => {
    let athlComp = _fathleteCompetions.filter(atc => atc.idCompetition === idCompetition)
    let medailles = []
    athlComp.forEach(ac => {
        medailles.push(getMedailleByAthleteCompetition(ac._id))
        if(getMedailleByAthleteCompetition(ac._id) === undefined) {
            //console.log(ac)
        }
    });
    //console.log(medailles)
    return medailles
}

const getMedailleByAthleteCompetition = (idAthComp) => {
    let medaille = _fmedailles.find(med => med.idAthleteCompetition === idAthComp)
    return medaille
}

const getMedailleById = (_id) => {
    let medaille = _fmedailles.find(med =>med._id === _id)
    try {
        let atc = getAtlhleteCompet(medaille.idAthleteCompetition)
        let athlete = getAthlete(atc.idAthlete)
        let competition = getCompetion(atc.idCompetition)
        let typeMedaille = getTypeMedaille(medaille.idTypeMedaille)
        let med = {
            typeMedaille: typeMedaille ? typeMedaille : {},
            athlete: athlete ? athlete : {},
            competition: competition ? competition : {},
            description: medaille.description
        }
        
        return med
    } catch (err) {
        console.log(err)
    }
}

const getTypeMedaille = (idTypeMedaille) => {
    let type = _f_typemedaille.find(tm => tm._id === idTypeMedaille)
    return type
}

const getAtlhleteCompet = (idAthleteCompetition) => {
    let atc = _fathleteCompetions.find(at => at._id === idAthleteCompetition)
    return atc
}
const getAthlete = (idAthlete) => {
    return _fathlete.find(at => at._id === idAthlete)
}

const getCompetion = (idCompetition) => {
    return _fcompetitions.find(comp => comp._id === idCompetition)
}

const getTypeMedailles = () =>{
    let typeMedailles = _f_typemedaille
    return typeMedailles
}

const Help = {
    getCompetitions,
    getMedaillesByCompetiton,
    getMedailleById,
    getTypeMedailles
}
export default Help