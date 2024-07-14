import axios from "axios";

 const instance = axios.create({
    baseURL:'https://king-prawn-app-7mxo3.ondigitalocean.app/api/v1/',
 })

 export default instance;