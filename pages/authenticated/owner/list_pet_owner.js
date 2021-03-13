import { useState, useEffect } from 'react'
import { containerCard, containerMain } from '../../../components/tailwindClass'
import { TextButton, CardInfoPetOwnerButton } from '../../../components/button'
import { urlAddPet, urlEditPet } from '../../urls'
import { Nav } from '../../../components/navbar'
import { petOwnerGetAPI } from '../../../data/apis'

export default function list_pet_owner() {
    const [list, setList] = useState([]);

    useEffect(() => {
        petOwnerGetAPI(t => {
            setList(t.data)
        })
    }, [petOwnerGetAPI])

    return (
        <div>
            <Nav />
            <div className={containerMain}>
                <div className="flex justify-between">
                    <h1 className="py-1">รายการหาบ้านของฉัน</h1>
                    <TextButton className="my-auto" href={urlAddPet} type="button" label="เพิ่มสัตว์เลี้ยง" />
                </div>
                <div className={containerCard}>
                    <div className="flex flex-col">
                        {list.map(i => (
                            <CardInfoPetOwnerButton key={i.pet_id}
                                id={i.pet_id}
                                type={i.animal_type}
                                age={i.birth_year}
                                species={i.species}
                                sex={i.sex}
                                href={urlEditPet(i.pet_id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
