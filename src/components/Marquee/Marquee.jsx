import React, { useEffect } from "react";
import "./marquee.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // นำเข้าไฟล์สไตล์ของ AOS

const Marquee = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // เริ่มการทำงานของ AOS
  }, []);

  return (
    <div className="marquee-container" data-aos="fade-down" data-aos-easing="ease-out-quart">
      <div className="marquee-text" data-aos="fade-out" data-aos-anchor-placement="top-bottom">
      Recent Graduate Computer Science.
      </div>
    </div>
  );
};

export default Marquee;

