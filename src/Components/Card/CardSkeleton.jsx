"use client"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonCard=()=>{
     return(
        <div className="rounded-xl p-6 bg-white flex flex-col justify-center items-center my-5 mx-7 md:mx-2 shadow-lg">
            <div id="Img-CardPost" className="w-full h-40 overflow-hidden rounded-lg">
    <Skeleton count={1} height={200} baseColor="#e9ecef" />
            </div>
            <div id="Title-CardPost" className="w-full py-4 text-center lg:text-right">
                <Skeleton count={1} width={100} baseColor="#e9ecef" style={{'borderRadius':'10px'}} />
                <div className="flex justify-center lg:justify-end items-center py-2">
                <Skeleton count={1} width={50} baseColor="#e9ecef" style={{'borderRadius':'5px','margin':'2px'}}/>
                <Skeleton count={1}  width={50} baseColor="#e9ecef" style={{'borderRadius':'5px','margin':'2px'}}/>
                </div>
                <div className=" flex flex-col justify-center items-start text-xs text-gray-400 py-1 text-center lg:text-right">
                    <Skeleton count={2}  width={25} height={7} baseColor="#e9ecef" style={{'borderRadius':'1px'}}/>
                </div>
            </div>
            <div id="Btn-CardPost" className="w-full py-1 flex justify-between items-center">
             <Skeleton count={1}  width={230} height={45} baseColor="#e9ecef" style={{'borderRadius':'5px'}}/>
            </div>

        </div>
    )
}

export default SkeletonCard;