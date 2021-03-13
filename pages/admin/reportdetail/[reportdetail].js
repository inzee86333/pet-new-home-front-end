import { Nav } from '../../../components/navbar'
import { containerCard, containerMain } from '../../../components/tailwindClass'
import { useEffect, useState } from 'react'
import { reportGetDetailAPI } from '../../../data/apis'


export default function ReportDetail({ reportdetail }) {

    const [report, setReport] = useState(['']);

    const image_url = `http://127.0.0.1:8000`

    useEffect(() => {
        reportGetDetailAPI(reportdetail, report => {
            setReport(report.data)            
        })
    }, [reportGetDetailAPI])
    if(report!= ''){
        console.log(report)
        return (
            <div>                
                <Nav />
                <div className={containerMain}>
                    <div className="items-center grid grid-cols-6" >
                        <div className="col-start-1 col-end-3">
                            <h1>รายงาน</h1>
                        </div>
                        <div className="col-end-7 col-span-2">
                            <h2>
                                ผู้รายงาน: {report['reporterDetail']['first_name']} {report['reporterDetail']['last_name']} 
    
                            </h2>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className={containerCard}>
                            <div className="flex flex-col">
                                <div className="w-full bg-white rounded-xl shadow border mb-2">
                                    <div className="flex flex-row py-3 px-4 justify-between">
                                        <div className="flex flex-row">
                                            <img src={`${image_url}${report['reportToDetail']['user_image']}`} className="rounded-xl object-cover h-24 w-24 shadow border" />
                                            <div className="px-4">
                                                <div className="flex flex-row">
                                                    <div className="flex flex-col">
                                                        <div className="grid grid-cols-2">
                                                            <p className="ptax px-1 py-1 font-bold">รายละผู้ขอรับเลี้ยง</p>
                                                        </div>
                                                        <div className="grid grid-cols-2">
                                                            <p className="ptax px-1 py-1">คุณ: {report['reportToDetail']['first_name']} {report['reportToDetail']['last_name']} </p>
                                                        </div>
                                                        <div className="grid grid-cols-2">
                                                            <p className="ptax px-1 py-1">เบอร์โทร: {report['reportToDetail']['phone_number']}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="w-full bg-white rounded-xl shadow border mb-2">
                                    <div className="flex flex-row py-3 px-4 justify-between">
                                        <div className="flex flex-row w-full">
                                            <img alt="" className="rounded-xl object-cover h-24 w-24 shadow border" />
                                            <div className="px-4">
                                                <div className="flex flex-row ">
                                                    <div className="flex flex-col">
                                                        <div className="grid grid-cols-2">
                                                            <p className="ptax px-1 py-1 font-bold ">ข้อมูลสัตว์เลี้ยง</p>
                                                        </div>
                                                        <div className="grid grid-cols-3">
                                                            <p className="ptax px-1 py-1">เพศ: {report['reportPetDetail']['sex']}</p>
                                                            <p className="ptax px-1 py-1">อายุ: {report['reportPetDetail']['birth_year']}</p>
                                                            <p className="ptax px-1 py-1 ">ประเภท: {report['reportPetDetail']['animal_type']}</p>
    
                                                        </div>
                                                        <div className="grid grid-cols-2">
                                                            <p className="ptax px-1 py-1">โรคประจำตัว: {report['reportPetDetail']['disease']}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border px-3 rounded-md shadow-sm mb-1">
                                <div className="flex flex-col">
                                    <div className="flex flex-row px-4 justify-between">
                                        <div className="flex flex-row w-full">
                                            <div className="px-4">
                                                <div className="flex flex-row ">
                                                    <div className="flex flex-col">
                                                        <div className="grid grid-cols-2">
                                                            <p className="ptax px-1 py-1 font-bold ">รายงานถึงผู้ดูแลระบบ</p>
                                                        </div>
                                                        <div className="grid grid-cols-1">
                                                            <p className="ptax px-1 pb-4">ข้อความ: {report['reportDetail']['message']} </p>    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }else{
        return(
            <div>
                fuck off
            </div>
        )
    }    
}

ReportDetail.getInitialProps = (appContext) => {
    return { reportdetail: appContext.query.reportdetail }
}