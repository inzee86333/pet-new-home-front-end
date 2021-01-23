import { useState } from 'react'
import ImageUploading from 'react-images-uploading';
import { TextInput, TextSelectInput } from '../../../components/input'
import { PrimaryButton } from '../../../components/button'
import { provinceList } from '../../../data/direct'

export default function AddPet() {
    const [images, setImages] = useState([]);
    const [province, setProvince] = useState(null);
    const [district, setDistrict] = useState(null);
    const maxNumber = 12;
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
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                        errors,
                    }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            <button
                                style={isDragging ? { color: 'black' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Click or Drop here
                            </button>
                         &nbsp;
                            <button onClick={onImageRemoveAll}>Remove all images</button>
                            <div className="flex flex-row">
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image['data_url']} alt="" className="w-28 h-28" />
                                        <div className="image-item__btn-wrapper">
                                            <button onClick={() => onImageUpdate(index)}>Update</button>
                                            <button onClick={() => onImageRemove(index)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {errors && <div>
                                {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                                {errors.acceptType && <span>Your selected file type is not allow</span>}
                                {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                                {errors.resolution && <span>Selected file is not match your desired resolution</span>}
                            </div>}
                        </div>
                    )}
                </ImageUploading>
            </div>
            <div className='w-auto min-w-max xl:w-1/2 my-2 md:w-3/4 md:px-24 p-8 m-auto shadow-2xl bg-gray-50'>2</div>
            <div className='w-auto min-w-max xl:w-1/2 my-2 md:w-3/4 md:px-24 p-8 m-auto shadow-2xl bg-gray-50'>
                <h3 className="mb-4">ที่อยู่สัตวเลี้ยง</h3>
                <div className="mx-3 md:flex">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <TextSelectInput id="province" label="จังหวัด" options={provinceList} value={province} onChange={e => setProvince(e)} placeholder="เลือกจังหวัด" required={true}></TextSelectInput>
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <TextSelectInput id="province" label="อำเภอ" options={provinceList} value={district} onChange={e => setDistrict(e)} placeholder="เลือกอำเภอ" required={true}></TextSelectInput>
                    </div>
                </div>
            </div>
            <div className="mx-3 flex py-2">
                <PrimaryButton label="เพิ่มสัตว์เลี้ยง" onClick={addPet}></PrimaryButton>
            </div>
        </div>
    );
}   