import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import {BACKDROP_URL} from "../config/config";


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
                    delay:2500,
                    disableOnInteraction:false
                }}
                modules={[Autoplay,EffectFade,Navigation, Pagination]}
                myName={"mySwiper"}
            >
                {
                    movies.map(el =>
                        <SwiperSlide>
                            <img src={BACKDROP_URL + el.backdrop_path} alt=""/>
                        </SwiperSlide>
                    )
                }
            </Swiper>

        </>
    )
}

export default Carousel


{/*    navigation={true}*/}
{/*    pagination={{*/}
{/*        clickable: true,*/}
{/*    }}*/}
{/*    modules={[EffectFade, Navigation, Pagination]}*/}
{/*    className="mySwiper"*/}
{/*>*/}
{/*    <SwiperSlide>*/}
{/*        <img alt={''} src="https://swiperjs.com/demos/images/nature-1.jpg" />*/}
{/*    </SwiperSlide>*/}
{/*    <SwiperSlide>*/}
{/*        <img alt={''} src="https://swiperjs.com/demos/images/nature-2.jpg" />*/}
{/*    </SwiperSlide>*/}
{/*    <SwiperSlide>*/}
{/*        <img alt={''} src="https://swiperjs.com/demos/images/nature-3.jpg" />*/}
{/*    </SwiperSlide>*/}
{/*    <SwiperSlide>*/}
{/*        <img alt={''} src="https://swiperjs.com/demos/images/nature-4.jpg" />*/}
{/*    </SwiperSlide>*/}
{/*</Swiper>*/}