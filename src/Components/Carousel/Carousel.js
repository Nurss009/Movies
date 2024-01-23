import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {BACKDROP_URL} from "../../config/config";


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

const Carousel =({movies}) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                }}
                modules={[Autoplay,EffectFade,Navigation, Pagination]}
                myName={"mySwiper"}
            >


                {
                    movies.map(el => (
                       <SwiperSlide>
                           <div className={'carousel-img'}
                           >
                               <img src={BACKDROP_URL + el.backdrop_path} alt={el.title}/>
                           </div>
                       </SwiperSlide>
                    ))
                }
            </Swiper>

        </>
    )
}

export default Carousel





