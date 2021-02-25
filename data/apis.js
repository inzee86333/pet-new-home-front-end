import axios from 'axios';
import cookie from 'js-cookie';
const host = '127.0.0.1:8000'
const loginURL = `http://${host}/appapi/login/`
const userPostURL = `http://${host}/appapi/user_post/`
const userURL = `http://${host}/appapi/user_detail/`
const checkTypeUserURL = `http://${host}/appapi/check_user_type/`

export async function loginAPI(formData, callBack) {
    await axios.post(loginURL, formData, {
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => {
        // console.log(response);
        callBack(response['status'] == 202, response['data'])
    })
        // .catch((error) => {
        //     if (error.response) {
        //         console.log(error.response)
        //     } else if (error.request) {
        //         console.log(error.request)
        //     } else if (error.message) {
        //         console.log(error.message)
        //     }
        // })
}

export async function registerAPI(formData, callBack) {
    await axios.post(userPostURL, formData, {
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => {
        // console.log(response);
        callBack(response['statusText'] == "Created")
    })
}

export async function userEditAPI(formData, callBack) {
    await axios.patch(userURL, formData, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function userGetDetailAPI(callBack) {
    await axios.post(userURL, new FormData(), {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        // console.log(response)
        callBack(response.data)
    })
}

export async function checkTypeUserAPI(callBack) {
    await axios.post(checkTypeUserURL, new FormData(), {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers:{
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
//
// const host = '127.0.0.1:8000'
// const userPostURL = `http://${host}/api/user/create`
// const loginURL = `http://${host}/appapi/login/`

// export async function registerAPI(formData, callBack) {
//     await axios.post(userPostURL, formData, {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }).then((response) => {
//         console.log(response);
//         callBack(response['statusText'] == "Created")
//     })
//         .catch((error) => {
//             if (error.response) {
//                 console.log(error.response)
//             } else if (error.request) {
//                 console.log(error.request)
//             } else if (error.message) {
//                 console.log(error.message)
//             }
//         })
// }
