import React,{useEffect} from 'react'
import './Services.css'
import sidebar from '../img/sidebar.png'
import ecommerce from '../img/ecommerce.png'
import hoc from '../img/hoc.png'
import musicapp from '../img/musicapp.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Services = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
}, []);
  return (
    <div>
      <div id='services' className='services'>
           <p>SERVICES...!</p>
        <hr/>
        <div className='services-content'>
        <div className='services left'>
            <span id='cv'>For more info! </span>
            <span>It is recommended that you download the CV below</span>
            <button className='svc-btn'>Download CV</button>
  
              <div>
              <Swiper className='swiper' modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={true}
              pagination={{clickable: true}}
              >
              <SwiperSlide>
                  <img src={ecommerce} alt="" />  
              </SwiperSlide>
              <SwiperSlide>
                    <img src={hoc} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={musicapp} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={sidebar} alt="" />
              </SwiperSlide>
              </Swiper>
              </div>

        </div>
        <div className='services right'>
        <div className='flex1' data-aos="zoom-in">
        <div data-aos="zoom-in">
        <span>Software development</span>
        <span>Languages such as</span>
        <hr/>
        <ul>
          <li>Javascript(React and Node)</li>
          <li>PHP</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
    </div>
    <div data-aos="zoom-in">
        <span>Repair and maintenance</span>
        <hr/>
            <ul>
                <li>Operating systems installaion</li>
                <li>Software installation and upgrades</li>
                <li>Hardware related issues</li>
            </ul>
    </div>
        </div>
            <div className='flex2'>
            <div data-aos="zoom-in">
            <span>Network and systems administration</span>
            <hr/>
            <ul>
                <li>Setting up a network</li>
                <li>Managing a network</li>
            </ul>
        </div>
        <div data-aos="zoom-in">
            <span>Database administration and systems analysis</span>
            <hr/>
            <ul>
                <li>MySQL</li>
                <li>Project management</li>
            </ul>
        </div>
            </div>
           
        </div>
        </div>
    
      </div>
    </div>
  )
}

export default Services
