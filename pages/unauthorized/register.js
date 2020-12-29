import { useState } from 'react'
import { TextInput, PasswordInput, PhoneNumberInput, EmailInput, TextAreaInput } from '../../components/input'
import { PrimaryButton } from '../../components/button'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const subscribe = async (e) => {
        e.preventDefault() // prevents page reload
        console.log(username, password, confirmPassword, firstName, lastName, phoneNumber, email, address)
    }

    return (
        <div className="flex h-screen">
            <div className="box-content w-auto min-w-min max-w-max m-auto p-8 shadow-md ">
                <div>
                    <h1 className="text-canter text-center font-black text-2xl py-4">
                        สมัครสมาชิก
                    </h1>
                    <form>
                        <div class="flex w-full h-min items-center py-5 justify-center">
                            <label class="w-64 flex flex-col font-semibold items-center px-4 py-6 bg-white text-green-600 rounded-lg shadow-lg tracking-wide uppercase border border-green-600 cursor-pointer hover:bg-green-600 hover:text-white">
                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span class="mt-2 text-base leading-normal">Select a file</span>
                                <input type='file' accept="image/*" class="hidden" />
                            </label>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="username" label="ชื่อผู้ใช้" placeholder="ชื่อผู้ใช้ของท่าน" value={username}
                                    onChange={e => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <PasswordInput id="password" label="รหัสผ่าน" placeholder="รหัสผ่านของท่าน" value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <PasswordInput id="confirm-password" label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่านของท่าน" value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="first-name" label="ชื่อจริง (ภาษาไทย)" placeholder="ชื่อจริงของท่าน" value={firstName}
                                    onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="last-name" label="นามสกุล (ภาษาไทย)" placeholder="นามสกุลของท่าน" value={lastName}
                                    onChange={e => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <PhoneNumberInput id="phone-number" label="หมายเลขโทรศัพท์" placeholder="หมายเลขโทรศัพท์ของท่าน" value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <EmailInput id="email" label="อีเมล" placeholder="อีเมลของท่าน" value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <TextAreaInput id="address" label="ที่อยู่ปัจจุบัน" placeholder="ที่อยู่ปัจจุบันของท่าน เช่น 95/1 หมู่1 ตำบลแม่กา อำเภอเมือง จังหวัดพะเยา" value={address}
                                onChange={e => setAddress(e.target.value)}></TextAreaInput>
                        </div>
                        <div className="-mx-3 flex py-2">
                            <PrimaryButton label="สมัคร" type="submit" onClick={subscribe}></PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}