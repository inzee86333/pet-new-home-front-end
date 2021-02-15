import { useRouter } from 'next/router'
import { contrinerCard, contrinerMain } from '../../../components/tailwindClass'
import { SecondaryButton, CardInfoPetOwnerButton } from '../../../components/button'
import { urlAddPet } from '../../urls'
import { animalOwner } from '../../../data/direct'
import { Nav } from '../../../components/navbar'

export default function list_pet_owner() {
    const router = useRouter()

    const addPet = async (e) => {
        e.preventDefault()
        router.push(urlAddPet)
    }

    return (
        <div>
            <Nav/>
            <div className={contrinerMain}>
                <div className="flex justify-between">
                    <h1 className="py-1">รายการหาบ้านของฉัน</h1>
                    <SecondaryButton onClick={addPet} type="button" label="เพิ่มสัตว์เลี้ยง" />
                </div>
                <div className={contrinerCard}>
                    <div className="flex flex-col">
                        {animalOwner.map(json => (
                            <CardInfoPetOwnerButton key={json.id}
                                id={json.id}
                                photo={json.photoPet}
                                type={json.type}
                                age={json.age}
                                species={json.species}
                                sex={json.sex}
                                interested={json.interested}
                                message={json.message}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
