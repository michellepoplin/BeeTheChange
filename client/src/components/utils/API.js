import axios from "axios";
const BASEURL = "https://dev-378075.okta.com";
const APIKEY = "";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};