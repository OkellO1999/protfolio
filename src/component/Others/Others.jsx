import React from 'react'
import './Others.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation' 
import 'swiper/css/scrollbar'
import image1 from '../img/images/image10.jpg'
import image2 from '../img/images/image11.jpg'
import image3 from '../img/images/image12.jpg'
import image4 from '../img/images/emma.jpg'
import image5 from '../img/images/image6.jpg'
import image6 from '../img/images/IMG_20220923_174640.jpg'
import image7 from '../img/images/IMG_20220923_120713.jpg'
import image8 from '../img/images/image3.jpg'
import image9 from '../img/images/image7.jpg'
import image10 from '../img/images/IMG_20220923_120713.jpg'
import image11 from '../img/images/image9.jpg'
import image12 from '../img/images/IMG_20220922_115451.jpg'

const Others = () => {
  return (
    <div>
    <div className='Others-content' id='others'>
        <span style={{color: "green", marginTop: "2"}}>Always get exceptional work from me!</span>
    </div>
    <Swiper className='swipe' modules={[Navigation, Autoplay, Pagination]}
    slidesPerView={2}
    navigation
    autoplay={true}
    pagination={{clickable: true}}
    >
        <SwiperSlide>
        
        <span className='txt'>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
       
        <button className='btn'>Learn more</button>

        </p>
        </span>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
            <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image8} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image12} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image6} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image7} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image9} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image10} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <img src={image11} alt="" />
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Others
