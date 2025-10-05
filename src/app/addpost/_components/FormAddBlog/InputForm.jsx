"use client"
import { Radio, RadioGroup } from '@headlessui/react'
import { FaCheckCircle } from "react-icons/fa";
import { PiFileDashedLight } from "react-icons/pi";
import { useEffect, useState} from 'react'
import { TiDelete } from "react-icons/ti";
import Image from 'next/image'
import toast from 'react-hot-toast';
import { SpinnerCircular } from 'spinners-react';
import { useRouter } from 'next/navigation'
const MainForm=()=>{
  const Router = useRouter()
  const [dataBlog,setDataBlog]=useState({
    blog_img:null,
    blog_title:"",
    blog_des:"",
    blog_status_news:"تکنولوژی",
    blog_status_sensitive:"معمولی",
    blog_date:null,
    blog_auther:{fullname:null,job:null,img:null},
    blog_other:[]
  })
  const [LoadingBtn,setLoadingBtn]=useState(false);
  const [reset,setReset]=useState(false);
  // The handler Btn 
  const handlerPushBlog=()=>{
    const datePost = new Date().toLocaleDateString('fa-IR');
  
    //The User Login ? 
    const isLoginUser=true;
    if(isLoginUser){
const Regx_Tit=/^[\p{L}\s\u200c]{5,50}$/u;
const Regx_Des=/^[\p{L}\s\u200c]{5,200}$/u;
    const isValidTitle=Regx_Tit.test(dataBlog.blog_title);
     const isValidDes=Regx_Des.test(dataBlog.blog_des);
    if(isValidTitle && isValidDes && dataBlog.blog_title!==null && dataBlog.blog_title!=="" && dataBlog.blog_title!=="null" && dataBlog.blog_des!=="" && dataBlog.blog_des!=="null" && dataBlog.blog_title!==undefined && dataBlog.blog_des!==null && dataBlog.blog_des!=="undefind" && dataBlog.blog_des!==undefined){
        setLoadingBtn(true);
      setDataBlog({...dataBlog,blog_auther:{fullname:"saeedkaboli",job:"developer",img:"img"},blog_date:datePost});
      setReset(true);
      setTimeout(()=>{
        setLoadingBtn(false);
        setDataBlog({
    blog_img:null,
    blog_title:"",
    blog_des:"",
    blog_status_news:"تکنولوژی",
    blog_status_sensitive:"معمولی",
    blog_date:null,
    blog_auther:{fullname:null,job:null,img:null},
    blog_other:[]
  })
  // fileInputRef.current.value =null;
        toast.success('پست  شما در حال انتشار است');
        setReset(false);
      }, 5000)
      setTimeout(()=>{
        Router.push("/");
      },7000)
    }else{
      toast.error("فیلد ها را به درستی وارد کنید")
   
    }
    }else{
          toast.error("لطفا داخل وب سایت ثبت نام کنید")
      
    }
    
  }
  //The fill input Title Blog and Des Blog
  const handlerInputs=(feild,value)=>{
    setDataBlog((pre)=>({...pre,[feild]:value}))
  }
  return(
    <>
      <div id="ChooseFile-Item" className="w-full lg:w-10/12 mx-auto py-5 my-2 text-gray-500">
        <h1 className="pb-5 text-sm lg:text-lg">انتخاب عکس</h1>
          <ChooseFile OnInput={handlerInputs} dataReset={reset}/>
        </div>
        <div id="Form-Item" className="w-full lg:w-10/12 mx-auto">
          <FormAddBlog OnInput={handlerInputs} data={dataBlog}/>
        </div>
        <div id="CategoryNews-Item" className="w-full lg:w-10/12 mx-auto flex ">
         
        <CategoryNews OnInput={handlerInputs} dataReset={reset}/>
        </div>
         <div id="CategorySensitiveNews-Item" className="w-full lg:w-10/12 mx-auto flex ">
         
        <CategorySensitiveNews OnInput={handlerInputs} dataReset={reset}/>
        </div>
     <div id="Btn-AddPostPage" className="w-full mx-auto py-7 flex justify-center items-center">
      {LoadingBtn ? 
<button type="button" className="w-10/12 lg:w-4/12 py-3 px-10 text-white bg-blue-300  cursor-not-allowed font-medium rounded-lg text-lg flex justify-center items-center" disabled><SpinnerCircular color="#fffff" size="30" /> </button>

       : <button className="w-10/12 lg:w-4/12 py-3 px-10 text-white bg-blue-500 rounded-lg text-lg cursor-pointer hover:bg-blue-600 flex justify-center items-center" onClick={handlerPushBlog}>ثبت</button>}
     </div>
    </>
  )
}






//Input Form Component
const FormAddBlog=({OnInput,data})=>{
  return(
    <form action="#" className="flex flex-col justify-center items-center">
      <label className="pt-7 w-full text-right text-gray-500 text-sm lg:text-lg">نام مقاله</label>
      <input type="text" placeholder="بلاگ" className="w-full text-sm py-3 px-4 bg-white rounded-lg focus:outline-none my-2" id="blog_title" onChange={(e)=>OnInput("blog_title",e.target.value)} value={data.blog_title}/>
        <label className="pt-7 w-full text-right text-gray-500 text-sm lg:text-lg">توضیحات</label>
      <textarea type="text" value={data.blog_des} placeholder="نوشته شود" resize="none" className="w-full h-[200px] text-sm py-3 px-4 bg-white rounded-lg focus:outline-none my-2" id="blog_des" onChange={(e)=>OnInput("blog_des",e.target.value)}></textarea>
    </form>
  )
}
//Input Choose File
const ChooseFile=({OnInput,dataReset})=>{
  const [imageUrl,setImageUrl]=useState(null);

  //--------The handler change Img
  const handlerImageChange=(e)=>{
const file=e.target.files[0];
if(file){
  const url=URL.createObjectURL(file);
  setImageUrl(url);
  OnInput("blog_img",url);
  
}
  }
  useEffect(()=>{
    return()=>{
      if(imageUrl){
        URL.revokeObjectURL(imageUrl);
      }
    }
  },[imageUrl])
  useEffect(()=>{
    setImageUrl(null)
  },[dataReset])
  return(
    <div className="w-full h-[200px] py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed overflow-y-scroll">
      {imageUrl ?null:
<div className="grid gap-1">
<PiFileDashedLight className="text-center text-3xl mx-auto" />
<h2 className="text-center text-gray-400   text-xs leading-4">PNG, JPG or PDF, smaller than 15MB</h2>
</div>}
<div className="grid gap-2">
<div className="flex flex-col items-center justify-center">
<label>
  <input type="file" hidden accept='image/*' onChange={handlerImageChange} id="blog-img" />
 {imageUrl ? null :  <div className="flex w-28 h-9 px-2 flex-col bg-blue-400 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">انتخاب فایل</div>}
</label>
{imageUrl && (<div>
 <TiDelete className="text-red-500 text-xl cursor-pointer" onClick={()=>setImageUrl(null)} />
 <Image
      src={`${imageUrl}`}
      width={200}
      height={200}
      alt="Picture of the author"
      className="rounded-lgl w-[200px] h-auto mx-auto"
    />
</div>)}
</div>
</div>
</div>
  )
}
//------------The Mouck Api

const planSensitiveNews = [
  { name: 'معمولی', },
  { name: 'خوب' },
   { name: 'مهم'},
    { name: 'کم اهمیت' },
]
//Category Items
const CategorySensitiveNews=({OnInput,dataReset})=>{
 const [selected, setSelected] = useState(planSensitiveNews[0])
const handlerSelected=(name)=>{
  OnInput("blog_status_sensitive",name)
 }
  useEffect(()=>{
  setSelected(planSensitiveNews[0])
 },[dataReset])
  return (
    <div className="w-full py-4">
      <h1 className="pt-5 py-10 text-sm lg:text-lg">حساسیت خبر</h1>
      <div className="mx-auto w-full">
        <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="w-full  flex lg:flex-row flex-wrap justify-center items-center">
          {planSensitiveNews.map((plan) => (
            <Radio
            onClick={()=>handlerSelected(plan.name)}
              key={plan.name}
              value={plan}
              className="w-5/12 lg:h-[100px] m-2  group relative flex flex-wrap cursor-pointer rounded-lg bg-blue-300 px-5 py-4 text-white shadow-md transition focus:not-data-focus:outline-none data-checked:bg-blue-500 data-focus:outline data-focus:outline-white"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{plan.name}</p>
                </div>
                   <FaCheckCircle className="size-6 fill-white opacity-0 transition group-data-checked:opacity-100"  />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}
//------------------------------------The Mouck Api
const planNews = [
  { name: 'تکنولوژي', },
  { name: 'اقتصادی' },
   { name: 'بورس'},
    { name: 'عمومی' },
]
//Category Items
const CategoryNews=({OnInput,dataReset})=>{
 const [selected, setSelected] = useState(planNews[0])
 const handlerSelected=(name)=>{
  OnInput("blog_status_news",name)
 }
 useEffect(()=>{
  setSelected(planNews[0])
 },[dataReset])

  return (
    <div className="w-full py-4">
      <h1 className="pt-5 py-10 text-sm lg:text-lg">دسته بندی خبر</h1>
      <div className="mx-auto w-full">
        <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="w-full  flex lg:flex-row flex-wrap justify-center items-center">
          {planNews.map((plan) => (
            <Radio
            onClick={()=>handlerSelected(plan.name)} 
              key={plan.name}
              value={plan}
              className="w-5/12 lg:h-[100px] m-2  group relative flex flex-wrap cursor-pointer rounded-lg bg-blue-300 px-5 py-4 text-white shadow-md transition focus:not-data-focus:outline-none data-checked:bg-blue-500 data-focus:outline data-focus:outline-white"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white" id="subject-news">{plan.name}</p>
                </div>
                   <FaCheckCircle className="size-6 fill-white opacity-0 transition group-data-checked:opacity-100"  />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}
export default MainForm