import { useRouter } from 'next/router'
import { PrimaryButton } from '../../components/button'
import { urlAddPet } from '../urls'

export default function SelectUserType() {
    const router = useRouter()

    const selectOwner = async (e) => {
        e.preventDefault() // prevents page reload
        router.push(urlAddPet)
    }

    const selectFinder = async (e) => {
        e.preventDefault() // prevents page reload
        alert("Finder")
    }

    return (
        <div className="flex h-screen bganimal">
            <div className="w-auto min-w-max max-w-max md:px-24 p-8 m-auto shadow-2xl bg-gray-50">
                <h1 style={{ fontSize: 28 }} className="mx-auto h-min w-max mb-5">จุดประสงค์ที่ต้องการ</h1>
                <div className="mx-3 flex py-2">
                    <PrimaryButton label="ต้องการหาบ้านให้สัตว์เลี้ยง" onClick={selectOwner}></PrimaryButton>
                </div>
                <div className="mx-3 flex py-2">
                    <PrimaryButton label="ต้องการรับเลี้ยงสัตว์" onClick={selectFinder}></PrimaryButton>
                </div>
            </div>
        </div>
    );
}