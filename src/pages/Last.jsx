import { useState, useEffect } from 'react';
import img1 from '../assets/images/097f5993-c609-42fe-a792-6b0bb9fd7223.jfif';
import img2 from '../assets/images/33ac6eaf-5215-4b0f-b560-636213a8a07f.jfif';
import img3 from '../assets/images/카지노스코어  http___cass2_net.jfif';
import img4 from '../assets/images/27+ Stores Like ModCloth For Vintage-Inspired & Quirky Clothing.jfif';
import img5 from '../assets/images/Chic & Timeless_ Women’s Fashion Ideas.jfif';
import img6 from '../assets/images/Lantern Sleeve Solid Shirt.jfif';
import img7 from '../assets/images/Taylor Swift Just Convinced Me I Need These Cool-Girl Fall Boots.jfif';
import img8 from '../assets/images/Finch & Fawn _ Simple Winter Mornings.jfif';
import img9 from '../assets/images/12月♡ 毎日モテ続けちゃう！ 30日分のモテ格言付きベストコーデ 毎日コーデ     - with online - 講談社公式 - _ 自分らしく、楽しく.jfif';
import img10 from '../assets/images/44 Chic Paris Summer Outfits That Capture The Timeless Style Of The City of Lights.jfif';
import img11 from '../assets/images/1b52ab4e-40c3-44e6-8549-364f2872391c.jfif';
import img12 from '../assets/images/d1637245-14f5-4951-a749-43203d9236fe.jfif';
import img13 from '../assets/images/Old Money Outfits Ideas Summer 2025 – 27 Elegant Looks for the Warmest Season.jfif';
import img14 from '../assets/images/WOMEN AT WORK.jfif';
import img15 from '../assets/images/a50bfe68-e57c-40ed-b745-f8b22b99bdf6.jfif';
import img16 from '../assets/images/☆.jfif';
import img17 from '../assets/images/download (1).jfif';
import img18 from '../assets/images/download.jfif';
import img19 from '../assets/images/yoona collection.jfif';


const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
    img11, img12, img13, img14, img15, img16, img17, img18, img19,
    // Repeating some images to create a fuller, more dynamic collage
    img5, img8, img1, img12, img15, img3, img7, img10,
];

const reviews = [
    { text: "The products on shoppin' are truly wonderful, very aesthetic and thoughtfully curated. I was genuinely interested in purchasing a few items. wishing you and the team all the best. it's a beautiful platform!" },
    { text: "Absolutely love the selection! Found so many unique pieces I couldn't find anywhere else. The virtual try-on is a game-changer." },
    { text: "A fantastic shopping experience from start to finish. The app is intuitive and the vibe search helped me discover my new favorite brand." },
    { text: "Great curation of fashion. It feels like this app was made for me. Highly recommended for anyone tired of the usual online stores." },
    { text: "Customer service was amazing and my order arrived faster than expected. The quality of the clothes is top-notch. Will be shopping here again!" },
    { text: "I'm obsessed! The image search works like magic and I've already recommended it to all my friends. A must-have for fashion lovers." },
];

function LastPage() {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative bg-white min-h-screen w-full overflow-hidden">
            {/* Masonry Image Grid */}
            <div className="columns-3 sm:columns-4 md:columns-5 lg:columns-6 gap-4 space-y-4 p-4 md:p-8 absolute inset-0 z-0">
                {images.map((src, index) => (
                    <div key={index} className="break-inside-avoid">
                        <img 
                            src={src} 
                            alt={`fashion-moodboard-${index + 1}`} 
                            className="w-full h-auto object-cover rounded-2xl shadow-lg opacity-40" 
                        />
                    </div>
                ))}
            </div>

            {/* Testimonial Card */}
            <div className="absolute bottom-12 right-12 z-10 bg-white/80 backdrop-blur-lg rounded-3xl p-10 max-w-lg shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">what <span className="text-red-400">people</span> are<br/>saying about shoppin'</h2>
                <p className="text-gray-800 text-lg mb-8 h-40">{reviews[currentReview].text}</p>
                <div className="flex justify-center items-center space-x-2.5">
                    {reviews.map((_, index) => (
                        <div 
                            key={index} 
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentReview === index ? 'bg-gray-900' : 'bg-gray-400'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LastPage;
