import { containerCard, containerMain } from '../../../components/tailwindClass'
import { PrimaryButton, CardInfoPetFinderButton ,CardInfoPetOwnerButton} from '../../../components/button'
import { animalOwner } from '../../../data/direct'
import { Nav } from '../../../components/navbar'

export default function pet_finder_detail() {
    //part http://localhost:3000/authenticated/finder/pet_finder_detail
    return(
        <div>
            <Nav / >
            <div className={containerMain}>
                <div className="flex justify-between">
                    <div className="flex">
                        <h1 className="p-1 pr-4">รายละเอียดสัตว์เลี้ยง</h1>
                        {/* <PrimaryButton label="สนใจ" /> */}
                    </div>
                </div>
                <div className={containerCard}>
                    <div className=""> 
                        {/* {animalOwner.map(JSON => (
                            <CardInfoPetOwnerButton key={JSON.id}
                                id={JSON.id}
                                photo={JSON.photoPet}
                                type={JSON.type}
                                age={JSON.age}
                                species={JSON.species}
                                sex={JSON.sex}
                                interested={JSON.interested}
                                message={JSON.message}
                                grid md:grid-cols-1 grid-cols-3
                            />
                        ))} */}
                    </div>
                    <div className="mx-3 flex py-2">
                        <PrimaryButton className="mx-auto" label="ส่งข้อความหาเจ้าของ"/>
                    </div>
                </div>
            </div>
        </div>
    )
}