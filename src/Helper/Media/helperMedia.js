import _fimages from './images.json'
import _falbums from './albums'

const getAlbums =  () => {
    let albums = _falbums
    return albums
}
const getImagesByAlbum = (idAlbum) => {
    let images = _fimages.filter(img =>img.idAlbum === idAlbum)
    return images
}
const Help = {
    getAlbums,
    getImagesByAlbum 
}

export default Help