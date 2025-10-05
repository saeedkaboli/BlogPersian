import  { Toaster } from 'react-hot-toast';

export default function LayoutPage({children}) {
  return (
    <>
    <Toaster  position="top-center"
  reverseOrder={false} />
    <div className="w-full lg:w-8/12  mx-auto py-2 relative px-2">
 {children}
    </div>
    
    </>
  )
}
