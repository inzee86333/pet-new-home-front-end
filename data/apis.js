import axios from 'axios';
const host = '127.0.0.1:8000'

export async function registerAPI(formData, callBack) {
    const response = await axios.post(`http://${host}/appapi/user_post/`, formData,{
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => { 
            //console.log(response);
        callBack(response['statusText'] =="Created")
        })
        .catch((error) => {
            // if (error.response) {
            //     console.log(error.response)
            // } else if (error.request) {
            //     console.log(error.request)
            // } else if (error.message) {
            //     console.log(error.message)
            // }
        })
}