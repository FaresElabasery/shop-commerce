import type { IProduct } from "@/Interfaces/Products";
import { Button } from "../ui/button";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="card w-full sm:w-[296px] text-start group relative">
      <div className="p-2">
        <div className="rounded-2xl pb-2 group-hover:bg-gray-50 duration-300">

          <div className="imagecontainer overflow-hidden rounded-2xl relative">
            <img
              className="group-hover:scale-105 duration-200 h-75 w-full object-cover"
              src={product?.images[0]}
              alt={product?.title}
            />

            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
<Button
  className="
    absolute bottom-0 left-0
    w-full z-30
    py-4 lg:py-6
    flex items-center justify-center gap-2
    cursor-pointer
    rounded-none
    !bg-black !text-white
    text-base font-medium
    opacity-100 translate-y-0
    lg:opacity-0 lg:translate-y-full
    group-hover:lg:opacity-100
    group-hover:lg:translate-y-0
    transition-all duration-300
  "
>
  Go to Checkout <span>→</span>
</Button>



          </div>

          <div className="content mt-2">
            <p className="text-xl font-bold capitalize">
              {product?.title.split(' ').slice(0, 2).join(' ')}
            </p>

            <div className="stars flex gap-1">
              <img src="./Star.svg" alt="Star" />
              <img src="./Star.svg" alt="Star" />
              <img src="./Star.svg" alt="Star" />
              <img src="./Star.svg" alt="Star" />
              <img src="./Star2.svg" alt="Star" />
              <span className="ml-2 my-1">4.5/<span className="text-black/60">5</span></span>
            </div>

            <div className="flex gap-2 items-center">
              <p className="font-bold text-2xl text-red-500">${product?.price}</p>
              <p className="font-bold text-2xl line-through text-black/40">${product?.price}</p>
              <span className="text-xs font-medium text-red-500 bg-red-100 rounded-full px-[6px] py-[4px]">
                -20%
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
