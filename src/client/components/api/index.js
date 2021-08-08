import axios from 'axios';

import { apiPrefix } from '../../../../config.json';

export default {
    createUser(data) {
        return axios.post(`${apiPrefix}/users/create`, data);
    },

    loginUser(data) {
        return axios.post(`${apiPrefix}/users/login`, data);
    },
}
