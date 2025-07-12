import Applepng from '../assets/apple.png'
import Playstoresvg from '../assets/playstore.png'

export function AppleButton(){
    return(<div className='m-0 p-0 md:scale-100 scale-90'><a href='https://apps.apple.com/in/app/shoppin/id6738202299'><div className='flex gap-2 justify-center items-center md:w-52 w-48 md:h-12 h-15 rounded-[14px] border-[1.5px] border-[#E4E4E4] 
     bg-white/25 shadow-[0_2.473px_22.008px_rgba(0,0,0,0.1)] 
     backdrop-blur-[8.3458px] transition-all duration-300 ease-in-out md:hover:-translate-y-1 md:hover:shadow-xl'>
        <img src={Applepng} width={'20px'}/> 
        <div className='text-[1.1rem]'>download on ios</div>
    </div></a></div>)
}

export function PlaystoreButton(){
    return(<div className='m-0 p-0 md:scale-100 scale-90'><a href='https://play.google.com/store/apps/details?id=app.shoppin.ios&hl=en_IN'><div className='flex gap-2 justify-center items-center md:w-52 w-48 md:h-12 h-15 rounded-[14px] border-[1.5px] border-[#E4E4E4] 
     bg-white/25 shadow-[0_2.473px_22.008px_rgba(0,0,0,0.1)] 
     backdrop-blur-[8.3458px] transition-all duration-300 ease-in-out md:hover:-translate-y-1 md:hover:shadow-xl'>
        <img src={Playstoresvg} width={'20px'}/> 
        <div className='text-[1.1rem]'>get it on playstore</div>
    </div></a></div>)
}

