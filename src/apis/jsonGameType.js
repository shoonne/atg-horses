import axios from 'axios';
const url = 'https://www.atg.se/services/racinginfo/v1/api/products/V75';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
export default axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
});