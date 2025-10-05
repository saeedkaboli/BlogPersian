import { Vazirmatn } from 'next/font/google'
import "../styles/globals.css"
import LayoutPage from '@/Components/Layout/LayoutPage'
import NavTop from '@/Components/MenuNav/NavTop'
import NavBottom from '@/Components/MenuNav/NavBottom'
const vazir= Vazirmatn({
  subsets: ['latin'],
})
export const metadata = {
  title: 'پروژه بلاگ',
  description: 'نوشته توسط سعید کابلی',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl' className={`scroll-smooth ${vazir.className}`}>
      <body className="bg-gray-200">

     <LayoutPage>
          <NavTop/>
        {children}
        <NavBottom/>
        </LayoutPage>

        </body>
    </html>
  )
}




