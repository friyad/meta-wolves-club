import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import "./MeetTheWolves.css";

import wolf1 from '../../../images/wolf 1.png'
import wolf2 from '../../../images/wolf 2.png'
import wolf3 from '../../../images/wolf 3.png'
import wolf4 from '../../../images/wolf 4.png'

import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
SwiperCore.use([Pagination, Navigation]);

const MeetTheWolves = () => {
    const wolfData = [wolf1, wolf2, wolf3, wolf4]
    const [windowWidth, setWindoWidth] = useState(null)

    window.onmousemove = function () {
        checkWindowSize();
    }
    function checkWindowSize() {
        setWindoWidth(window.innerWidth)
    }


    return (
        <div className="mt-24 xs:w-11/12 mx-auto" id="MeetTheWolves">
            <h1 className="xs:text-3xl lg:text-5xl font-bold font-miedinger m-0">MEET THE WOLVES</h1>
            <hr className="border-2 rounded-full w-52 mt-1 mx-auto" style={{ borderColor: '#7165FF' }} />

            <div className="mt-20">
                <Swiper slidesPerView={windowWidth < 768 ? 2 : 4} spaceBetween={5} slidesPerGroup={4} loop={true} loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    {wolfData.map(wolf =>
                        <SwiperSlide>
                            <img src={wolf} alt="" className="w-72" />
                        </SwiperSlide>
                    )
                    }
                </Swiper>
            </div>

            <p className="font-extralight text-left xs:text-sm lg:text-base mt-20">With over 10 designers and over 200 Accessory our CWC NFTs will blow off your mind!! Take a look of some of them. After the sale ends, there will be a Rarity Page where you will see the ranking and all the minted wolves. </p>
        </div>
    );
};

export default MeetTheWolves;