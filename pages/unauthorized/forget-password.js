import { useState } from 'react'
import { TextInput, PasswordInput } from '../../components/input'
import { PrimaryButton, TextButton } from '../../components/button'
import { ArrowBack } from '../../components/icon-button'

export default function ForgetPassword() {
    const [inputForgetPassword, setinputForgetPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault() // prevents page reload
        alert("ส่งรหัสผ่าน")
    }

    return (
        <div className="flex h-screen bganimal">
            <div className="w-auto min-w-max max-w-max p-8 m-auto shadow-2xl bg-gray-50">
                <ArrowBack href="/unauthorized/login"></ArrowBack>
                <h1 style={{ fontSize: 28 }} className="mx-auto h-min w-max mb-5">ลืมรหัสผ่าน?</h1>
                <div className="mx-3 md:flex">
                    <TextInput id="inputForgetPassword" label="กรุณากรอกชื่อผู้ใช้หรืออีเมลเพื่อส่งรหัส" placeholder="ชื่อผู้ใช้หรืออีเมล" value={inputForgetPassword}
                        onChange={e => setinputForgetPassword(e.target.value)} />
                </div>
                <div className="mx-3 flex py-2">
                    <PrimaryButton label="ส่งรหัสผ่าน" type="submit" onClick={submit}></PrimaryButton>
                </div>
            </div>
        </div>
    );
}