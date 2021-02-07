import { useRouter } from 'next/router'
import { contrinerCard, contrinerMain } from '../../../components/tailwindClass'
import { PrimaryButton, CardInfoPetFinderButton } from '../../../components/button'
import { animalOwner } from '../../../data/direct'

export default function list_pet_finder() {
    return (
        <div className={contrinerMain}>
            <div className="flex justify-between">
                <div className="flex">
                    <h1 className="p-1 pr-4">รายการสัตว์เลี้ยงที่กำลังหาบ้าน</h1>
                    <PrimaryButton label="รายการที่สนใจ" />
                </div>
            </div>
            <div className={contrinerCard}>
                <div className="grid grid-cols-5">
                    <CardInfoPetFinderButton></CardInfoPetFinderButton>
                </div>
            </div>
        </div>
    );
}