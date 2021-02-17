import { useRouter } from 'next/router'
import { contrinerCard, contrinerMain } from '../../../components/tailwindClass'
import { PrimaryButton, CardInfoPetFinderButton } from '../../../components/button'
import { animalOwner } from '../../../data/direct'
import { Nav } from '../../../components/navbar'

export default function list_pet_finder() {
    return (
        <div>
            <Nav />
            <div className={contrinerMain}>
                <div className="flex justify-between">
                    <div className="flex">
                        <h1 className="p-1 pr-4">รายการสัตว์เลี้ยงที่กำลังหาบ้าน</h1>
                        <PrimaryButton label="รายการที่สนใจ" />
                    </div>
                </div>
                <div className={contrinerCard}>
                    <div className="grid md:grid-cols-5  grid-cols-3">
                        {animalOwner.map(json => (
                            <CardInfoPetFinderButton key={json.id}
                                id={json.id}
                                photo={json.photoPet}
                                type={json.type}
                                age={json.age}
                                species={json.species}
                                sex={json.sex}
                                interested={json.interested}
                                message={json.message}
                                province={json.province}
                                district={json.district}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}