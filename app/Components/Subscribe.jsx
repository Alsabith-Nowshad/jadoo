import React from 'react'

const Subscribe = () => {
  return (
    <div className='main w-full h-auto mb-10 flex justify-center'>


    <div className="box bg-pink-100 w-[90vw] h-[25vh] sm:w-[80vw] sm:h-[25vw] rounded-[30px] rounded-tl-[15vw] flex  flex-col justify-center items-center gap-[2vw]">
<div className="top flex flex-col justify-center items-center">
    <h1 className='text-[12px] md:text-[2vw] font-bold leading-tight'>interesting offers about Jadoo</h1>
    <h1 className='text-[12px] md:text-[2vw] font-bold leading-tight'>Subscribe to get information, latest news and other</h1>
</div>
<div className="text-box flex">
<form className=' md:flex items-center gap-2  ' action="">
<div className="div h-[5vh] w-[70vw] mb-3 md:w-[36vw] bg-white rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl flex justify-between items-center md:h-[5vh]">
    <h1 className='ml-5 text-[10px] md:text-[.7vw]'>Your Email</h1>
<input  className='w-[70vw] h-[3vh] md:w-[30vw]  md:h-[5vh]  rounded-tr-xl rounded-br-xl' type="text" />

</div>
<div className="btn">
<button className='bg-orange-400 w-[70vw]  md:w-[7vw] md:h-[5vh] md:text-[1vw] text-white rounded-xl'>SUBSCRIBE</button>
</div>
</form>
</div>
</div>

    </div>
  )
}

export default Subscribe
