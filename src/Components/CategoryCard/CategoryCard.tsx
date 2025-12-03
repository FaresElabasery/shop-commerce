
export default function CategoryCard({ title, image, className }: { title: string, image: string, className?: string }) {
    return (
        <div className={`card bg-white text-black h-[180px] sm:h-[280px] rounded-2xl hover:flex-grow  transition-all duration-500 cursor-pointer overflow-hidden ${className}`}>
            <div className="relative w-full h-full">
                <span className="font-bold text-4xl absolute top-5 left-5">{title}</span>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        </div>
    )
}



