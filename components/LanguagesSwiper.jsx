import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PaddedContainer from './Common/PaddedContainer';
import Image from 'next/image';
import germanPNG from '../public/flags/german.png';
import frenchPNG from '../public/flags/french.png';
import arabicPNG from '../public/flags/arabic.png';
import englishPNG from '../public/flags/english.png';
import spanishPNG from '../public/flags/spanish.png';
import italianPNG from '../public/flags/italian.png';

export default function LanguagesSwiper() {
    return (
        <PaddedContainer className="bg-secondary" biggerPadding={true}>
            <Swiper
                className="w-full h-full mx-auto max-w-[1600px]"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    920: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Navigation]}
            >
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={englishPNG}
                            alt="Enlgish"
                        />
                        <p>English</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={frenchPNG}
                            alt="French"
                        />
                        <p>French</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={germanPNG}
                            alt="German"
                        />
                        <p>German</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={spanishPNG}
                            alt="Spanish"
                        />
                        <p>Spanish</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={arabicPNG}
                            alt="Arabic"
                        />
                        <p>Arabic</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={italianPNG}
                            alt="Italian"
                        />
                        <p>Italian</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={englishPNG}
                            alt="Enlgish"
                        />
                        <p>English</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={frenchPNG}
                            alt="French"
                        />
                        <p>French</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={germanPNG}
                            alt="German"
                        />
                        <p>German</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={spanishPNG}
                            alt="Spanish"
                        />
                        <p>Spanish</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={arabicPNG}
                            alt="Arabic"
                        />
                        <p>Arabic</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center p-8 gap-4 text-lg">
                        <Image
                            className="w-8 h-8"
                            src={italianPNG}
                            alt="Italian"
                        />
                        <p>Italian</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </PaddedContainer>
    );
}
