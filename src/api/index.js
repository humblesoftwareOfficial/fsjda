import axios from 'axios';
const api = axios.create({
    //baseURL: 'http://localhost:4000/api'
    baseURL: 'http://192E.168.1.182:4000/api'
});

export const GetCompetitions = () => api.get(`/competitions`)
export const GetClubs = () => api.get(`/clubs`)
export const GetLocalisation = (payload) => api.get(`/localisation/${payload.code}`)
export const GetClubByCode = (payload) => api.get(`/club/${payload.code}`)
export const GetMedaillesByCompetition = (payload) => api.get(`/medaille/competition/${payload.code}`)
export const GetMedailleByCode = (payload) => api.get(`/medaille/${payload.code}`)
export const GetAlbums = () => api.get(`/albums`)
export const GetImageByAlbum = (payload) => api.get(`/images/album/${payload.code}`)
export const GetEvenements = () => api.get(`/evenements`)
export const GetEvenementsForMonth = (payload) => api.get(`/evenements/mois/${payload.mm}`)
export const GetRegions = (payload) => api.get(`/regions`)
export const GetDepartementsByRegion = (payload) => api.get(`/departements/region/${payload.code}`)
export const GetClubsByRegion = (payload) => api.get(`/clubs/region/${payload.code}`)
export const GetClubsByDepartement = (payload) => api.get(`/clubs/departement/${payload.code}`)
export const GetLigues = () => api.get(`ligues`)
export const GetClubsByLigue = (payload) => api.get(`/clubs/ligue/${payload.code}`) 
export const GetMembres = () => api.get(`/bureaux`)
export const SendMail = (payload) => api.post(`/mail-fsjda`, payload)
const apis = {
    GetCompetitions,
    GetClubs,
    GetLocalisation,
    GetClubByCode,
    GetMedaillesByCompetition,
    GetMedailleByCode,
    GetAlbums,
    GetImageByAlbum,
    GetEvenements,
    GetEvenementsForMonth,
    GetRegions,
    GetDepartementsByRegion,
    GetClubsByRegion,
    GetClubsByDepartement,
    GetLigues,
    GetClubsByLigue,
    GetMembres,
    SendMail
}

export default apis;