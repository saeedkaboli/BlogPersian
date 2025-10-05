import { SpinnerDotted  } from 'spinners-react';
export default function Loading(){
    return(
        <div className="w-full h-[100vh] flex justify-center items-center">
            <SpinnerDotted size={46} thickness={107} speed={109} color="rgba(57, 120, 172, 1)" />
        </div>
    )
}