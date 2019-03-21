import axios from 'axios';

export default {
    getFarmers: name => {
        return axios.get(`http://localhost:3001/api/farmers?name=${name}`);
    },
};
