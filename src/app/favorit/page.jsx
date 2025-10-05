import Image from 'next/image'
export default function FavoritPage() {
  return (
 <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-blue-400 text-sm lg:text-md text-center py-2 px-4 font-light border border-blue-200 rounded-lg bg-blue-100 my-5 shadow-lg shadow-blue-100">هیچ علاقه مندی وجود ندارد!  </h1>
        <Image
              src="/Img/NoPost.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-10/12  lg:w-5/12"
            />
    </div>
  )
}
