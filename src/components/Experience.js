import React from 'react'
import Nav from './Nav'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow ]);


function Experience() {



  return (
    <>
      <Nav />
      <section className="experience-wrapper">
        <Swiper 
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={2}
          effect={'coverflow'}
          pagination={{ clickable: true}}
          grabCursor={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,

          }
          }
        className="swiper-container">
          <SwiperSlide className="swiper-slide">
            <div className="experience-card">
              <div className="experience-title"></div>
              <div className="experience-content">
                <p>
                  GA was a 12-week intensive learning environment that helped me build on my existing programming knowledge and where I am able to build full-stack applications in multiple ways. This involved daily stand-ups, online-lessons, labs, pair-coding and group and individual projects.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="experience-card">
              <div className="experience-title"></div>
              <div className="experience-content">
                <p>
                  Worked as an activity leader for a 4-week contract at the residential Ardmore Language camps for children aged 9-17, as part of the activity leaders team as well as working alongside the welfare team. As part of a team of 4  I was responsible for:

                  Planning and organisation of the activity programs.
                  Leading the activities to groups of up to 150 international students.
                  Adapting and creatively coming up with games to engage students if they wanted to do something else or if they were more than expected.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="experience-card">
              <div className="experience-title"></div>
              <div className="experience-content">
                <p>
                  Modules: Programming in Python, Format Methods, Intro to Game Theory, Software Engineering, Artificial Intelligence, Data Structures and Algorithms, Computer-Based Trading in Financial Markets, Computer Systems.
                  Designed, wrote, compiled tested and executed programs using Java, Python, Swift, R
                  Gain an understanding of machine learning, and its different algorithms
                  Establish a strong knowledge in the use of high-level language to implement algorithms
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="experience-card">
              <div className="experience-title"></div>
              <div className="experience-content">
                <p>
                Worked in the North Liverpool branch as a mentor to support a young person from a disadvantaged background. During my time there, I was able to help him visualise what he wanted to study and why. In addition, helped structure his time to work towards his goals proactively. Meetings happened weekly at the centre but later converted into Zoom calls due to the Coronavirus.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
export default Experience