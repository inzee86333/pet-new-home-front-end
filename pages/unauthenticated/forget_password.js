import { useState, useEffect } from 'react'
import { TextInput, PasswordInput } from '../../components/input'
import { required, isLogin } from '../../functions/validations'
import { PrimaryButton, TextButton } from '../../components/button'
import { checkTypeUserAPI } from '../../data/apis';

export default function ForgetPassword() {
    const [inputForgetPassword, setInputForgetPassword] = useState('')

    useEffect(() => {
        if (isLogin) {
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

    const submit = async (e) => {
        e.preventDefault() // prevents page reload
        alert("ส่งรหัสผ่าน")
    }

    return (
        <div className="flex h-screen bganimal">
            <div className="w-auto min-w-max max-w-max p-8 m-auto shadow-2xl bg-gray-50">
                <h1 style={{ fontSize: 28 }} className="mx-auto h-min w-max mb-5">ลืมรหัสผ่าน?</h1>
                <div className="mx-3 md:flex">
                    <TextInput id="inputForgetPassword" label="กรุณากรอกอีเมลเพื่อส่งรหัส" placeholder="ชื่อผู้ใช้หรืออีเมล" value={inputForgetPassword}
                        onChange={e => setinputForgetPassword(e.target.value)} required={true}/>
                </div>
                <div className="mx-3 flex py-2">
                    <PrimaryButton className="mx-auto" label="ส่งรหัสผ่าน" type="submit" onClick={submit}></PrimaryButton>
                </div>
            </div>
        </div>
    );
}