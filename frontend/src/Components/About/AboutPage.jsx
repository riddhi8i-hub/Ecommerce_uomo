import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/about-1.jpg";
import about2 from "../../Assets/About/about-2.jpg";

import Services from "../../Components/Home/Services/Services";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../../Assets/Brands/brand1.png";
import brand2 from "../../Assets/Brands/brand2.png";
import brand3 from "../../Assets/Brands/brand3.png";
import brand4 from "../../Assets/Brands/brand4.png";
import brand5 from "../../Assets/Brands/brand5.png";
import brand6 from "../../Assets/Brands/brand6.png";
import brand7 from "../../Assets/Brands/brand7.png";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About RiddhiMart</h2>
        <img src={about1} alt="" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <h4>
            The RiddhiMart Group is one of India’s leading digital commerce entities and includes group companies RiddhiMart, Myntra, RiddhiMart Wholesale, RiddhiMart Health+, and Cleartrip.
          </h4>
          <p>
            Started in 2025, RiddhiMart has enabled millions of sellers, merchants, and small businesses to participate in India's digital commerce revolution. With a registered customer base of more than 500 million, RiddhiMart's marketplace offers over 150 million products across 80+ categories. Today, there are over 14 lakh sellers on the platform, including Shopsy sellers. With a focus on empowering and delighting every Indian by delivering value through technology and innovation, RiddhiMart has created lakhs of jobs in the ecosystem while empowering generations of entrepreneurs and MSMEs. RiddhiMart is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns, which are customer-centric innovations that have made online shopping more accessible and affordable for millions of Indians
          </p>
          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                At RiddhiMart, we are dedicated to the cause of maximising for our customers, stakeholders and the planet. We achieve this when Flipsters maximise themselves on the dimensions of their own choice — be it their potential, impact, voice, ideas, influence, well-being, and more.
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
                RiddhiMart’s Workplace Equality charter is built on the pillars of trust, inclusion, support, recognition and genuine care.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about2} alt="" />
            </div>
            <div className="textContent">
              <h5>The Company</h5>
              <p>
                Through our powerful partnerships with communities, civil society organisations, and coalitions, we seek to drive positive impact with ecosystem conversations, enable cross learning and contribute to building a sustainable future for all. As we start our journey, we know that it would not be easy. We believe that it is important to develop a culture of sustainability where we can bring everyone together through our journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="companyPartners">
        <h5>Company Partners</h5>
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AboutPage;
