import axios from 'axios';

const apiApp = axios.create({
    baseURL: 'http://127.0.0.1:8000/',//'http://127.0.0.1:8000/api',
    
    /*params:{
        api_key:'f96689e923236ccc3b2f57cc9c38a668',
        language: 'es-ES'
    }*/
}) 

export default apiApp;