import SliderCarousel from "@/Components/Slider/Carousel";
import ComponentCard from "@/Components/Card/CardPost";
import { Suspense } from "react";
import SkeletonSlider from './../Components/Slider/CarouselSkeleton';
import SkeletonCard from "@/Components/Card/CardSkeleton";



export default  async function page() {
  //const res=await fetch("https://jsonplaceholder.typicode.com/posts");
 // const data=await res.json();
  const CategoryNews=[{name:"برنامه نویسی"},{name:"هوش مصنوعی"},{name:"نرم افزار"},{name:"خبرهای جدید"},{name:"خبرهای  داغ"},]

  return (

      <div className="w-full flex flex-col justify-center items-center">
        {/* You Needed Skeleton */}
         <Suspense fallback={<SkeletonSlider/>}><SliderCarousel/></Suspense>
 
      <div className="w-full lg:w-11/12 py-10 flex justify-around lg:justify-start items-center ">
          {CategoryNews.map((items,index)=><SharpNews key={index} dataTitle={items.name}/>)}     
      </div>
         <HeadTitle dataTitle="آخرین خبر های داغ"/>
         <div id="last-News" className="w-11/12 lg:w-11/12 grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 pb-24 pt-7">
         {/* The Needed Skeleton */}
        <Suspense fallback={<SkeletonCard/>}><ComponentCard data="saeed"/></Suspense>
         </div>
      </div>
    
  );
}

const HeadTitle=({dataTitle})=>{
  return(
       <div className="text-sm lg:text-md text-white py-5  font-light w-11/12 mx-auto">
        <h1 className="rounded-xl bg-blue-500 inline p-3">
        {dataTitle}

        </h1>
        </div>
  )
}
// The SharpNews
const SharpNews=({dataTitle})=>{
return(
 <span className="rounded-lg p-2 bg-gray-400 text-[0.5rem] lg:text-xs text-white flex justify-center items-center mx-1" >#{dataTitle}</span>
)
}



