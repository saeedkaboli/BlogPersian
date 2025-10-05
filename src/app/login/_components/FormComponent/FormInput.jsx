"use client"
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import {useState} from 'react'
import { SpinnerRound } from 'spinners-react';
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
//Input Component
const FormInput=()=>{
    const [loading,setLoading]=useState(false);
    const {register,handleSubmit,formState:{errors}} = useForm();
    const Route=useRouter();
     const onSubmit = (data) => {
        const cookies = new Cookies();
        if(data){
            setLoading(true);
            if(data.email=="admin@gmail.com",data.password=="1234S@eed"){
                setTimeout(()=>{
                     setLoading(true);
                     toast.success('مدیر خوش آمدید');
                     cookies.set("token", data.password,{path: '/', expires: new Date(Date.now()+2592000)});
                     Route.replace("/login/panel-admin");
                },2000)
            }else{
                 setTimeout(()=>{
                     setLoading(true);
                      toast.success('کاربر جدید به پنل خود وارد شدید');
                        cookies.set("token", data.password,{path: '/', expires: new Date(Date.now()+2592000)});
                     Route.replace("/login/panel-user");
                },2000)
            }
        }else{
            toast.error("با خطا جدید مواجه شدید")
        }
     //   console.log(data);
     }
    return(
        <form action="#" className="flex flex-col my-5 w-full lg:w-5/12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="ایمیل" {...register("email",{ required: true, maxLength: 20,pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/})} className="p-3 bg-white rounded-lg my-3 text-sm focus:outline-none focus:py-4 focus:shadow-lg shadow-gray-300 transition-all"/>
            {errors.email?<small className="font-bold text-red-500">آدرس ایمیل را به  درستی وارد کنید</small>:null}
             <input type="password" placeholder="رمز" {...register("password",{ required: true, maxLength: 20,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/})} className=" p-3 bg-white rounded-lg mt-2 mb-3  text-sm focus:outline-none  focus:py-4 focus:shadow-lg shadow-gray-300 transition-all"/>
             {errors.password?<small className="font-bold text-red-500">لطفا از یک رمز معتبر استفاده کنید</small>:null}
            <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg cursor-pointer font-bold text-md mt-10 flex justify-center items-center">{loading ? <SpinnerRound color="#fff" size="5%" thickness="250"/>:<b>ثبت نام</b>}</button>
        </form>
    )
}
export default FormInput