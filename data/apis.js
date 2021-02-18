import axios from 'axios';
const host = '127.0.0.1:8000'
const userPostURL = `http://${host}/appapi/user_post/`
const loginURL = `http://${host}/appapi/login/`

export async function registerAPI(formData, callBack) {
    await axios.post(`http://${host}/appapi/user_post/`, formData, {
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => {
        console.log(response);
        callBack(response['statusText'] == "Created")
    })
        .catch((error) => {
            if (error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else if (error.message) {
                console.log(error.message)
            }
        })
}

export async function loginAPI(formData, callBack) {
    await axios.post(loginURL, formData, {
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => {
        console.log(response);
        callBack(response['status'] == 202, response['data'])
    })
        .catch((error) => {
            if (error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else if (error.message) {
                console.log(error.message)
            }
        })
}