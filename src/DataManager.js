import {Stamp} from './Stamp'



export var stampCollection = []

export function InitDataManager(){
    var stamp1 = new Stamp("Deutsches Reich", 1942, true, "https://images-na.ssl-images-amazon.com/images/I/518jHHkOZuL._AC_.jpg", 0.10, "Nazi Germany")
    var stamp2 = new Stamp("J.W.Stalin", 1953, false, "https://www.themost10.com/wp-content/uploads/Stamp-Josef-Stalin.jpg", 0.20, "USSR")
    var stamp3 = new Stamp("Mannerheim", 1941, false, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mannerheim-50p-1941.jpg/240px-Mannerheim-50p-1941.jpg", 0.50, "Finland")
    stampCollection.push(stamp1, stamp2, stamp3)
}


export default {InitDataManager, stampCollection}
