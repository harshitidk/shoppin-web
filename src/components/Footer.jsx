import AppleIcon from '../assets/apple.svg';
import PlaystoreIcon from '../assets/playstore.svg';
import ShoppinLogo from '../assets/shoppin.webp';
import { AppleButton, PlaystoreButton } from './StoreButtons';

function Footer() {
    return (
        <div className="relative w-full bg-[#FDF5F2] py-20 px-8 md:px-16 text-center overflow-hidden">
            {/* Background Shoppin' Logo */}
            <img 
                src={ShoppinLogo} 
                alt="shoppin background" 
                className="absolute inset-0 w-full h-full object-contain object-bottom opacity-5 text-pink-200"
            />

            {/* Stars Decoration */}
            <div className="absolute top-1/3 left-16 text-3xl text-pink-400 opacity-80 transform -translate-y-1/2">&#10022;</div>
            <div className="absolute top-1/2 left-24 text-2xl text-pink-400 opacity-60">&#10022;</div>
            <div className="absolute top-1/4 right-16 text-3xl text-pink-400 opacity-80 transform -translate-y-1/2">&#10022;</div>
            <div className="absolute top-2/3 right-24 text-2xl text-pink-400 opacity-60">&#10022;</div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Main Title */}
                <h2 className="text-3xl md:text-5xl font-serif">
                    world&apos;s first <br />
                    <span className="font-bold">AI-driven <span className="text-[#FF444F]">shoppin&apos;</span> experience</span>
                </h2>
                <p className="text-gray-600 mt-6 text-lg">
                    discover fashion from 10,000+ brands <br />
                    and shop all in one place
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mt-8">
                    <a href="#" className="text-2xl w-10 h-10 rounded-full bg-gray-200 grid place-items-center"></a>
                    <a href="#" className="text-2xl w-10 h-10 rounded-full bg-gray-200 grid place-items-center"></a>
                    <a href="#" className="text-2xl w-10 h-10 rounded-full bg-gray-200 grid place-items-center"></a>
                </div>

                {/* App Download Buttons */}
                <div className="flex flex-col md:flex-row gap-4 mt-10">
                    <AppleButton />
                    <PlaystoreButton />
                </div>

                {/* Footer Links and Copyright */}
                <div className="w-full mt-24 text-sm text-gray-500">
                    <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">
                        <a href="#" className="hover:underline">terms of service</a>
                        <a href="#" className="hover:underline">privacy</a>
                        <a href="#" className="hover:underline">refunds</a>
                        <a href="#" className="hover:underline">support</a>
                        <a href="#" className="hover:underline">shipping</a>
                        <a href="#" className="hover:underline">contact us</a>
                    </div>
                    <p className="mt-8">&copy; 2025 USAR Commerce Technologies Pvt. Ltd.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer; 