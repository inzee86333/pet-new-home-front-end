import Link from 'next/link'

// const links = [
//   { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
//   { href: 'https://nextjs.org/docs', label: 'Docs' },
// ]

export default function Nav() {
  return (
    <nav class="primarycolor shadow-lg min-w-max">
      <ul className="flex items-center justify-between p-4 ">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
              Logo
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-2 border-green-800 border-opacity-75 border-transparent rounded-md shadow-sm text-base text-black bg-gray-50 hover:bg-gray-300">
            เข้าสู้ระบบ
          </a>
          <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-2 border-green-800 border-opacity-75 border-transparent rounded-md shadow-sm text-base text-black bg-gray-50 hover:bg-gray-300">
          สมัครสมาชิก 
          </a>
        </ul>
      </ul>
    </nav>
  )
}
