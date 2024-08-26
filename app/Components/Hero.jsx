
import { FaPlay } from "react-icons/fa";



function Hero() {


  return (
    <div className='main relative h-auto bg-white justify-center items-center gap-28 p-8 lg:flex lg:ml-[10vw] lg:p-0'>
      <div className="texts flex flex-col gap-5 lg:gap-10 pt-20">
        <div className="top">
          <h3 className='text-[#DF6951] font-bold text-[3vw] lg:text-[20px] animate'>
            BEST DESTINATIONS AROUND THE WORLD
          </h3>
          <h1 className='text-[#181E4B] font-bold text-[5vw] lg:text-[4vw] leading-tight'>
            Travel, Enjoy <br />and Live a new <br />and full life
          </h1>
        </div>
        <div className="bottom">
          <p className='w-[70vw] lg:w-[30vw] text-justify leading-relaxed'>
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
        <div className="btns flex items-center gap-12">
          <button className='bg-yellow-500 py-2 px-4 rounded-xl lg:py-4 lg:px-8 text-[15px] text-white'>
            Find Out More
          </button>
          <div className="right flex items-center gap-4 lg:gap-8">
            <button className='bg-[#DF6951] rounded-[1000px] w-[40px] h-[40px] flex justify-center items-center'>
              <FaPlay className='text-white text-[10px]' />
            </button>
            <h1>Play Demo</h1>
          </div>
        </div>
      </div>

      <div className="img">
        <img className='w-[90vw] mt-5 lg:mt-0 lg:w-[1200px]' src="/Hero-Left.png" alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
