"use client"
import { Vazirmatn } from 'next/font/google'
import "../styles/globals.css"
import LayoutPage from '@/Components/Layout/LayoutPage'
import NavTop from '@/Components/MenuNav/NavTop'
import NavBottom from '@/Components/MenuNav/NavBottom'
import {useState} from 'react'
const vazir= Vazirmatn({
  subsets: ['latin'],
})
// export const metadata = {
//   title: 'پروژه بلاگ',
//   description: 'نوشته توسط سعید کابلی',
// }

export default function RootLayout({ children }) {
  const [darkMode,setDarkMode]=useState(false);

  const handlerChangeMode=(data)=>{
    if(data=="Light"){
      setDarkMode(false);
    }else if(data=="Dark"){
  setDarkMode(true);
  }
}
   
  return (
    <html lang="fa" dir='rtl' className={darkMode?`dark scroll-smooth ${vazir.className}`:`scroll-smooth ${vazir.className}`}>
      <body className="bg-gray-200 dark:bg-gray-800">

     <LayoutPage>
          <NavTop Ondata={handlerChangeMode}/>
        {children}
        <NavBottom/>
        </LayoutPage>

        </body>
    </html>
  )
}




