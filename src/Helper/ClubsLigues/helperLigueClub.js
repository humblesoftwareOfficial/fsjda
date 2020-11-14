import _fligues from './ligues.json'
import _fclubs from './clubs.json'
import _fresponsables from './responsables.json'
import _flocalisation from './localisations.json'
import _fregions from './regions.json'
import _fdepartements from './departements.json'
import _fcommunes from './communes'
const getLigues = () => {
    return _fligues
}
const getClubsByLigue = (idLigue) => { 
    let array = []
    const clubs = _fclubs.filter(club => club.idLigue === idLigue)
    clubs.forEach(club => {
        let responsable = findResponsable(club.idResponsable)
        club.responsable = responsable
        array.push(club)
    });
    return array
}
const findResponsable = (idResponsable) => {
    return _fresponsables.find(res => res._id === idResponsable)
}
const findLocalisation = (idClub) => {
    let club = _fclubs.find(club => club._id === idClub)
    let localisation = _flocalisation.find(loc => loc._id === club.idLocalisation)
    let region = _fregions.find(reg => reg._id === localisation.idRegion)
    let departement = _fdepartements.find(dept => dept._id === localisation.idDepartement)
    let commune = _fcommunes.find(com => com._id === localisation.idCommune)
    let loc = {
        region: region ? region.libelle: "",
        departement: departement ? departement.libelle: "",
        commune: commune ? commune.libelle : ""
    }
    return loc
}
const getRegions = () => {
    return _fregions
}
const getDepartementsByRegion = (idRegion) => {
    let departements = _fdepartements.filter(dept => dept.idRegion === idRegion)
    return departements
}
const getCommunes = (idDepartement) => {
    let communes =  _fcommunes.filter(com => com.idDepartement === idDepartement)
    return communes
}
const getClubs = () => {
    let clubs =  _fclubs;
    let array = []
    clubs.forEach(club => {
        let responsable = findResponsable(club.idResponsable)
        club.responsable = responsable
        array.push(club)
    });
    return array
}
const getClubsByRegion = (idRegion) => {
    let localisations =  _flocalisation.filter(loc =>loc.idRegion === idRegion);
    let clubs = []
    localisations.forEach(loc => {
        let c = _fclubs.filter(cl => cl.idLocalisation === loc._id)
        clubs.push(c)
    });
    let array = []
    let i = 0
    clubs.forEach(element => {
        element.forEach(el => {
            array[i] = el
            i++
        });
    });
    return array
}
const getClubsByDepartements = (idDepartement) => {
    let localisations =  _flocalisation.filter(loc =>loc.idDepartement === idDepartement);
    let clubs = []
    localisations.forEach(loc => {
        let c = _fclubs.filter(cl => cl.idLocalisation === loc._id)
        clubs.push(c)
    });
    let array = []
    let i = 0
    clubs.forEach(element => {
        element.forEach(el => {
            array[i] = el
            i++
        });
    });
    return array
}
const getClubsDisciplineJudo  = () => {
    let array = []
    let clubs = _fclubs.filter(cl => cl.idLigue !== "5e621fe66a175811a09ed488")
    clubs.forEach(club => {
        let responsable = findResponsable(club.idResponsable)
        club.responsable = responsable
        array.push(club)
    });
    return array
}
const getClubsDisciplineAikido  = () => {
    let array = []
    let clubs = _fclubs.filter(cl => cl.idLigue === "5e621fe66a175811a09ed488")
    clubs.forEach(club => {
        let responsable = findResponsable(club.idResponsable)
        club.responsable = responsable
        array.push(club)
    });
    return array
}
const getRegion = (_id) => {
    let region = _fregions.find(reg => reg._id === _id)
    return region
}
const getDepartement = (_id) => {
    let departement = _fdepartements.find(dept => dept._id === _id)
    return departement
}
const FiltreClubRegion = (clubs, idRegion) => {
    let region = getRegion(idRegion)
    let array = []
    clubs.forEach(club => {
        let loc = findLocalisation(club._id)
        if(loc.region === region.libelle) {
            array.push(club)
        }
    });
    return array
}
const FiltreClubDepartement = (clubs, idDepartement) => {
    let departement = getDepartement(idDepartement)
    let array = []
    clubs.forEach(club => {
        let loc = findLocalisation(club._id)
        if(loc.departement === departement.libelle) {
            array.push(club)
        }
    });
    return array
}
const Help = {
    getLigues, 
    getClubsByLigue,
    findLocalisation,
    getRegions,
    getDepartementsByRegion,
    getCommunes, 
    getClubs,
    getClubsByRegion,
    getClubsByDepartements,
    getClubsDisciplineAikido,
    getClubsDisciplineJudo,
    FiltreClubRegion,
    FiltreClubDepartement
}

export default Help