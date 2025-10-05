"use client"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { RiUserSmileFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import {useState} from 'react'

const PanelTabs=()=>{
       const [ActiveBtn,setActiveBtn]=useState("user");
    const PanelTab=[
        {icon:<FaUserGear className="text-md mx-1" />,title:"اطلاعات شخصی",id:"user"},
        {icon: <MdOutlineLocalPostOffice className="text-md mx-1" />,title:"پست ها",id:"post"},
        {icon:<RiUserSmileFill className="text-md mx-1" />,title:"درباره علاقه من",id:"like"},

    ]
 
    const handlerActiveLink=(name)=>{
  setActiveBtn(name)
    }
     return (
    <TabGroup className="lg:flex block my-10 w-full h-auto relative">
      <TabList className="z-50 flex flex-row lg:flex-col justify-around lg:w-3/12 lg:h-[300px] rounded-xl bg-white py-5 px-2 text-xs lg:text-sm text-white sticky top-15 lg:top-30 right-0 shadow-lg">
      {PanelTab.map((data)=> <Tab key={data.id} className={ActiveBtn===data.id ?"lg:my-4  p-3 rounded-lg bg-red-500 flex justify-center items-center cursor-pointer" :"lg:my-4  p-3 rounded-lg bg-blue-500 flex justify-center items-center cursor-pointer"} onClick={()=>handlerActiveLink(data.id)}>
           {data.icon}
            <small className="text-md">{data.title}</small>
            </Tab>)}
       
        
      </TabList>
      <TabPanels className="flex lg:w-8/12 bg-white h-auto rounded-xl py-5 mx-auto overflow-y-scroll my-16 lg:my-0">
        <TabPanel id="TabPanel-Profile" className="w-full relative">
          <div id="Edit-Profile" className="w-full py-2 absolute">
            <button className="p-2 text-xl rounded-md bg-blue-400 hover:bg-blue-500 cursor-pointer text-white mx-2">
             <MdModeEditOutline className="text-white" />
            </button>
          </div>
       <div id="Profile-TabPanel" className="w-full py-5 flex flex-col justify-center items-center">
        <div id="Img" className="w-[85px] h-[85px] rounded-lg bg-gray-200 my-1 flex justify-center items-center"><FaUserEdit className="text-3xl text-gray-400" /></div>
        <button id="Chooes-Img" className="p-2 text-xs bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-lg text-white my-1">انتخاب عکس</button>
       </div>
       <div id="Form-TabPanel" className="p-5 ">
        <h1>اطلاعات شخصی</h1>
        <form method="#" className="py-5 mx-auto flex justify-around items-center flex-wrap">
          <div id="Input-Name" className="flex flex-col w-full lg:w-1/2 p-1">
           <label htmlFor="name" className="text-sm py-2">نام</label>
          <input type="text" id="name" className="w-full rounded-lg bg-gray-100 text-xs py-3 px-2 focus:outline-none" placeholder="ناصر"/>
          </div>
           <div id="Input-FamilyName" className="flex flex-col w-full lg:w-1/2 p-1">
           <label htmlFor="family" className="text-sm py-2">نام خانوادگی</label>
          <input type="text"  id="family" className="w-full rounded-lg bg-gray-100 text-xs py-3 px-2 focus:outline-none" placeholder="محمدی"/>
          </div>
        <div id="Input-FamilyName" className="flex flex-col w-full lg:w-1/2 p-1">
           <label htmlFor="password" className="text-sm py-2">رمز عبور</label>
          <input type="password" id="password" className="w-full rounded-lg bg-gray-100 text-xs py-3 px-2 focus:outline-none" placeholder="123456"/>
          </div>
          <div id="Input-FamilyName" className="flex flex-col w-full lg:w-1/2 p-1">
           <label htmlFor="email" className="text-sm py-2">ایمیل</label>
          
          <input type="email" id="email" className="w-full rounded-lg bg-gray-100 text-xs py-3 px-2 focus:outline-none" placeholder="naser@gmail.com"/>
        
          </div>
          <div id="Input-FamilyName" className="flex flex-col w-full lg:w-1/2 p-1">
           <label htmlFor="number" className="text-sm py-2">شماره تماس</label>
          
          <input type="tel" id="number" dir="rtl" className="w-full rounded-lg bg-gray-100 text-xs py-3 px-2 focus:outline-none" placeholder="0912457890"/>
        
          </div>
            <div id="Input-FamilyName" className="flex flex-col w-full lg:w-1/2 p-1">
           <label htmlFor="gender" className="text-sm py-2">جنسیت</label>
        <select id="gender" className="w-full rounded-lg bg-gray-100 text-xs p-3 focus:outline-none" >
  <option value="men">آقا</option>
  <option value="women">خانم</option>
</select>
          </div>
          <button className="w-full lg:w-1/2 py-3 rounded-lg bg-blue-400 hover:bg-blue-500  text-white mt-14  lg:mt-20 shadow-lg font-bold cursor-pointer">ثبت اطلاعات</button>
        </form>
       </div>

        </TabPanel>
        <TabPanel id="TabPanel-Posts" className="w-full lg:w-11/12 mx-auto flex flex-col justify-around items-center">
        <h1 className="font-bold text-xl text-black text-right w-full py-5">وضعیت پست های من</h1>
<div className="relative w-full overflow-x-auto shadow-md rounded-lg my-10" dir="rtl">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
              نام مقاله
            </th>
            <th scope="col" className="px-6 py-3">
              شماره
            </th>
                <th scope="col" className="px-6 py-3">
                دسته بندی
                </th>
                <th scope="col" className="px-6 py-3">
                    وضعیت
                </th>
                <th scope="col" className="px-6 py-3">
                  زباله
                </th>
            </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   مقاله دوم
                </th>
                <td className="px-6 py-4">
                   2
                </td>
                <td className="px-6 py-4">
                 تکنولوژِی
                </td>
                <td className="px-6 py-4">
                     <button className="py-1 px-2 rounded-lg bg-green-500 text-white text-xs">
                    انتشار
                  </button>
                    
                </td>
                <td className="px-6 py-4">
                     <RiDeleteBin6Line className="font-medium text-lg text-red-400  hover:text-red-600 cursor-pointer" />
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    مقاله اولی
                </th>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    برنامه نویسی
                </td>
                <td className="px-6 py-4">
                  <button className="py-1 px-2 rounded-lg bg-yellow-500 text-white text-xs">
                     در انتظار
                  </button>
                  
                </td>
                <td className="px-6 py-4">
                    <RiDeleteBin6Line className="font-medium text-lg text-red-400  hover:text-red-600 cursor-pointer" />
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   مقاله دوم
                </th>
                <td className="px-6 py-4">
                   2
                </td>
                <td className="px-6 py-4">
                 تکنولوژِی
                </td>
                <td className="px-6 py-4">
                     <button className="py-1 px-2 rounded-lg bg-green-500 text-white text-xs">
                    انتشار
                  </button>
                    
                </td>
                <td className="px-6 py-4">
                     <RiDeleteBin6Line className="font-medium text-lg text-red-400  hover:text-red-600 cursor-pointer" />
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    مقاله سوم
                </th>
                <td className="px-6 py-4">
                    3
                </td>
                <td className="px-6 py-4">
                  جدید
                </td>
                <td className="px-6 py-4">
                <button className="py-1 px-2 rounded-lg bg-red-500 text-white text-xs">
                           منتشر نشده
                  </button>
             
                </td>
                <td className="px-6 py-4">
                         <RiDeleteBin6Line className="font-medium text-lg text-red-400  hover:text-red-600 cursor-pointer" />
                </td>
            </tr>
             <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    مقاله اولی
                </th>
                <td className="px-6 py-4">
                    1
                </td>
                <td className="px-6 py-4">
                    برنامه نویسی
                </td>
                <td className="px-6 py-4">
                  <button className="py-1 px-2 rounded-lg bg-yellow-500 text-white text-xs">
                     در انتظار
                  </button>
                  
                </td>
                <td className="px-6 py-4">
                    <RiDeleteBin6Line className="font-medium text-lg text-red-400  hover:text-red-600 cursor-pointer" />
                </td>
            </tr>
        </tbody>
    </table>
</div>
        </TabPanel>
        <TabPanel id="TabPanel-Favotit" className="w-full p-5">
          <div id="Favorit-Search" className="flex justify-start items-center py-2">
            <h1 className="text-md py-5 mx-2">علاقه مندی :</h1>
            <SearchFeildFavorit/>
          </div>
            <div className="w-full h-[200px] bg-gray-100 rounded-lg p-5">
              <small className="text-gray-500">هنوز چیزی اضافه نشده</small>
            </div>
      
           <div id="Favorit-TextPerson" className="flex flex-col my-10">
            <label className="text-sm py-5">در یک جمله خودت رو توصیف کن</label>
             <textarea id="w3review" name="w3review" rows="4" cols="10" placeholder="من سعید ..." className="text-xs p-5 bg-gray-100 rounded-lg focus:outline-none"></textarea>
          </div>
 <button className="w-full lg:w-1/3 py-3 rounded-lg bg-blue-400 hover:bg-blue-500  text-white my-5  shadow-lg font-bold cursor-pointer">ثبت اطلاعات</button>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
export default PanelTabs
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'


const people = [
  { id: 1, name: 'frontend' },
  { id: 2, name: 'backend' },
  { id: 3, name: 'html' },
  { id: 4, name: 'css' },
  { id: 5, name: 'javaScript' },
  { id: 6, name: 'node' },
  { id: 7, name: 'express' },
  { id: 8, name: 'nextjs' },
   { id: 9, name: 'reactjs' },

]

const SearchFeildFavorit=()=>{
 const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        });
         return (
          <>
    <Combobox value={selectedPerson} onChange={setSelectedPerson} onClose={() => setQuery('')}>
      <ComboboxInput
        aria-label="Assignee"
        displayValue={(person) => person?.name}
        onChange={(event) => setQuery(event.target.value)}
        className=" bg-gray-100 rounded-lg text-sm px-2 w-6/12 h-10 focus:outline-none"
      />
      <ComboboxOptions anchor="bottom" className="relative w-1/3 lg:w-1/6 rounded-md bg-white shadow-lg empty:invisible">
        {filteredPeople.map((person) => (
          <ComboboxOption key={person.id} value={person} className="py-2 px-4 text-xs cursor-pointer  data-focus:bg-gray-200">
            {person.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
    <button className="p-2 bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-lg text-white  mx-2"><IoMdAdd className="text-lg" /></button>
    </>
  )
}
