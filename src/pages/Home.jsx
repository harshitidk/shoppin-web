import Rating from '../components/Rating'
import Applepng from '../assets/apple.png'
import Playstoresvg from '../assets/playstore.png'
import Phone from '../assets/phone.png'
import ss1 from '../assets/ss1.png'
import ss2 from '../assets/ss2.png'
import ss3 from '../assets/ss3.png'
import ss4 from '../assets/ss4.png'
import ss5 from '../assets/ss5.png'
import ss6 from '../assets/ss6.png'
import ShoppinLogo from '../assets/shoppin.webp';
import LineArrow from '../assets/line.svg';
import { AppleButton, PlaystoreButton } from '../components/StoreButtons';

function Home(){
    return(<div className='flex flex-col w-full relative h-screen pt-15 md:pt-5 items-center text-black bg-[linear-gradient(113deg,_#FCFAE2_0%,_#FFF_50.58%,_#FDDFDF_100%)] overflow-hidden'> 
    <div className='flex-shrink-0 w-full flex flex-col items-center'>
        <div className='relative flex w-full md:justify-start justify-center'><img src={ShoppinLogo} alt="Shoppin Logo" className="relative md:left-12 w-28" /></div>
        <div className='md:mt-0 mt-2'><Rating /></div>
        <div className='text-[2.3rem] text-center md:scale-100 scale-70 text-black m-0 p-0'><span className='text-[#FF444F]'>discover fashion</span><br/>from over 40,000+ brands</div>
        <div className='relative flex gap-0 md:gap-3 mt-0 md:mt-5 w-full justify-center items-center'>
            <img src={LineArrow} alt="arrow" className="absolute -top-6 -left-20 w-14 transform -rotate-[15deg] opacity-0 md:opacity-60" />
            <AppleButton /><PlaystoreButton />
        </div>
    </div>
    <div className='relative flex-1 w-full md:mt-12 overflow-y-auto snap-y snap-mandatory md:overflow-visible md:flex md:justify-center md:items-end phone-screen-scroll'>
         <div className="group_of_screens flex flex-col items-center gap-y-24 md:gap-0 md:flex-row md:justify-center md:-space-x-10">
             {/* Phone 0: frozen screen */}
              <div className='snap-start sticky top-10 md:static md:hidden relative z-0 transform-gpu transition-transform md:hover:-translate-y-2 md:translate-y-12 '>
                 <p className="hidden md:block absolute -top-8 w-full text-center text-gray-700">home</p>
                  <div className="relative w-60">
                     <img src={Phone} className="w-full relative z-10" />
                     <img src={ss6} className=" absolute inset-[5px] w-[calc(100%-10px)] rounded-[24px] z-0" />
                  </div>
              </div>
             {/* Phone 1: Virtual Tryon */}
              <div className='snap-start sticky top-10 md:static relative z-10 md:z-0 transform-gpu transition-transform md:hover:-translate-y-2 md:translate-y-12'>
                  <p className="hidden md:block absolute -top-8 w-full text-center text-gray-700">virtual tryon</p>
                  <div className="relative w-60">
                     <img src={Phone} className="w-full relative z-10" />
                     <img src={ss5} className="absolute inset-[5px] w-[calc(100%-10px)] rounded-[24px] z-0" />
                  </div>
              </div>
            
            {/* Phone 2: Image Search */}
            <div className='snap-start sticky top-10 md:static relative z-20 md:z-10 transform-gpu transition-transform md:hover:-translate-y-2 md:translate-y-4'>
                <p className="hidden md:block absolute -top-8 w-full text-center text-gray-700">image search</p>
                <div className="relative w-60">
                    <img src={Phone} className="w-full relative z-10" />
                    <img src={ss3} className="absolute inset-[5px] w-[calc(100%-10px)] rounded-[24px] z-0" />
                </div>
            </div>

            {/* Phone 3: Search (Center) */}
            <div className='snap-start sticky top-10 md:static relative z-30 md:z-20 transform-gpu transition-transform md:hover:-translate-y-4'>
                <p className="hidden md:block absolute -top-8 w-full text-center text-gray-700">search</p>
                <div className="relative w-60 md:w-64">
                    <img src={Phone} className="w-full relative z-10" />
                    <img src={ss1} className="absolute inset-[6px] w-[calc(100%-12px)] rounded-[28px] z-0" />
                </div>
            </div>

            {/* Phone 4: Discover */}
            <div className='snap-start sticky top-10 md:static relative z-40 md:z-10 transform-gpu transition-transform md:hover:-translate-y-2 md:translate-y-4'>
                <p className="hidden md:block absolute -top-8 w-full text-center text-gray-700">discover</p>
                <div className="relative w-60">
                    <img src={Phone} className="w-full relative z-10" />
                    <img src={ss4} className="absolute inset-[5px] w-[calc(100%-10px)] rounded-[24px] z-0" />
                </div>
            </div>

            {/* Phone 5: Shop */}
            <div className='snap-start sticky top-10 md:static relative z-50 md:z-0 transform-gpu transition-transform md:hover:-translate-y-2 md:translate-y-12 mb-[50vh] md:mb-0'>
                <p className="hidden md:block absolute -top-8 w-full text-center text-gray-700">shop</p>
                <div className="relative w-60">
                    <img src={Phone} className="w-full relative z-10" />
                    <img src={ss2} className="absolute inset-[5px] w-[calc(100%-10px)] rounded-[24px] z-0" />
                </div>
            </div>
        </div>
    </div>
    {/* Gradient to white transition at the bottom */}
    <div className="pointer-events-none w-full h-28 absolute left-0 bottom-0 z-30" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 100%)'}} />
    </div>)
}

export default Home;