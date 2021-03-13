import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ImageUploading from 'react-images-uploading';
import { TextInput, TextSelectInput } from '../../../components/input'
import { PrimaryButton } from '../../../components/button'
import { provinceList, amphoeList, birthYearList } from '../../../data/direct'
import { containerCard, containerMain } from '../../../components/tailwindClass'
import { urlListPetOwner } from '../../urls'
import { Nav } from '../../../components/navbar'
import { petCreateAPI, petCreateImageAPI } from '../../../data/apis'
import { required } from '../../../functions/validations'
import { dataURLtoFile } from '../../../functions/converter'

export default function AddPet() {
    const router = useRouter()
    const [images, setImages] = useState([]);
    const [animalType, setAnimalType] = useState('');
    const [species, setSpecies] = useState('');
    const [birthYear, setBirthYear] = useState(null);
    const [animalSex, setAnimalSex] = useState('');
    const [disease, setDisease] = useState('');
    const [province, setProvince] = useState(null);
    const [amphoe, setAmphoe] = useState(null);
    const [amphoeOnProvince, setAmphoeOnProvince] = useState([]);
    const maxNumber = 5;
    var _ = require('lodash');

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
    };

    const onChangeProvince = (e) => {
        setProvince(e)
        let ampList = amphoeList.filter(j => j['province_code'] == e['province_code'])
        setAmphoeOnProvince(_.uniqBy(ampList, 'amphoe'))
        setAmphoe(null)
    }

    const validation = () => {
        let validate;
        validate = (required(animalType)&&
        required(province)&&
        required(amphoe))
        return validate;
    }

    const addPet = async (e) => {
        e.preventDefault() // prevents page reload
        if (validation()) {
            let formData = new FormData();
            formData.append('owner_id', 'id')
            formData.append('animal_type', animalType)
            formData.append('species', species)
            birthYear!==null&&formData.append('birth_year', birthYear['value'])
            formData.append('sex', animalSex)
            formData.append('disease', disease)
            formData.append('province_code', province['province_code'])
            formData.append('amphoe_code', amphoe['amphoe_code'])
            petCreateAPI(formData,(t) => {
                if (t['statusText'] == "Created"){
                    for(let i=0; i<images.length;i++){
                        let formDataImage = new FormData();
                        formDataImage.append('pet_id', t['data']['pet_id'])
                        formDataImage.append('pet_image', dataURLtoFile(images[i]['pet_image'], `petId${t['data']['pet_id']}-${i}.png`))
                        petCreateImageAPI(formDataImage,(t)=>{})
                    }
                    alert('กดตกลงเพื่อเพิ่มสัตว์เลี้ยงสำเร็จ')
                    router.push(urlListPetOwner)
                }else{
                    alert('เพิ่มสัตว์เลี้ยงไม่สำเร็จ')
                }
            })
        }
    }

    return (
        <div>
            <Nav/>
            <div className={ containerMain }>
                <h1>รายละเอียดสัตว์เลี้ยง</h1>
                <div className={`mb-3 ${containerCard}`}>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="pet_image"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            errors,
                        }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <div className="flex">
                                    <button
                                        style={isDragging ? { color: 'black' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        เพิ่ม หรือ วางรูปตรงนี้
                            </button>
                            &nbsp;
                            <button onClick={onImageRemoveAll}>ลบรูปทั้งหมด</button>
                            &nbsp;
                                {errors && <div>
                                        {errors.maxNumber && <span> ใส่รูปไม่เกิน {maxNumber} รูป</span>}
                                        {errors.acceptType && <span>คุณเลือกประเภทไฟล์ไม่ถูกต้อง</span>}
                                        {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                                        {errors.resolution && <span>Selected file is not match your desired resolution</span>}
                                    </div>}
                                </div>
                         &nbsp;
                                <div className="flex">
                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['pet_image']} alt="" className="object-cover ml-1 h-28 w-28 shadow rounded-md border-2" />
                                            <div className="image-item__btn-wrapper flex">
                                                <button className="mx-auto" onClick={() => onImageRemove(index)}>ลบ</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </ImageUploading>
                </div>
                <div className={containerCard}>
                    <h3 className="mb-2">ที่อยู่สัตวเลี้ยง</h3>
                    <div className="mx-3 md:flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="province" label="จังหวัด" options={provinceList} labelName={'province'} valueName={'province_code'} value={province} onChange={onChangeProvince} placeholder="เลือกจังหวัด" required={true}></TextSelectInput>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="district" label="อำเภอ" options={amphoeOnProvince} labelName={'amphoe'} valueName={'amphoe_code'} value={amphoe} onChange={e => setAmphoe(e)} placeholder="เลือกอำเภอ" required={true}></TextSelectInput>
                        </div>
                    </div>
                </div>
                <div className={containerCard}>
                    <h3 className="mb-2">ข้อมูลสัตว์เลี้ยง</h3>
                    <div className="mx-3 md:flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextInput id="animal_type" label="ประเภท" onChange={e => setAnimalType(e.target.value)} placeholder="ประเภท" value={animalType} required={true}></TextInput>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextInput id="species" label="สายพันธุ์" onChange={e => setSpecies(e.target.value)} placeholder="สายพันธุ์" value={species}></TextInput>
                        </div>
                    </div>
                    <div className="mx-3 md:flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="birth_year" label="ปีเกิด (ค.ศ)" className="w-1/2" options={birthYearList} onChange={e => setBirthYear(e)} placeholder="เลือกปีเกิด"></TextSelectInput>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextInput id="sex" label="เพศ" className="w-1/2" onChange={e => setAnimalSex(e.target.value)} placeholder="เพศ" value={animalSex}></TextInput>
                        </div>
                    </div>
                    <div className="mx-3 md:flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextInput id="disease" placeholder="โรคประจำตัวของสัตว์เลี้ยง" value={disease} onChange={e => setDisease(e.target.value)} label="โรคประจำตัว"></TextInput>
                        </div>
                    </div>
                </div>
                <div className="mx-3 flex py-2">
                    <PrimaryButton className="mx-auto" label="เพิ่มสัตว์เลี้ยง" onClick={addPet}></PrimaryButton>
                </div>
            </div>
        </div>
    );
}   