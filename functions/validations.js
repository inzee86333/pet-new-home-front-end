import cookie from 'js-cookie'
export const isLogin = () => {return cookie.get('token') !== undefined}
//บัค
export const required = (input) => {return input!==""} 
export const requiredSelect = (input) => { return input !== null } 
export const requiredMatch = (inputOne, inputTwo) => {return inputOne===inputTwo}
export const requiredNotMatch = (inputOne, inputTwo) => { return inputOne !== inputTwo }
