import type { IProduct } from "@/Interfaces/Products";

export default function ProductCard({product}:{product:IProduct}) {
    return (
        <div className="card w-full sm:w-[296px] text-start group">
            <div className="p-2 ">
                <div className="group-hover:bg-gray-50 duration-300 rounded-2xl pb-2">
                    <div className="imagecontainer overflow-hidden rounded-2xl ">
                        <img className="group-hover:scale-105 duration-200 h-75" src={product?.images[0]} alt={product?.title}/>
                    </div>
                    <div className="content mt-2">
                        <p className="text-xl font-bold capitalize">{product?.title.split(' ').slice(0, 2).join(' ')}</p>
                        <div className="stars flex gap-1">
                            <img src="./Star.svg" alt="Star" />
                            <img src="./Star.svg" alt="Star" />
                            <img src="./Star.svg" alt="Star" />
                            <img src="./Star.svg" alt="Star" />
                            <img src="./Star2.svg" alt="Star" />
                            <span className="ml-2 my-1">4.5/<span className="text-black/60">5</span> </span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="font-bold text-2xl text-red-500">${product?.price}</p>
                            <p className="font-bold text-2xl line-through text-black/40">${product?.price}</p>
                            <span className="text-xs font-medium text-red-500 bg-red-100 rounded-full flex-center px-[6px] py-[4px] ">-20%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
