import { useState } from 'react'
import { TextInput, PasswordInput, PhoneNumberInput, EmailInput, TextAreaInput } from '../../components/input'
import { PrimaryButton } from '../../components/button'
import ImageUploading from 'react-images-uploading';

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [images, setImages] = useState([{ data_url: "/user.png" }]);
    const maxImages = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const subscribe = async (e) => {
        e.preventDefault() // prevents page reload
        console.log(username, password, confirmPassword, firstName, lastName, phoneNumber, email, address)
        console.log(images)
    }

    return (
        <div className="flex h-max my-8">
            <div className="box-content w-auto min-w-min max-w-max m-auto p-8 shadow-md ">
                <div>
                    <ImageUploading
                        value={images}
                        onChange={onChange}
                        maxNumber={maxImages}
                        dataURLKey="data_url"
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
                                        <img src={image['data_url']} alt="" className="rounded-full object-cover h-48 w-48 shadow border-2  border-green-300" />
                                        <div className="image-item__btn-wrapper flex">
                                            <button className="mx-auto uppercase px-4 py-2 my-2 rounded-full border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-md"
                                                onClick={() => onImageUpdate(index)}>เพิ่มรูปประจำตัว</button>
                                        </div>
                                    </div>
                                ))}
                                {/* {errors && <div>
                                        {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                                        {errors.acceptType && <span>Your selected file type is not allow</span>}
                                        {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                                        {errors.resolution && <span>Selected file is not match your desired resolution</span>}
                                    </div>} */}
                            </div>
                        )}

                    </ImageUploading>
                    <form>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="username" label="ชื่อผู้ใช้" placeholder="ชื่อผู้ใช้ของท่าน" value={username}
                                    onChange={e => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <PasswordInput id="password" label="รหัสผ่าน" placeholder="รหัสผ่านของท่าน" value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <PasswordInput id="confirm-password" label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่านของท่าน" value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="first-name" label="ชื่อจริง (ภาษาไทย)" placeholder="ชื่อจริงของท่าน" value={firstName}
                                    onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <TextInput id="last-name" label="นามสกุล (ภาษาไทย)" placeholder="นามสกุลของท่าน" value={lastName}
                                    onChange={e => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <PhoneNumberInput id="phone-number" label="หมายเลขโทรศัพท์" placeholder="หมายเลขโทรศัพท์ของท่าน" value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <EmailInput id="email" label="อีเมล" placeholder="อีเมลของท่าน" value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex">
                            <TextAreaInput id="address" label="ที่อยู่ปัจจุบัน" placeholder="ที่อยู่ปัจจุบันของท่าน เช่น 95/1 หมู่1 ตำบลแม่กา อำเภอเมือง จังหวัดพะเยา" value={address}
                                onChange={e => setAddress(e.target.value)}></TextAreaInput>
                        </div>
                        <div className="-mx-3 flex py-2">
                            <PrimaryButton label="สมัครสมาชิก" type="submit" onClick={subscribe}></PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}