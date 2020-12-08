import axios from 'axios';

function axiosGet(url,config) {
    const baseUrl = '/api'+url
    return new Promise(function (resolve, reject) {
        axios.get(baseUrl, config)
            .then(function (res) {
                resolve(res)
            })
            .catch(function (err) {
                reject(err)
            })
    })
}

export {
    axiosGet
}