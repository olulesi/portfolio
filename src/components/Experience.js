import React from 'react'
import Nav from './Nav'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';

import GA from '../images/faviconGA.ico';
import intoUni from '../images/intoUni.png';
import UOL from '../images/UOL.png';
import Ardmore from '../images/ardmore (1).png';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);


function Experience() {



  return (
    <>
      <Nav />
      <section className="experience-wrapper">
        <Swiper
          style={{ width: '100%', padding: '50px 0', display: 'flex', justifyContent: 'center' }}
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={2}
          effect="coverflow"
          pagination={{ clickable: true }}
          grabCursor={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }
          }>
          <SwiperSlide style={{ height: '500px' }}>
            <div className="experience-card">
              <div className="experience-title">
                <div className="xp-imgBx">
                  <img src={GA} alt="GA" />
                </div>
                <h3>General Assembly</h3>
              </div>
              <div className="experience-date">
                <p className="experience-info">
                  Software Engineering Immersive (Remote)
                </p>
                <p className="experience-info">
                  Nov 2020 – Feb 2021
                </p>
              </div>
              <div className="ui divider xp-div"></div>
              <ul className="experience-content">
                <div>
                  GA was a 12-week intensive learning environment that helped me build on my existing programming knowledge and where I am able to build full-stack applications in multiple ways. This involved daily stand-ups, online-lessons, labs, pair-coding and group and individual projects.
                </div>
                <li>
                  For full project breakdown please view the projects section above.
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: '500px', borderRadius: '20px' }}>
            <div className="experience-card">
              <div className="experience-title">
                <div className="xp-imgBx">
                  <img src={intoUni} alt="GA" />
                </div>
                <h3>IntoUniversity (Mentorship)</h3>
              </div>
              <div className="experience-date">
                <p className="experience-info">
                  University Student Volunteer (Mentoring)
                </p>
                <p className="experience-info">
                  Feb – Oct 2020
                </p>
              </div>
              <div className="ui divider xp-div"></div>
              <ul className="experience-content">
                <div>
                  Worked in the North Liverpool branch as a mentor to support a young person from a disadvantaged background. During my time there, I was able to help him visualise what he wanted to study and why. In addition, helped structure his time to work towards his goals proactively. Meetings happened weekly at the centre but later converted into Zoom calls due to the Coronavirus.
                </div>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: '500px' }}>
            <div className="experience-card">
              <div className="experience-title">
                <div className="xp-imgBx">
                  <img src={UOL} alt="GA" />
                </div>
                <h3>University of Liverpool</h3>
              </div>
              <div className="experience-date">
                <p className="experience-info">
                  Computer Science (Bsc)
                </p>
                <p className="experience-info">
                  Sept 2017 – Jun 2020
                </p>
              </div>
              <div className="ui divider xp-div"></div>
              <ul className="experience-content">
                <div>
                  Modules: Programming in Python, Format Methods, Intro to Game Theory, Software Engineering, Artificial Intelligence, Data Structures and Algorithms, Computer-Based Trading in Financial Markets, Computer Systems.
                </div>
                <li>Designed, wrote, compiled tested and executed programs using Java, Python, Flutter, R(Programming Language).</li>
                <li>Gain an understanding of machine learning, and its different algorithms.</li>
                <li>Establish a strong knowledge in the use of high-level language to implement algorithms.</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: '500px' }}>
            <div className="experience-card">
              <div className="experience-title">
                <div className="xp-imgBx">
                  <img src={Ardmore} alt="GA" />
                </div>
                <h3>Ardmore Language Schools</h3>
              </div>
              <div className="experience-date">
                <p className="experience-info">
                  Activity Leader
                </p>
                <p className="experience-info">
                  Jun-Jul 2018
                </p>
              </div>
              <div className="ui divider xp-div"></div>
              <ul className="experience-content">
                <div>
                Worked as an activity leader for a 4-week contract at the residential Ardmore Language camps for children aged 9-17, as part of the activity leaders team as well as working alongside the welfare team. As part of a team of 4  I was responsible for:
                </div>
                <li>Planning and organisation of the activity programs.</li>
                <li>Leading the activities to groups of up to 150 international students.</li>
                <li>Adapting and creatively coming up with games to engage students if they wanted to do something else or if they were more than expected.</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
export default Experience