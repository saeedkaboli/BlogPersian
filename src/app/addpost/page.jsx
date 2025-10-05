import MainForm from "./_components/FormAddBlog/InputForm";

export default function AddPostPage() {
  return (
    <div className="w-11/12 py-10  mx-auto mb-14 mt-5 lg:mt-7">
      <div className="w-full flex justify-center items-center pb-5 lg:pb-10">
        <h1 className="w-full lg:w-11/12 text-2xl lg:text-3xl  font-bold  inline-block rounded-lg text-center text-white my-5 shadow-lg bg-blue-300 py-5 mx-auto">اضافه کردن مقاله جدید</h1>
      </div>
      <div id="Form-Blog">
     <MainForm/>
      </div>
    </div>
  )
}




