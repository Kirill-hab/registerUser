import api from '../api';

export default class UserActions {

    static createUser(data, callback) {
        api.createUser(data)
            .then((res) => {
                callback(res.data.message)
            })
            .catch((err) => {
                callback(err.response.data.message)
            });
    }

    static loginUser(data, callback) {
        api.loginUser(data)
            .then((res) => {
                callback(res.data.message)
            })
            .catch((err) => {
                callback(err.response.data.message)
            });
    }

};