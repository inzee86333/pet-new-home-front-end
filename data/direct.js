export const provinceList = [
    { value: 'p01', label: 'นครราชสีมา' },
    { value: 'p02', label: 'เชียงใหม่' },
    { value: 'p03', label: 'กาญจนบุรี' },
];

export const animalTypeList = [
    { value: 'dog', label: 'หมา' },
    { value: 'cat', label: 'แมว' },
];

export const birthYearList = [
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
];

export const speciesList = [
    { value: 'dog', label: 'หมา' },
    { value: 'cat', label: 'แมว' },
]

export const animalSexList = [
    { value: 'f', label: 'เมีย' },
    { value: 'm', label: 'ผู้' },
    { value: 'n', label: 'อื่นๆ' },
];

const photoCat = [
    "/1.jpg",
    "/2.jpg",
    "/3.jfif",
    "/4.jpg",
    "/5.jfif",
    "/6.jfif",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
]

export const animalOwner = [
    { photoPet: photoCat[0], id: '0001', type: 'แมว', age: '2', species: 'เปอร์เซีย', sex: 'ผู้', interested: Math.floor((Math.random() * 1500) + 1), message: Math.floor((Math.random() * 100) + 1), province: "พะเยา", district: "เมือง"},
    { photoPet: photoCat[2], id: '0020', type: 'แมว', age: '4', species: 'ไม่ระบุ', sex: 'เมีย', interested: Math.floor((Math.random() * 1500) + 1), message : Math.floor((Math.random() * 100) + 1), province: "เชียงใหม่", district: "แม่ริม"},
    { photoPet: photoCat[3], id: '0025', type: 'แมว', age: '3', species: 'ไม่ระบุ', sex: 'ผู้', interested: Math.floor((Math.random() * 1500) + 1), message : Math.floor((Math.random() * 100) + 1), province: "เชียงใหม่", district: "แม่ริม"},
    { photoPet: photoCat[4], id: '0030', type: 'แมว', age: '9', species: 'ไม่ระบุ', sex: 'เมีย', interested: Math.floor((Math.random() * 1500) + 1), message : Math.floor((Math.random() * 100) + 1), province: "เชียงใหม่", district: "แม่ริม"},
    { photoPet: photoCat[5], id: '0032', type: 'แมว', age: '5', species: 'ไม่ระบุ', sex: 'ผู้', interested: Math.floor((Math.random() * 1500) + 1), message : Math.floor((Math.random() * 100) + 1), province: "เชียงใหม่", district: "แม่ริม"},
    { photoPet: photoCat[6], id: '0046', type: 'แมว', age: '5', species: 'ไม่ระบุ', sex: 'ผู้', interested: Math.floor((Math.random() * 1500) + 1), message: Math.floor((Math.random() * 100) + 1), province: "เชียงใหม่", district: "แม่ริม" },
    { photoPet: photoCat[7], id: '0047', type: 'แมว', age: '5', species: 'ไม่ระบุ', sex: 'ผู้', interested: Math.floor((Math.random() * 1500) + 1), message: Math.floor((Math.random() * 100) + 1), province: "เชียงใหม่", district: "แม่ริม" },
];

export const reportUser = [
    {reportID:'001', photo_userowner: photoCat[1], photo_newowner: photoCat[2], pet_id:'003', idOwner: '001', idNewOwner: '005', OwnerFirstName: 'พรชัย ', OwnerLastName:'มหาโชค', NewOwnerFirstName: 'ครีอานู', NewOwnerLastName: 'ลีฟ', message: 'คนรับเลี้ยงเอาสัตว์ไปขาย'},
    {reportID:'002', photo_userowner: photoCat[3], photo_newowner: photoCat[4], pet_id:'005', idOwner: '008', idNewOwner: '004', OwnerFirstName: 'พรโชค', OwnerLastName:'มหาชัย', NewOwnerFirstName: 'ครีอีฟ', NewOwnerLastName: 'นูลา', message: 'คนรับเลี้ยงเอาสัตว์ไปขาย แล้วก็เอาไปกิน'},
]