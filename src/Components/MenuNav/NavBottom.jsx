"use client"
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
export default function NavBottom() {

   const LinkItem=[
      {name:"خانه",path:"/",icon:<GoHome className="text-bold text-md lg:text-lg my-1"  />},
        {name:"پست",path:"/post",icon:<BsFileEarmarkPost className="text-bold text-md lg:text-lg my-1" />},
      {name:"اضافه",path:"/addpost",icon: <IoAdd className="text-bold text-md lg:text-lg my-1" />},
      {name:"علاقه",path:"/favorit",icon:<GrFavorite className="text-bold text-md lg:text-lg my-1" />},
      {name:"پروفایل",path:"/login",icon:<FaRegUser className="text-bold text-md lg:text-lg my-1" />}
   ]
  return (
    <div className="w-full  lg:py-5  fixed bottom-0 right-0">
     <ul className="lg:w-5/12 bg-white mx-auto py-2 flex justify-around items-center text-gray-500 bg-transport rounded-lg shadow-xl">
   
   {LinkItem.map((items,index)=><ButtonNavLink key={index} dataPath={items.path} dataIcon={items.icon} dataName={items.name}/>)}
     </ul>
    </div>
  );
}


const ButtonNavLink=({dataIcon,dataName,dataPath})=>{
    const pathname = usePathname();
    // console.log(pathname.startsWith);
    const pathnameNew=pathname.split("/")[1];
    const dataPathNew=dataPath.split("/")[1];
  
   return(
       <li className={pathnameNew==dataPathNew ? "flex flex-col justify-center items-center bg-blue-400 text-white rounded-lg py-1 px-4 cursor-pointer":"flex flex-col justify-center items-center bg-gray-100 rounded-lg py-1 px-4  cursor-pointer"} >
         <Link href={dataPath} className="inline-flex flex-col justify-center items-center">
        {dataIcon}
        <small className="text-xs lg:text-md">{dataName}</small>
         </Link>
     </li>
   )
}