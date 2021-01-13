import { useState } from 'react'
import { TextInput, PasswordInput } from '../../components/input'
import { PrimaryButton, SecondaryButton } from '../../components/button'
import { urlRegister, urlForgetPassword } from '../urls'

export default function SelectUserType() {
    return (
        <div className="flex h-screen bganimal">
            <div className="w-auto min-w-max max-w-max md:px-24 p-8 m-auto shadow-2xl bg-gray-50">
                <h1 style={{ fontSize: 28 }} className="mx-auto h-min w-max mb-5">จุดประสงค์ที่ต้องการ</h1>
                <div className="mx-3 flex py-2">
                    <PrimaryButton label="ต้องการหาบ้านให้สัตว์เลี้ยง"></PrimaryButton>
                </div>
                <div className="mx-3 flex py-2">
                    <PrimaryButton label="ต้องการรับเลี้ยงสัตว์"></PrimaryButton>
                </div>
            </div>
        </div>
    );
}