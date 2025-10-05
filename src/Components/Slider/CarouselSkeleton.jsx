"use client"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonSlider=()=>{
    return(
<div className="w-11/12">
<Skeleton count={1}  height={240} className="w-9/12 my-4" baseColor="#b3b3b5" style={{'borderRadius':'10px'}} /> 
</div>
    )
}

export default SkeletonSlider;