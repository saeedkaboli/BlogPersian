"use client"
import { MdOutlineLightMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";
import useScrollPosition from "@/hooks/HookScroll/Scroll";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

import Image from 'next/image'
import Link from 'next/link'
import "../../styles/Costum.css"
import { useState } from 'react'
import { Beiruti } from 'next/font/google'
const bri= Beiruti({
  subsets: ['latin'],
})

export default function NavTop() {
  const scrollPosition = useScrollPosition();
  return (
    <>
    <div className={scrollPosition>0 ? `z-40 shadow-xl bg-blue-100 transition delay-10 duration-100 ease-in-out sticky top-0 w-full lg:w-11/12  mx-auto p-2 lg:py-5 flex justify-between items-center  text-gray-500 rounded-xl`:`transition delay-50 duration-200 ease-in-out sticky top-0 lg:w-11/12  mx-auto px-2 flex justify-between items-center bg-blue-100 rounded-xl my-4 py-4 shadow-lg  text-gray-500`}>
    <div className="w-1/2 h-full  flex justify-start items-center" id="NavTop-Left">
      <NavTopLogo/>
      </div>
    <div className="w-1/2 h-full  flex justify-end items-center" id="NavTop-Right">
     <NavTopSearch/>
      <NavTopMode/>
      <NavTopSetting/>
      </div>
      
     
    </div>
    </>
  )
}



const NavTopMode=()=>{
    return(
  <span className="flex justify-center items-center" id="NavTop-Mode">
     <Menu>
        <MenuButton className="rounded-md p-1">
          < MdOutlineLightMode className="text-3xl cursor-pointer  transition-all bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-lg " />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="w-40 origin-top-left rounded-lg  bg-white p-1 my-4 text-sm/6 text-gray-600 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 z-50"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5  hover:bg-gray-50 cursor-pointer">
              <MdOutlineLightMode className="size-4 text-gray-600" />
             روشن
           
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5  hover:bg-gray-50 cursor-pointer">
            <CiDark className="size-4 text-gray-600" />
        تیره
         
            </button>
          </MenuItem>

         
        </MenuItems>
      </Menu>
     
 
  </span>
    )
}
const NavTopSearch=()=>{
    return(
        <div className="w-7/12  hidden lg:flex " id="NavTop-Search">
          <div className="w-full bg-gray-100 flex p-1 rounded-lg  overflow-hidden mx-auto border border-blue-300" dir="rtl">
        <input type='search' placeholder='جستجو کنید ...' className="w-full outline-none bg-gray-100 text-[0.6rem] " />
        <button type='button'
          className="bg-blue-400 hover:bg-blue-500 transition-all text-white  p-2  cursor-pointer text-xs lg:text-sm rounded-lg">
            <RiSearch2Line />
          </button>
      </div>
        </div>
    )
}
const NavTopSetting=()=>{
   const [open, setOpen] = useState(false)
    return(
 <>
        <div className="flex justify-center items-center" id="NavTop-Setting" >
            <IoSettingsOutline className="text-3xl cursor-pointer  transition-all bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-lg"  onClick={() => setOpen(true)} />
</div>
{/* --------------------------------------------------------------------- */}
  <Dialog open={open} onClose={setOpen} className="relative z-50 p-2">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                  <FaWindowClose aria-hidden="true" className="size-9 text-white  cursor-pointer hover:text-blue-400 transition-all cursor-pointer" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="relative flex h-full flex-col overflow-y-auto  bg-gray-800 py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                  <div className="px-4 sm:px-6">
                    <div id="Logo-SideBar" className="py-5 lg:border-b-1 lg:border-white">
                       <span className={`text-white px-2 font-google text-3xl lg:text-4xl ${bri.className}`}>پرشین بلاگ</span>
                    </div>
                    <div id="Search-SideBar" className="border-b-1 border-white py-4 mb-5 flex lg:hidden">
                          <div className="w-full bg-gray-100 flex p-1 rounded-lg  overflow-hidden mx-auto border border-blue-300" dir="rtl">
        <input type='search' placeholder='جستجو کنید ...' className="w-full outline-none bg-gray-100 text-[0.6rem] " />
        <button type='button'
          className="bg-blue-400 hover:bg-blue-500 transition-all text-white  p-2  cursor-pointer text-xs lg:text-sm rounded-lg">
            <RiSearch2Line />
          </button>
      </div>
                    </div>
                    <div id="News-SideBar" className="my-2 py-4">
                      <h1 className="text-sm font-light py-2 px-4 bg-blue-500 text-white inline-block rounded-lg">خبر ها</h1>
                      <ul className="py-10" dir="rtl">
                             <Disclosure as="div" className="p-6 bg-gray-900 rounded-lg my-2" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between ">
            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
             برنامه نویسی
            </span>
            <MdKeyboardArrowUp className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            خبر 1
          </DisclosurePanel>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
           خبر 2
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6 bg-gray-900 rounded-lg my-2">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
              نرم افزار
            </span>
            <MdKeyboardArrowUp className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
        </Disclosure>
          <Disclosure as="div" className="p-6 bg-gray-900 rounded-lg my-2">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
              عمومی
            </span>
            <MdKeyboardArrowUp className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
        </Disclosure>
          <Disclosure as="div" className="p-6 bg-gray-900 rounded-lg my-2">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
              اقتصادی
            </span>
            <MdKeyboardArrowUp className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
        </Disclosure>
                      </ul>
                    </div>
                    <div id="BtnSigup-SideBar" className="border-t-1 border-white py-5 flex justify-center items-center">
                      <Link className="w-full rounded-lg mx-auto py-3 bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center text-sm font-bold" href="/login">ورود | ثبت نام</Link>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
{/* -------------------------------------------------------------------------- */}
 
 </>
      
 
    )
}
const NavTopLogo=()=>{
  return(
    <div className="flex justify-start items-center py-2 lg:py-0.5" id="NavTop-Logo">
       <Image
      src="/Img/PersianBlogLogo.png"
      width={500}
      height={500}
      alt="Picture of the author"
      className="w-1/3 lg:w-1/4"
    />
    </div>
  )
}


