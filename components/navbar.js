import Link from 'next/link'
import { TextMenuButton } from '../components/button'
import { urlListPetOwner, urlEditUser } from '../pages/urls'
import { checkIdUserAPI } from '../data/apis'
import cookie from 'js-cookie'

export function Nav() {

  const logout = async (e) => {
    cookie.remove('token')
    alert("Logout")
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-500 p-2 px-14">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span style={{ fontSize: 24 }} className="font-semibold text-xl tracking-tight">Findpet</span>
      </div>
      <div className="flex">
        <TextMenuButton className="px-2" label="รายการสัตว์เลี้ยงหาบ้าน" href={urlListPetOwner}/>
        <TextMenuButton className="px-2" label="ข้อความ" />
      </div>
      <div className="w-max flex items-center">
        <div>
          <div className="dropdown inline-block relative">
            <button className="bg-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <img src={"/usertest.jpg"} alt="" className="rounded-full object-cover h-8 w-8 shadow border mr-2" />
              <span className="mr-1">Supamit Padtip</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href={`${urlEditUser}`}>เกี่ยวกับสมาชิก</a></li>
              <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={logout}>ออกจากระบบ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
