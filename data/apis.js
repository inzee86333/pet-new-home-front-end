import axios from 'axios';
import cookie from 'js-cookie';
const host = '127.0.0.1:8000'
//user
const loginURL = `http://${host}/appapi/login/`
const userCreateURL = `http://${host}/appapi/user_create/`
const userDetailURL = `http://${host}/appapi/user_detail/`
const checkTypeUserURL = `http://${host}/appapi/check_user_type/`
//pet
const petCreateURL = `http://${host}/appapi/pet_create/`
const petDetailURL = `http://${host}/appapi/pet_detail/`
const petGetAllURL = `http://${host}/appapi/pet_get_all/`
const petOwnerGetURL = `http://${host}/appapi/pet_owner_get/`
//report
const reportGetAllURL = `http://${host}/appapi/report/`
const reportGetDetailURL = `http://${host}/appapi/report/detail/`
//petImage
const petImageURL = `http://${host}/appapi/pet_image/`

//user
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
    await axios.post(userCreateURL, formData, {
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => {
        callBack(response)
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

export async function userEditAPI(formData, callBack) {
    await axios.patch(userDetailURL, formData, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function userGetDetailAPI(callBack) {
    await axios.post(userDetailURL, new FormData(), {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function checkTypeUserAPI(callBack) {
    await axios.post(checkTypeUserURL, new FormData(), {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

//pet
export async function petCreateAPI(formData, callBack) {
    await axios.post(petCreateURL, formData, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function petOwnerGetAPI(callBack) {
    await axios.post(petOwnerGetURL, new FormData(), {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function petGetAllAPI(callBack) {
    await axios.get(petGetAllURL, new FormData(), {
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => {
        callBack(response)
    })
}

export async function petGetDetailAPI(pk, callBack) {
    await axios.get(`${petDetailURL}${pk}`, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function petEditAPI(pk, formData, callBack) {
    await axios.patch(`${petDetailURL}${pk}`, formData, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function petDeleteAPI(pk, callBack) {
    await axios.delete(`${petDetailURL}${pk}`, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

//petImage
export async function petCreateImageAPI(formData, callBack) {
    await axios.post(petImageURL, formData, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function petImagesGetAPI(pk, callBack) {
    await axios.get(`${petImageURL}${pk}`, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

//report
export async function reportGetAllAPI(callBack) {
    await axios.get(reportGetAllURL, new FormData(), {
        'Content-Type': 'application/x-www-form-urlencoded'
    }).then((response) => {
        callBack(response)
    })
}

export async function reportGetDetailAPI(reportID,callBack) {
    await axios.get(`${reportGetDetailURL}${reportID}`, new FormData(), {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}

export async function petImageDelete(pk, callBack) {
    await axios.delete(`${petImageURL}${pk}`, {
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: {
            'authorization': cookie.get('token')
        }
    }).then((response) => {
        callBack(response)
    })
}