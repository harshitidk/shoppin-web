import ratingimg from '../assets/rating-img.png'

function Rating() {
    return (
        <div className="flex items-center scale-80 md:scale-100 justify-center gap-2 px-3 py-2 border rounded-full border-white/40 bg-white/20 text-black shadow-lg backdrop-blur-lg mb-3 transition-all duration-300 ease-in-out md:hover:shadow-lg hover:-translate-y-1 hover:bg-white/30">
            <div><img src={ratingimg} width={"60px"} /></div>
            <div>loved by users with a 4.5⭐ rating </div>
        </div>
    );
}

export default Rating;