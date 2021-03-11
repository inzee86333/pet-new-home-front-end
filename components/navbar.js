import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TextMenuButton } from '../components/button'
import { urlSelectUserType, urlListPetFinder, urlListPetOwner, urlEditUser, urlLogin } from '../pages/urls'
import { userGetDetailAPI, checkTypeUserAPI } from '../data/apis'
import { isLogin } from '../functions/validations'
import cookie from 'js-cookie'

export function Nav() {
  const router = useRouter()
  const [linkHome, setLinkHome] = useState(urlLogin);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [images, setImages] = useState([{ data_url: "/user.png" }]);

  const logout = async (e) => {
    cookie.remove('token')
    router.replace(urlLogin)
    alert("Logout")
  }

  if (cookie.get('token') !== undefined) {
    useEffect(() => {
      userGetDetailAPI((data) => {
        setData(data)
      })
      checkTypeUserAPI((t) => {
        if (t.data['user_type'] === 'ow') {
          setLinkHome(urlListPetOwner)
        } else if (t.data['user_type'] === 'fi') {
          setLinkHome(urlListPetFinder)
        } else if (t.data['user_type'] === null) {
          setLinkHome(urlSelectUserType)
        }
      })
    }, [userGetDetailAPI])
  }

  const setData = (data) => {
    if (data['user_image'] != null) {
      setImages([{ data_url: `http://127.0.0.1:8000${data['user_image']}` }])
    }
    setFirstName(data['first_name'])
    setLastName(data['last_name'])
  }


  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-500 p-2 px-14">
      <a href={linkHome}>
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span style={{ fontSize: 24 }} className="font-semibold text-xl tracking-tight">Findpet</span>
        </div>
      </a>
      <div className="flex">
        <TextMenuButton className="px-2" label="รายการสัตว์เลี้ยงหาบ้าน" href={urlListPetOwner} />
        <TextMenuButton className="px-2" label="ข้อความ" />
      </div>
      <div className="w-max flex items-center">
        {isLogin && 
        <div className="dropdown inline-block relative">
          <button className="bg-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <img src={images[0]['data_url']} alt="" className="rounded-full object-cover h-8 w-8 shadow border mr-2" />
            <span className="mr-1">{firstName} {lastName}</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href={`${urlEditUser}`}>เกี่ยวกับสมาชิก</a></li>
            <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={logout}>ออกจากระบบ</a></li>
          </ul>
        </div>}
        {!isLogin && 
        <div>
            <div className="dropdown inline-block relative">
              <a className="bg-white font-semibold py-2 px-4 rounded inline-flex items-center" href="/">
                <span className="mr-1">เข้าสู้ระบบ</span>
              </a>
            </div>
          </div>}
      </div>
    </nav>
  )
}