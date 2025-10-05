import Image from 'next/image'
export default function PostblogPage() {
  return (
    <div className="w-full lg:w-11/12 mx-auto  py-10 overflow-hidden z-50">
        <div id="data-auther" className="border-b-1 border-gray-300 flex justify-between items-center">
            <span id="date-post" className="py-5 text-right">
                <div className="text-md text-gray-500 p-2">
                  <b>تاریخ :</b>
                  <small>۱۴۰۴/۳/۲۹</small>
                </div>
                <small className="bg-red-200 rounded-lg border border-red-600 text-red-800 text-xs py-0.5 px-2 my-2 mx-1">مهم</small>
                <small className="py-1 px-2 text-white text-xs bg-blue-300 border border-blue-600 rounded-lg my-2 mx-1">برنامه نویسی #</small>
            </span>
                <span id="data-user" className="py-5 flex justify-center items-center px-2" dir="ltr">
                  <span id="User-Img">
                        <Image
      src="/Img/user/ImgUserPost.jpg"
      width={50}
      height={50}
      alt="img"
      className="rounded-full w-12 h-12"
      loading="lazy"

    />
                  </span>
                  <span id="User-name" className="text-sm text-gray-500 px-1">
                    <div>SaeedKaboli</div>
                    <small>frontEnd-Developer</small>
                  </span>

                </span>
        </div>
        <div id="data-post-blog" className="py-5">
            <h1 className="text-2xl py-10 font-bold text-center lg:text-right">این یک پست </h1>
          <div id="Banner-Post-Blog" className="flex  justify-center items-center">

            <Image
      src="/Img/Slider/Banner.jpg"
      width={500}
      height={50}
      alt="img"
      className="rounded-xl w-full h-auto object-contain"
      loading="lazy"
      // placeholder="blur"
      quality={100}

    />

          </div>
          <div id="Des-Post-Blog" className="py-5">
            <p className="text-justify py-10 px-5 lg:px-0 text-sm lg:text-lg text-gray-600 font-light">
           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
     
        </div>
    </div>
  )
}
