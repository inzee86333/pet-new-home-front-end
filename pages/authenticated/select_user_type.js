import { useRouter } from 'next/router'
import { PrimaryButton } from '../../components/button'
import { urlAddPet, urlListPetFinder } from '../urls'

export default function SelectUserType() {
    const router = useRouter()

    const selectOwner = async (e) => {
        e.preventDefault()
        router.push(urlAddPet)
    }

    const selectFinder = async (e) => {
        e.preventDefault()
        router.push(urlListPetFinder)
    }

    return (
        <div className="flex h-screen bganimal">
            <div className="w-max md:px-24 p-8 m-auto shadow-2xl bg-gray-50">
                <h1 style={{ fontSize: 28 }} className="mx-auto h-min w-max mb-5">จุดประสงค์ที่ต้องการ</h1>
                <div className="p-2 flex">
                    <PrimaryButton label="ต้องการหาบ้านให้สัตว์เลี้ยง" onClick={selectOwner}></PrimaryButton>
                </div>
                <div className="p-2 flex">
                    <PrimaryButton label="ต้องการรับเลี้ยงสัตว์" onClick={selectFinder}></PrimaryButton>
                </div>
            </div>
        </div>
    );
}