import React, { useEffect } from 'react';
import "./graduation.css";
import Data from './Data';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css'; // นำเข้าไฟล์สไตล์ของ AOS

const Graduation = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); 
  }, []);

  return (
    <section className="resume container section" id="graduation">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
          <div className='timeline grid'>
            {Data.map((val, id) => {
              if (val.category === "education") {
                return (
                  <div data-aos="fade-left" key={id}> {/* เอฟเฟกต์เลื่อนจากขวาไปซ้าย */}
                    <Card 
                      icon={val.icon} 
                      title={val.title}
                      year={val.year}  
                      desc={val.desc}
                    />
                  </div>
                );
              }
            })}
          </div>

          <div className='timeline grid'>
            {Data.map((val, index) => {
              if (val.category === "experience") {
                return (
                  <div data-aos="fade-left" key={index}> {/* เอฟเฟกต์เลื่อนจากขวาไปซ้าย */}
                    <Card 
                      icon={val.icon} 
                      title={val.title}
                      year={val.year}  
                      desc={val.desc}
                    />
                  </div>
                );
              }
            })}
          </div>
      </div>
    </section>
  );
}

export default Graduation;
