import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ImageUploading from 'react-images-uploading';
import { TextInput, TextSelectInput } from '../../../../components/input'
import { PrimaryButton, NegativePrimaryButton } from '../../../../components/button'
import { provinceList, amphoeList, birthYearList } from '../../../../data/direct'
import { containerCard, containerMain } from '../../../../components/tailwindClass'
import { urlListPetOwner } from '../../../urls'
import { Nav } from '../../../../components/navbar'
import { petCreateImageAPI, petGetDetailAPI, petImagesGetAPI, petEditAPI, petImageDelete, petDeleteAPI } from '../../../../data/apis'
import { required, requiredNotMatch } from '../../../../functions/validations'
import { dataURLtoFile } from '../../../../functions/converter'

export default function EditPet({ petId }) {
    var router = useRouter()
    const [images, setImages] = useState([]);
    const [animalType, setAnimalType] = useState('');
    const [species, setSpecies] = useState('');
    const [birthYear, setBirthYear] = useState(null);
    const [animalSex, setAnimalSex] = useState('');
    const [disease, setDisease] = useState('');
    const [province, setProvince] = useState(null);
    const [amphoe, setAmphoe] = useState(null);
    const [amphoeOnProvince, setAmphoeOnProvince] = useState([]);
    const [dataOld, setDataOld] = useState({});
    const maxNumber = 5;
    var _ = require('lodash');

    useEffect(() => {
        petGetDetailAPI(petId, setData)
        petImagesGetAPI(petId, setDataImages)
    }, [petGetDetailAPI])

    const setData = (t) => {
        setAnimalType(t.data['animal_type'])
        t.data['species'] !== null && setSpecies(t.data['species'])
        t.data['birth_year'] !== null && setBirthYear(birthYearList.find(y => y['value'] == t.data['birth_year']))
        t.data['sex'] !== null && setAnimalSex(t.data['sex'])
        t.data['disease'] !== null && setDisease(t.data['disease'])
        let pro = provinceList.find(y => y['province_code'] == t.data['province_code'])
        setProvince(pro)
        onChangeProvince(pro)
        setAmphoe(amphoeList.find(y => y['amphoe_code'] == t.data['amphoe_code']))
        setDataOld(t.data)
    }

    const setDataImages = (t) => {
        setImages(t.data)
    }

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
        validate = (required(animalType) &&
            required(province) &&
            required(amphoe))
        return validate;
    }

    const editPet = async (e) => {
        e.preventDefault() // prevents page reload
        if (validation()) {
            let formData = new FormData();
            requiredNotMatch(animalType, dataOld['animal_type']) && formData.append('animal_type', animalType)
            requiredNotMatch(species, dataOld['species']) && formData.append('species', species)
            requiredNotMatch(birthYear, dataOld['birthYear']) && birthYear !== null && formData.append('birth_year', birthYear['value'])
            requiredNotMatch(animalSex, dataOld['sex']) && formData.append('sex', animalSex)
            requiredNotMatch(disease, dataOld['disease']) && formData.append('disease', disease)
            requiredNotMatch(province['province_code'], dataOld['province_code']) && formData.append('province_code', province['province_code'])
            requiredNotMatch(amphoe['amphoe_code'], dataOld['amphoe_code']) && formData.append('amphoe_code', amphoe['amphoe_code'])
            petEditAPI(petId, formData, (t) => {
                if (t['statusText'] === 'OK') {
                    for (let i = 0; i < images.length; i++) {
                        if (images[i]['pet_image_id'] === undefined) {
                            let formDataImage = new FormData();
                            formDataImage.append('pet_id', t['data']['pet_id'])
                            formDataImage.append('pet_image', dataURLtoFile(images[i]['pet_image'], `petId${t['data']['pet_id']}-${i}.png`))
                            petCreateImageAPI(formDataImage, (t) => { })
                        }
                    }
                    router.push(urlListPetOwner)
                    alert('กดตกลงเพื่อแก้ไขสัตว์เลี้ยงสำเร็จ')
                } else {
                    alert('แก้ไขสัตว์เลี้ยงไม่สำเร็จ')
                }
            })
        }
    }

    const deletePet = () => {
        let isDeletePet = confirm('ยืนยันลบข้อมูลสัตว์เลี้ยง')
        if (isDeletePet){
            petDeleteAPI(petId,t =>{
                if(t['statusText'] === 'No Content'){
                    alert('ลบข้อมูลสัตว์เลี้ยงสำเร็จ')
                    router.push(urlListPetOwner)
                }
            })
        }
    } 

    const deleteImage = (index, func) => {
        let isDeleteImage = confirm('ยืนยันที่จะลบรูปภาพสัตว์เลี้ยง')
        if (isDeleteImage) {
            if (images[index]['pet_image_id'] !== undefined) {
                petImageDelete(images[index]['pet_image_id'], t => { })
            }
            func(index)
        }
    }

    return (
        <div>
            <Nav />
            <div className={containerMain}>
                <div className="flex flex-row justify-between">
                    <h1 className='my-auto'>รายละเอียดสัตว์เลี้ยง</h1>
                    <NegativePrimaryButton label="ลบสัตว์เลี้ยง" onClick={deletePet}></NegativePrimaryButton>
                </div>
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
                                                <button className="mx-auto" onClick={() => { deleteImage(index, onImageRemove) }}>ลบ</button>
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
                            <TextSelectInput id="amphoe" label="อำเภอ" options={amphoeOnProvince} labelName={'amphoe'} valueName={'amphoe_code'} value={amphoe} onChange={e => setAmphoe(e)} placeholder="เลือกอำเภอ" required={true}></TextSelectInput>
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
                            <TextSelectInput id="birth_year" label="ปีเกิด (ค.ศ)" className="lg:w-1/2" options={birthYearList} onChange={e => setBirthYear(e)} placeholder="เลือกปีเกิด" value={birthYear}></TextSelectInput>
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
                    <PrimaryButton className="mx-auto" label="แก้ไขสัตว์เลี้ยง" onClick={editPet}></PrimaryButton>
                </div>
            </div>
        </div>
    );
}

EditPet.getInitialProps = (appContext) => {
    return { petId: appContext.query.petId }
}