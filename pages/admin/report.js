import { Nav } from '../../components/navbar'
import { containerCard, containerMain } from '../../components/tailwindClass'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { reportGetAllAPI } from '../../data/apis'



export default function Report() {    
    const [report, setReport] = useState([]);
    const image_url = `http://127.0.0.1:8000`

    useEffect(() => {
        reportGetAllAPI(report => {
            setReport(report.data)
        })
    }, [reportGetAllAPI])    

    return (
        <div>
            <Nav />
            <div className={containerMain}>
                <div className="flex items-center" >
                    <div className="flex-auto">
                        <h1>รายงานทั้งหมด</h1>
                    </div>
                    <div className="flex-auto">
                        <div className="bg-white flex items-center rounded-full shadow-md h-14">
                            <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                            <div className="p-4">
                                <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-8 flex items-center justify-center">
                                    ค้นหา
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className={containerCard}>
                        <div className="flex flex-col">
                            {report.map(json => (                                
                                <Link as={`/admin/reportdetail/${json.reporter[0].report_id}`} href="/admin/reportdetail/[reportdetail]">
                                    <button className="w-full bg-white rounded-xl shadow border mb-2">
                                        <div className="flex flex-row py-3 px-4 justify-between">
                                            <div className="flex flex-row">
                                                <img src={`${image_url}${json.user_image}`} alt="" className="rounded-xl object-cover h-24 w-24 shadow border" />
                                                <div className="px-4">
                                                    <div className="flex flex-row">
                                                        <div className="flex flex-col">
                                                            <div className="grid grid-cols-2">
                                                                <p className="ptax px-1 py-1">คุณ: {json.first_name}  {json.last_name}</p>
                                                            </div>
                                                            <div className="grid grid-cols-2">
                                                                <p className="ptax px-1 py-1">ข้อความ: {json.reporter[0].message}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
