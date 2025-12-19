// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import useProduct from '@/hooks/useProduct';
import type { IProduct } from '@/Interfaces/Products';
import { FreeMode } from 'swiper/modules';
import ProductCard from './../ProductCard/ProductCard';
export default function Slider() {
    const { data } = useProduct({ page: 0, selectedCategory: null })
    console.log(data);

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    720: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {data?.map((product: IProduct) => {
                    return <SwiperSlide key={product.id}><ProductCard product={product} /></SwiperSlide>
                })}

            </Swiper>
        </>)
}
