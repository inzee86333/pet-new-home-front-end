import { useRouter } from 'next/router'
import { contrinerCard, contrinerMain } from '../../../components/tailwindClass'
import { SecondaryButton } from '../../../components/button'
import { urlAddPet } from '../../urls'

export default function list_pet_owner() {
    const router = useRouter()

    const addPet = async (e) => {
        e.preventDefault()
        router.push(urlAddPet)
    }

    return (
        <div className={contrinerMain}>
            <div className="flex justify-between">
                <h1 className="py-1">รายการหาบ้านของฉัน</h1>
                <SecondaryButton onClick={addPet} type="button" label="เพิ่มรายการสัตว์เลี้ยง"></SecondaryButton>
            </div>
            <div className={contrinerCard}>
                <div>
                    <button>
                        <div>
                            ss
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
