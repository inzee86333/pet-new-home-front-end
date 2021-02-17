import { useState } from 'react'
import { useRouter } from 'next/router'
import ImageUploading from 'react-images-uploading';
import { TextInput, TextAreaInput } from '../../components/input'
import { PrimaryButton, SecondaryButton } from '../../components/button'
import { required, requiredMatch } from '../../functions/validations'
import { dataURLtoFile, dataURItoBlob } from '../../functions/converter'
import { registerAPI } from '../../data/apis'
import { urlLogin } from '../urls'

export default function Register() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [images, setImages] = useState([{ data_url: "/user.png" }]);
    const maxImages = 1;

    const onChangeImage = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };

    const validation = () => {
        let validate;
        validate = (required(email) &&
            required(password) &&
            required(confirmPassword) &&
            required(firstName) &&
            required(lastName) &&
            required(phoneNumber) &&
            requiredMatch(password, confirmPassword));
        if (!requiredMatch(password, confirmPassword)) {
            alert("กรุณากรอกรหัสผ่านให้ตรงกัน")
        }
        return validate;
    }

    const submit = async (e) => {
        e.preventDefault();
        if (validation()) {
            var formData = new FormData();
            formData.append('email', email)
            formData.append('password', password)
            formData.append('first_name', firstName)
            formData.append('last_name', lastName)
            formData.append('phone_number', phoneNumber)
            formData.append('address', address)
            formData.append('photo_user', dataURLtoFile(images[0]['data_url'], `${firstName}-${lastName}.png`))
            registerAPI(formData,(t) =>{
                if(t){
                    alert('สมัครสมาชิกสำเร็จ')
                    router.push(urlLogin)
                }else{
                    alert('สมัครสมาชิกไม่สำเร็จ')
                }
            })
        }
    }

    return (
        <div className="flex h-max bganimal">
            <div className="box-content w-auto min-w-max max-w-max m-auto p-8 shadow-2xl my-8 bg-gray-50">
                <div>
                    <ImageUploading
                        value={images}
                        onChange={onChangeImage}
                        maxNumber={maxImages}
                        dataURLKey='data_url'
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            isDragging,
                            dragProps,
                            errors,
                        }) => (
                            // write your building UI
                            <div className="upload__image-wrapper min-w-max max-w-max mx-auto ">
                                &nbsp;
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image['data_url']} alt="" className="rounded-full object-cover h-48 w-48 shadow border-2 border-green-300" />
                                        <div className="image-item__btn-wrapper flex">
                                            <SecondaryButton className="mx-auto" onClick={() => onImageUpdate(index)} label="เพิ่มรูปประจำตัว"></SecondaryButton>
                                        </div>
                                    </div>
                                ))}
                                {errors && <div>
                                    {/* {errors.maxNumber && alert("Number of selected images exceed maxNumber")} */}
                                    {errors.acceptType && alert("Your selected file type is not allow")}
                                    {errors.maxFileSize && alert("Selected file size exceed maxFileSize")}
                                    {errors.resolution && alert("Selected file is not match your desired resolution")}
                                </div>}
                            </div>
                        )}

                    </ImageUploading>
                    <form>
                        <div className="mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="email" label="อีเมล" placeholder="อีเมลของท่าน" value={email} type="email"
                                    onChange={e => setEmail(e.target.value)} required={true} />
                            </div>
                        </div>
                        <div className="mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="password" label="รหัสผ่าน" placeholder="รหัสผ่านของท่าน" value={password}
                                    type="password" onChange={e => setPassword(e.target.value)} required={true} />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="confirm-password" label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่านของท่าน" value={confirmPassword}
                                    type="password" onChange={e => setConfirmPassword(e.target.value)} required={true} />
                            </div>
                        </div>
                        <div className="mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="first-name" label="ชื่อจริง" placeholder="ชื่อจริงของท่าน" value={firstName}
                                    onChange={e => setFirstName(e.target.value)} required={true} />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="last-name" label="นามสกุล" placeholder="นามสกุลของท่าน" value={lastName}
                                    onChange={e => setLastName(e.target.value)} required={true} />
                            </div>
                        </div>
                        <div className="mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="phone-number" label="หมายเลขโทรศัพท์" placeholder="หมายเลขโทรศัพท์ของท่าน" value={phoneNumber}
                                    maxLength="10" onChange={e => setPhoneNumber(e.target.value)} required={true} />
                            </div>
                        </div>
                        <div className="mx-3 md:flex">
                            <TextAreaInput id="address" label="ที่อยู่ปัจจุบัน" placeholder="ที่อยู่ปัจจุบันของท่าน เช่น 95/1 หมู่1 ตำบลแม่กา อำเภอเมือง จังหวัดพะเยา" value={address}
                                onChange={e => setAddress(e.target.value)}></TextAreaInput>
                        </div>
                        <div className="mx-3 flex py-2">
                            <PrimaryButton className="mx-auto" label="สมัครสมาชิก" type="submit" onClick={submit}></PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}