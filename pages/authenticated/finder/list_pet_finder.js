import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { containerCard, containerMain } from '../../../components/tailwindClass'
import { PrimaryButton, CardInfoPetFinderButton } from '../../../components/button'
import { Nav } from '../../../components/navbar'
import { petGetAllAPI } from '../../../data/apis'

export default function list_pet_finder() {
    const [list, setList] = useState([]);

    useEffect(() => {
        petGetAllAPI(t => {
            setList(t.data)
        })
    }, [petGetAllAPI])

    return (
        <div>
            <Nav />
            <div className={containerMain}>
                <div className="flex justify-between">
                    <div className="flex">
                        <h1 className="p-1 pr-4">รายการสัตว์เลี้ยงที่กำลังหาบ้าน</h1>
                        <PrimaryButton label="รายการที่สนใจ" />
                    </div>
                </div>
                <div className={containerCard}>
                    <div className="grid md:grid-cols-5  grid-cols-3">
                        {list.map(i => (
                            <CardInfoPetFinderButton key={i.pet_id}
                                id={i.pet_id}
                                type={i.animal_type}
                                age={i.birth_year}
                                species={i.species}
                                sex={i.sex}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}