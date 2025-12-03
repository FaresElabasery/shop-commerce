import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from '../ReviewCard/ReviewCard';

export default function ReviewSlider({ uniqueId }: { uniqueId: string }) {
    return (
        <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper"
            navigation={{
                nextEl: `.review-next-${uniqueId}`,
                prevEl: `.review-prev-${uniqueId}`,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 3.5,
                },
            }}
        >
            <SwiperSlide><ReviewCard /></SwiperSlide>
            <SwiperSlide><ReviewCard /></SwiperSlide>
            <SwiperSlide><ReviewCard /></SwiperSlide>
            <SwiperSlide><ReviewCard /></SwiperSlide>
            <SwiperSlide><ReviewCard /></SwiperSlide>
            <SwiperSlide><ReviewCard /></SwiperSlide>
            <SwiperSlide><ReviewCard /></SwiperSlide>
        </Swiper>
    )
}
