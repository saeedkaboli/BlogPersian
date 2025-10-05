// "use client"
import Image from 'next/image'
import Link from 'next/link'
import { GrFavorite } from "react-icons/gr";
import { CiRead } from "react-icons/ci";
import sleep from '@/lib/Sleep/Sleeper';
const ComponentCard=async({data=1})=>{
    await sleep(5000)
    return(
        <div className="rounded-xl p-6 bg-white flex flex-col justify-center items-center my-5 mx-7 md:mx-2 shadow-lg">
            <div id="Img-CardPost" className="w-full h-40 overflow-hidden rounded-lg">
                <Image
      src="/Img/PostDeveloper.jpg"
      width={100}
      height={50}
      alt="Picture of the author"
      className="w-full object-contain"
    />
            </div>
            <div id="Title-CardPost" className="w-full py-4 text-center lg:text-right">
                <h1 className="font-light p-1 text-md text-gray-600">این یک متن است1</h1>
                <div className="flex justify-center lg:justify-end items-center py-2">
  <span className="py-1 px-2 text-gray-600 rounded-md bg-gray-300 mx-1" style={{"fontSize":"0.6rem"}}>#وضعیت</span>
                <span className="py-1 px-2 text-gray-600 rounded-md bg-gray-300 mx-0/5" style={{"fontSize":"0.6rem"}}>#وضعیت</span>
                </div>
                <div className=" flex flex-col justify-center items-start text-xs text-gray-400 py-1 text-center lg:text-right">
                    <small className="w-full text-center lg:text-right block">منتشر شده </small>
                    <small className="w-full text-center lg:text-right block">1401/3/2</small>
                </div>
            </div>
            <div id="Btn-CardPost" className="w-full py-1 flex justify-between items-center">
                <Link href={`/post/1`} className="w-10/12 py-2 text-center text-white text-xs md:text-sm bg-blue-300 hover:bg-blue-400 border border-blue-500 cursor-pointer rounded-lg font-bold flex justify-center items-center">مطالعه بیشتر
                <CiRead className="text-md lg:text-xl mx-1 font-bold" />
                </Link>
                <button className="w-8 h-8 lg:w-9 lg:h-9 mx-1 flex justify-center items-center  border border-red-700 bg-red-100 rounded-lg text-red-700 hover:bg-red-200 cursor-pointer"><GrFavorite className="text-xs lg:text-sm text-center" /></button>
            </div>
        </div>
    )
}
export default ComponentCard