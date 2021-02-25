import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { userEditAPI, checkTypeUserAPI } from '../../data/apis'
import { PrimaryButton } from '../../components/button'
import { urlListPetOwner, urlListPetFinder, urlLogin } from '../urls'
import { isLogin } from '../../functions/validations'

export default function SelectUserType() {
    const router = useRouter()

    useEffect(() => {
        if (isLogin) {
            toRolePart()
        }else{
            toLogin()
        }
    })

    const toLogin = () => {
        router.replace(urlLogin)
    }

    const toRolePart = () => {
        checkTypeUserAPI((t) => {
            if (t.data['user_type'] === 'ow') {
                router.replace(urlListPetOwner)
            } else if (t.data['user_type'] === 'fi') {
                router.replace(urlListPetFinder)
            }
        })
    }

    const selectType = (v, url) => {
        var formData = new FormData();
        formData.append('user_type', v)
        userEditAPI(formData, (t) => {
            if (t) {
                alert('สำเร็จ')
                router.replace(url)
            } else {
                alert('ไม่สำเร็จ')
            }
        })
    }

    const selectOwner = async (e) => {
        e.preventDefault()
        selectType('ow', urlListPetOwner)
    }

    const selectFinder = async (e) => {
        e.preventDefault()
        selectType('fi', urlListPetFinder)
    }

    return (
        <div className="flex h-screen bganimal">
            <div className="w-max md:px-24 p-8 m-auto shadow-2xl bg-gray-50">
                <h1 style={{ fontSize: 28 }} className="mx-auto h-min w-max mb-5">จุดประสงค์ที่ต้องการ</h1>
                <div className="flex">
                    <PrimaryButton className="mx-auto" label="ต้องการหาบ้านให้สัตว์เลี้ยง" onClick={selectOwner}></PrimaryButton>
                </div>
                <div className="flex">
                    <PrimaryButton className="mx-auto" label="ต้องการรับเลี้ยงสัตว์" onClick={selectFinder}></PrimaryButton>
                </div>
            </div>
        </div>
    );
}