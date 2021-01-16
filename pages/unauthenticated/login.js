import { useState } from 'react'
import { useRouter } from 'next/router'
import { TextInput } from '../../components/input'
import { PrimaryButton, TextButton } from '../../components/button'
import { urlRegister, urlForgetPassword, urlSelectUserType } from '../urls'

export default function Login() {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault() // prevents page reload
        alert("เข้าสู่ระบบ")
        router.push(urlSelectUserType)
    }

    return (
        <div className="flex h-screen bganimal">
            <div className="w-auto min-w-max max-w-max md:px-24 p-8 m-auto shadow-2xl bg-gray-50">
                <h1 style={{ fontSize: 28 }} className="mx-auto h-min w-max mb-5">ลงชื่อเข้าใช้</h1>
                <div className="mx-3 md:flex">
                    <TextInput id="username" label="ชื่อผู้ใช้" placeholder="ชื่อผู้ใช้ของท่าน" value={username}
                        onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="mx-3 md:flex">
                    <TextInput id="password" label="รหัสผ่าน" placeholder="รหัสผ่านของท่าน" value={password}
                        type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mx-3 flex py-2">
                    <PrimaryButton label="เข้าสู่ระบบ" type="submit" onClick={submit}></PrimaryButton>
                </div>
                <div className="flax-row pb-1 pt-12 mx-auto w-max">
                    <TextButton label="สมัครสมาชิก" href={urlRegister}></TextButton> หรือ <TextButton label="ลืมรหัสผ่าน?" href={urlForgetPassword}></TextButton>
                </div>
            </div>
        </div>
    );
}