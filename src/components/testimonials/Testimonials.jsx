/*eslint-disable*/
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectCube, Keyboard} from 'swiper/modules';

import ReviewCard from './reviewCard/ReviewCard';
import credentials from './assets/credentials';
import './testimonials.style.scss';

const modules = [Navigation, Pagination, Autoplay, EffectCoverflow, EffectCube, Keyboard];

function Testimonials () {
  
    const videoRefs = React.useRef([]);

  const handleSwiper = (swiper) => {
  swiper.on('slideChange', function () {
    const previousSlideIndex = this.previousIndex;
    const videoElement = videoRefs.current[previousSlideIndex];
    if (videoElement && videoElement.current) {
      videoElement.current.pause();
      videoElement.current.currentTime = 0; // reset video to start
    }
  });
};
    
  return (
      <div className='testimonials'>
          <div> 
        <Swiper
                ref={handleSwiper}
                className='testimonials__container'
                spaceBetween={30}
                slidesPerView={1}
          navigation={true}
                pagination={{ clickable: true, }}
                effect='cube'
                keyboard={{ enabled: true }}
                modules={modules}
                loop={true}
                autoplay={{ delay: 6000, disableOnInteraction: true }}
            >
                    {credentials.map((credential, index) => (
                        <SwiperSlide key={index}>
                            <ReviewCard ref={videoRefs.current[index]} {...credential} userIndex = {index} />
                        </SwiperSlide>
                    ))}
            </Swiper>
          </div>
    </div>
  )
}

export default Testimonials;

