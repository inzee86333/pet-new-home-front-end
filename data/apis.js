import axios from 'axios';
const host = '127.0.0.1:8000'

export const registerAPI = (formData) => {
    axios.post('http://127.0.0.1:8000/appapi/user_post/', formData,{
        'Content-Type': 'application/x-www-form-urlencoded'
    })
        .then(function (response) { 
            console.log(response);
            return true
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else if (error.message) {
                console.log(error.message)
            }
            return false
        })
}