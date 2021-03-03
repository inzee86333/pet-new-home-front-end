import { contrinerCard, contrinerMain } from '../../../components/tailwindClass'
import { PrimaryButton, CardInfoPetFinderButton ,CardInfoPetOwnerButton} from '../../../components/button'
import { animalOwner } from '../../../data/direct'
import { Nav } from '../../../components/navbar'


import { useState, useEffect } from 'react'
import { Zoom } from 'react-slideshow-image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function pet_finder_detail() {
    //part http://localhost:3000/authenticated/finder/pet_finder_detail
    const [province, setProvince] = useState('พะเยา')
    const [district, setDistrict] = useState('แม่กา')
    const [category, setCategory] = useState('แมว')
    const [species, setSpecies] = useState('กาฟิว')
    const [sex, setSex] = useState('เมีย')
    const [age, setAge] = useState('10 ปี')
    const [congenitalDisease, setCongenitalDisease] = useState('แพ้ขนแมว')
    const [habit, setHabit] = useState('ขี้เล่น','ขี้กลัว')
    // const slideImages = {animalOwner.map(json => (
    //     <CardInfoPetFinderButton 
    //         photo={json.photoPet}
    //     />
    // ))};
      
    const Slideshow = () => {
        return (
            <div className="slide-container">
                <Slide>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    <span>Slide 1</span>
                    </div>
                </div>
                </Slide>
            </div>
        )
    }
    return(
        <div>
            <Nav / >
            <div className={contrinerMain}>
                <div className="flex justify-between">
                    <div className="flex">
                        <h1 className="p-1 pr-4">รายละเอียดสัตว์เลี้ยง</h1>
                        <h1 className="p-1 pr-4  font-semibold text-gray-500">จังหวัด : {province}</h1>
                        <h1 className="p-1 pr-4  font-semibold text-gray-500">อำเภอ : {district}</h1>
                    </div>
                </div>
                <div className={contrinerCard}>
                    {Slideshow}
                </div>
                <div className={contrinerCard}>
                    <div className="grid md:grid-cols-1 grid-cols-3"> 
                        <h1 className="p-1 pr-4">ข้อมูลสัตว์เลี้ยง</h1>
                        <h3 className="p-5 pr-4">ประเภท : {category}</h3>
                        <h3 className="p-5 pr-4">สายพันธุ์ : {species} </h3>
                        <h3 className="p-5 pr-4">เพศ : {sex}</h3>
                        <h3 className="p-5 pr-4">อายุ : {age}</h3>
                        <h3 className="p-5 pr-4">โรคประจำตัว : {congenitalDisease}</h3>
                        <h3 className="p-5 pr-4">นิสัย : {habit}</h3>
                    </div>
                    <div className="mx-3 flex py-2">
                        <PrimaryButton className="mx-auto" label="ส่งข้อความหาเจ้าของ"/>
                    </div>
                </div>
            </div>
        </div>
    )
}