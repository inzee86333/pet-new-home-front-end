import { useState, useEffect } from 'react'
import { petImagesGetAPI } from '../data/apis'
import { provinceList, amphoeList, birthYearList } from '../data/direct'

export function PrimaryButton({ label, onClick, type, className }) {
    return (
        <button className={`px-4 py-2 my-1 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ${className}`}
            type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export function NegativePrimaryButton({ label, onClick, type, className }) {
    return (
        <button className={`px-4 py-2 my-1 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 ${className}`}
            type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export function SecondaryButton({ label, onClick, type, className }) {
    return (
        <button className={`px-4 py-2 my-1 rounded-full border border-green-600 text-green-600 max-w-max shadow-sm hover:bg-green-600 hover:text-white ${className}`}
            type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export function TextButton({ label, href, type, className }) {
    return (
        <a className={`text-green-500 font-bold hover:text-green-800 ${className}`} href={href} type={type}>{label}</a>
    );
}

export function TextMenuButton({ label, href, type, className }) {
    return (
        <a style={{ fontSize: 18 }} className={`text-white font-black hover:text-gray-200 ${className}`} href={href} type={type}>{label}</a>
    );
}

export function CardInfoPetOwnerButton({ id, type, age, species, sex, href }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        petImagesGetAPI(id, t => {
            setImages(t.data)
        })
    }, [petImagesGetAPI])

    return (
        <a className="w-full bg-white rounded-xl shadow border mb-2" href={href}>
            <div className="flex flex-row py-3 px-4 justify-between">
                <div className="flex flex-row">
                    {images[0] !== undefined && <img src={images[0]['pet_image']} alt="" className="rounded-xl object-cover h-24 w-24 shadow border" />}
                    {images[0] === undefined && <img src={'/pet_image_default.png'} alt="" className="rounded-xl object-cover h-24 w-24 shadow border" />}
                    <div className="px-4">
                        <div className="flex flex-row">
                            <div className="grid grid-cols-2">
                                <h5 className="htax px-1 py-1 font-semibold">ลำดับ</h5>
                                <h5 className="htax px-1 py-1">{id}</h5>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <div className="grid grid-cols-2">
                                    <p className="ptax px-1 py-1 font-semibold">ประเภท</p>
                                    <p className="ptax px-1 py-1">{type}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="ptax px-1 py-1 font-semibold">อายุ</p>
                                    <p className="ptax px-1 py-1">{age}</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="grid grid-cols-2">
                                    <p className="ptax px-1 py-1 font-semibold">สายพันธุ์</p>
                                    <p className="ptax px-1 py-1">{species}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="ptax px-1 py-1 font-semibold">เพศ</p>
                                    <p className="ptax px-1 py-1">{sex}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <h5 className="ptax py-1 font-semibold text-green-500 font-bold">test คนกำลังสนใจ</h5>
                    <h5 className="ptax py-1 font-semibold text-green-500 font-bold">test ข้อความ</h5>
                    <div>&nbsp;</div>
                </div>
            </div>
        </a>
    );
}

export function CardInfoPetFinderButton({ id, type, species, province, district }) {
    const [images, setImages] = useState([]);
    const [districtDetail, setDistrictDetail] = useState(districtList.find(y => y['district_code'] == district));

    useEffect(() => {
        petImagesGetAPI(id, t => {
            setImages(t.data)
        })
    }, [petImagesGetAPI])
    console.log(districtDetail)
    return (
        <button className="w-max bg-white rounded-xl shadow border p-2 m-1">
            <div className="flex flex-col mx-auto w-max">
                {images[0] !== undefined && <img src={images[0]['pet_image']} alt="" className="rounded-xl object-cover h-40 w-40 shadow border" />}
                {images[0] === undefined && <img src={'/pet_image_default.png'} alt="" className="rounded-xl object-cover h-40 w-40 shadow border" />}
                <div>
                    <p className="ptax px-1 font-semibold">ลำดับ {id}</p>
                    <p className="ptax px-1 font-semibold">:{type}</p>
                    <p className="ptax px-1 font-semibold">:{species}</p>
                    {/* <p className="ptax px-1 font-semibold text-green-500 font-bold">{districtDetail['province']} {districtDetail['amphoe']}</p> */}
                </div>
            </div>
        </button>
    );
}

// export function CardInfoReportButton({photo_userowner, OwnerFirstName, OwnerLastName, message}) {
//     return (
//         <button className="w-full bg-white rounded-xl shadow border mb-2">
//             <div className="flex flex-row py-3 px-4 justify-between">
//                 <div className="flex flex-row">
//                     <img src={photo_userowner} alt="" className="rounded-xl object-cover h-24 w-24 shadow border" />
//                     <div className="px-4">                        
//                         <div className="flex flex-row">
//                             <div className="flex flex-col">
//                                 <div className="grid grid-cols-2">
//                                     <p className="ptax px-1 py-1">คุณ: {OwnerFirstName} {OwnerLastName}</p>
//                                 </div>
//                                 <div className="grid grid-cols-2">
//                                     <p className="ptax px-1 py-1">{message}</p>
//                                 </div>                                
//                             </div>                                                       
//                         </div>
//                     </div>
//                 </div>                
//             </div>
//         </button>
//     )
// }