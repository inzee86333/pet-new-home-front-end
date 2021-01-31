import { useState } from 'react'
import ImageUploading from 'react-images-uploading';
import { TextAreaInput, TextInput, TextSelectInput } from '../../../components/input'
import { PrimaryButton } from '../../../components/button'
import { provinceList, animalTypeList, speciesList, birthYearList, animalSexList } from '../../../data/direct'
import { contrinerCardInput } from '../../../components/tailwindClass'

export default function AddPet() {
    const [images, setImages] = useState([]);
    const [animalType, setAnimalType] = useState(null);
    const [species, setSpeciess] = useState(null);
    const [birthYear, setBirthYear] = useState(null);
    const [animalSex, setAnimalSex] = useState(null);
    const [disease, setDisease] = useState('');
    const [province, setProvince] = useState(null);
    const [district, setDistrict] = useState(null);
    const maxNumber = 5;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const addPet = async (e) => {
        e.preventDefault() // prevents page reload
        console.log(province)
    }

    return (
        <div>
            <div className='w-auto min-w-max xl:w-1/2 my-2 md:w-3/4 md:px-24 p-8 m-auto shadow-2xl bg-gray-50'>
                <h1 style={{ fontSize: 28 }} className="ml-6 h-min w-max mb-4">รายละเอียดสัตว์เลี้ยง</h1>
                <div className={contrinerCardInput}>
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
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
                                            <img src={image['data_url']} alt="" className="object-cover mx-1 h-28 w-28 shadow border-2" />
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
                <div className={contrinerCardInput}>
                    <h3 className="mb-2">ข้อมูลสัตว์เลี้ยง</h3>
                    <div className="mx-3 md:flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="animal_type" label="ประเภท" options={animalTypeList} value={animalType} onChange={e => setAnimalType(e)} placeholder="เลือกประเภท" required={true}></TextSelectInput>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="species" label="สายพันธุ์" options={speciesList} value={species} onChange={e => setSpeciess(e)} placeholder="เลือกสายพันธุ์"></TextSelectInput>
                        </div>
                    </div>
                    <div className="mx-3 md:flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="birth_year" label="ปีเกิด" className="w-1/2" options={birthYearList} value={birthYear} onChange={e => setBirthYear(e)} placeholder="เลือกปีเกิด"></TextSelectInput>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="sex" label="เพศ" className="w-1/2" options={animalSexList} value={animalSex} onChange={e => setAnimalSex(e)} placeholder="เลือกเพศ"></TextSelectInput>
                        </div>
                    </div>
                    <div className="mx-3 md:flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextInput id="disease" placeholder="โรคประจำตัวของสัตว์เลี้ยง" value={disease} onChange={e => setDisease(e.target.value)} label="โรคประจำตัว"></TextInput>
                        </div>
                    </div>
                </div>
                <div className={contrinerCardInput}>
                    <h3 className="mb-2">ที่อยู่สัตวเลี้ยง</h3>
                    <div className="mx-3 md:flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="province" label="จังหวัด" options={provinceList} value={province} onChange={e => setProvince(e)} placeholder="เลือกจังหวัด" required={true}></TextSelectInput>
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextSelectInput id="district" label="อำเภอ" options={provinceList} value={district} onChange={e => setDistrict(e)} placeholder="เลือกอำเภอ" required={true}></TextSelectInput>
                        </div>
                    </div>
                </div>
                <div className="mx-3 flex py-2">
                    <PrimaryButton label="เพิ่มสัตว์เลี้ยง" onClick={addPet}></PrimaryButton>
                </div>
            </div>
        </div>
    );
}   