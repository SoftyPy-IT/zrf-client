import { useCallback, useEffect, useRef, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';  // Import Swiper type for the ref
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Zoom } from 'swiper/modules';
import './Publications.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import book1 from "../../../../../src/assets/images/ebooks/e1.jpg";
import book2 from "../../../../../src/assets/images/ebooks/e2.jpg";
import book3 from "../../../../../src/assets/images/ebooks/e3.jpg";
import book4 from "../../../../../src/assets/images/ebooks/e4.jpg";
import Image from 'next/image';

function PublicationSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const swiperRef = useRef<SwiperClass | null>(null);

    const updateIndex = useCallback(() => {
        if (swiperRef.current) {
            setActiveIndex(swiperRef.current.realIndex);
        }
    }, []);

    useEffect(() => {
        const swiperInstance = swiperRef.current;
        if (swiperInstance) {
            swiperInstance.on('slideChange', updateIndex);
        }
        return () => {
            if (swiperInstance) {
                swiperInstance.off('slideChange', updateIndex);
            }
        };
    }, [updateIndex]);

    return (
        <div className=''>
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 20,
                    depth: 700,
                    modifier: 1.3,
                    slideShadows: true,
                }}
                zoom={true}
                modules={[EffectCoverflow, Autoplay, Zoom]}
                speed={900}
                onSwiper={(swiper) => (swiperRef.current = swiper)}

            >
                <SwiperSlide className='swiperSlide'>
                    <Image className='swiperImg' alt='slider' src={book1} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <Image alt='slider' src={book2} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <Image alt='slider' src={book3} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <Image className='swiperImg' alt='slider' src={book4} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <Image alt='slider' src={book1} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <Image className='swiperImg' alt='slider' src={book2} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <Image alt='slider' src={book3} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <Image alt='slider' src={book4} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default PublicationSlider;
