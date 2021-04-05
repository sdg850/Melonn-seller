import React, { useEffect } from 'react'
import { useContextSeller } from '../../GlobalState/Context/Seller'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Link } from 'react-router-dom'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import Seller from './Seller/Seller'



import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Mousewheel, Autoplay]);

export default function SellerList() {

    const { state, handleAdd } = useContextSeller()


    return (
        <div className='todoList__container' >
            <Link to='/form' >
            <button onClick={handleAdd} className='list__container' >&#10010;</button>
            </Link>

          <Swiper
                tag='section'
                wrapperTag='ul'
                spaceBetween={30}
                slidesPerView='5'
                autoplay= {true}
                centeredSlides= 'true'
                //loop = 'false'
                navigation
                pagination               
                //onInit={swiper => { console.log('Swiper initialized!', swiper) }}
                effect='coverflow'
                //onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log('slide change')}
                className = 'swiper-container'
                observer
                on = {handleAdd}
                resizeObserver
                roundLengths
            >

                {state.map(item => {
                    return (                        
                        <SwiperSlide
                            key={item._id}
                            tag='li'
                            className='swuiper-wraper '>
                            <Seller key='{item._id}'  className='swiper-slide'  {...item} />
                        </SwiperSlide>


                    )
                })}




            </Swiper>

        </div>
    )
}

