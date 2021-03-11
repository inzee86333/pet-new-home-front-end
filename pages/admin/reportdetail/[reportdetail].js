import { Nav } from '../../../components/navbar'
import { containerCard, containerMain } from '../../../components/tailwindClass'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { reportGetDetailAPI } from '../../../data/apis'


export default function ReportDetail() {
    const router = useRouter();
    const {reportdetail} = router.query
    const reportID = reportdetail

    const [report, setReport] = useState([]);
    const image_url = `http://127.0.0.1:8000`

    useEffect(()=>{
        reportGetDetailAPI(reportID, (res)=>{setReport(res)})
        console.log(report)
    }, [reportGetDetailAPI])    
    
    return (
        <div>
            <Nav />
            <div className={containerMain}>
                <div class="items-center grid grid-cols-6" >
                    <div class="col-start-1 col-end-3">
                        <h1>รายงาน</h1>
                    </div>
                    <div class="col-end-7 col-span-2">
                        <h2>
                            ผู้รายงาน: {reportID}

                        </h2>
                    </div>
                </div>
                <div class='mt-4'>
                    <div className={containerCard}>
                        <div className="flex flex-col">
                            {/* {report.map(json => ( */}
                            {/* // <Link as={`/admin/reportdetail/${json.user_id}`} href="/admin/reportdetail/[reportdetail]"> */}
                            <div className="w-full bg-white rounded-xl shadow border mb-2">
                                <div className="flex flex-row py-3 px-4 justify-between">
                                    <div className="flex flex-row">
                                        <img alt="" className="rounded-xl object-cover h-24 w-24 shadow border" />
                                        <div className="px-4">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col">
                                                    <div className="grid grid-cols-2">
                                                        <p className="ptax px-1 py-1 font-bold">รายละผู้ขอรับเลี้ยง</p>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <p className="ptax px-1 py-1">คุณ: </p>
                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <p className="ptax px-1 py-1">เบอร์โทร: </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // </Link> */}
                            {/* ))} */}
                        </div>
                        <div className="flex flex-col">
                            {/* {report.map(json => ( */}
                            {/* // <Link as={`/admin/reportdetail/${json.user_id}`} href="/admin/reportdetail/[reportdetail]"> */}
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
                                                        <p className="ptax px-1 py-1">เพศ: </p>
                                                        <p className="ptax px-1 py-1">อายุ: </p>
                                                        <p className="ptax px-1 py-1 ">ประเภท: </p>

                                                    </div>
                                                    <div className="grid grid-cols-2">
                                                        <p className="ptax px-1 py-1">นิสัย: </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // </Link> */}
                            {/* ))} */}
                        </div>
                        <div className="border px-3 rounded-md shadow-sm mb-1">
                            <div className="flex flex-col">
                                {/* {report.map(json => ( */}
                                {/* // <Link as={`/admin/reportdetail/${json.user_id}`} href="/admin/reportdetail/[reportdetail]"> */}
                                    <div className="flex flex-row px-4 justify-between">
                                        <div className="flex flex-row w-full">
                                            <div className="px-4">
                                                <div className="flex flex-row ">
                                                    <div className="flex flex-col">
                                                        <div className="grid grid-cols-2">
                                                            <p className="ptax px-1 py-1 font-bold ">รายงานถึงผู้ดูแลระบบ</p>
                                                        </div>
                                                        <div className="grid grid-cols-1">
                                                            <p className="ptax px-1 pb-4">ข้อความ: </p>                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                {/* // </Link> */}
                                {/* ))} */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
}