import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { TextInput } from '../../components/input'
import { PrimaryButton, TextButton } from '../../components/button'
import { urlRegister, urlForgetPassword, urlSelectUserType, urlListPetOwner, urlListPetFinder } from '../urls'
import { required } from '../../functions/validations'
import { loginAPI, checkTypeUserAPI } from '../../data/apis';
import cookie from 'js-cookie'

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (cookie.get('token') !== undefined){
            toRolePart()
        }
    })

    const toRolePart = () => {
        checkTypeUserAPI((t) => {
            if (t.data['user_type'] === 'ow') {
                router.replace(urlListPetOwner)
            } else if (t.data['user_type'] === 'fi') {
                router.replace(urlListPetFinder)
            } else if (t.data['user_type'] === null) {
                router.replace(urlSelectUserType)
            }
        })
    }

    const validation = () => {
        let validate;
        validate = (required(email)&&
        required(password));
        return validate;
    }

    const submit = async (e) => {
        e.preventDefault() // prevents page reload
        if(validation()){
            var formData = new FormData();
            formData.append('email', email)
            formData.append('password', password)
            loginAPI(formData,(t, data)=>{
                alert(data['message'])
                if (t) {
                    cookie.set('token', data['id'])
                    console.log(cookie.get('token'))
                    toRolePart()
                }
            })      
        }
    }

    return (
        <div className="flex h-screen bganimal">
            <div className="w-auto min-w-max max-w-max md:px-24 p-8 m-auto shadow-2xl bg-gray-50">
                <h1 style={{ fontSize: 28 }} className="mx-auto h-min w-max mb-5">ลงชื่อเข้าใช้</h1>
                <div className="mx-3 md:flex">
                    <TextInput id="email" label="อีเมล" placeholder="อีเมลของท่าน" value={email}
                        onChange={e => setEmail(e.target.value)} required={true}/>
                </div>
                <div className="mx-3 md:flex">
                    <TextInput id="password" label="รหัสผ่าน" placeholder="รหัสผ่านของท่าน" value={password}
                        type="password" onChange={e => setPassword(e.target.value)} required={true}/>
                </div>
                <div className="mx-3 flex py-2">
                    <PrimaryButton className="mx-auto" label="เข้าสู่ระบบ" type="submit" onClick={submit}></PrimaryButton>
                </div>
                <div className="flax-row pb-1 pt-12 mx-auto w-max">
                    <TextButton label="สมัครสมาชิก" href={urlRegister}></TextButton> หรือ <TextButton label="ลืมรหัสผ่าน?" href={urlForgetPassword}></TextButton>
                </div>
            </div>
        </div>
    );
}