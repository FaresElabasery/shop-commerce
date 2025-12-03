
export default function ReviewCard() {
    return (
        <div className="w-full sm:w-[400px] flex flex-col gap-2 px-8 py-7 rounded-3xl border">
            <div className="stars flex gap-1">
                <img src="./Star.svg" alt="Star" />
                <img src="./Star.svg" alt="Star" />
                <img src="./Star.svg" alt="Star" />
                <img src="./Star.svg" alt="Star" />
                <img src="./Star.svg" alt="Star" />
            </div>
            <p className="text-2xl font-bold flex items-center">Alex K. <img className="ml-2" src="./vertified.svg" alt="verified" /></p>
            <p className="text-black/60">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
        </div>
    )
}
