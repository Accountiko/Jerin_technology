import React from "react";
import Marquee from "react-fast-marquee";
const LogoMarquee = () => {
  return (
    <div
      className="logo-section mb-110 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="container-fluid">
        <div className="logo-wrap">
          <div className="logo-title">
            <h6>We Worked With Global Largest Brand</h6>
          </div>
          <div className="logo-area">
            <div className="marquee_text2">
              <Marquee>
                <a href="#">
                  <img width={100} src="assets/img/homepage/ATB logo small.png" alt="" />
                </a>
                <a href="#">
                  <img width={100} src="assets/img/homepage/accountiko uae logo.png" alt="" />
                </a>
                <a href="#">
                  <img width={80} src="assets/img/homepage/saadan logo small.png" alt="" />
                </a>
                <a href="#">
                  <img width={70} src="assets/img/homepage/ploxygen small.png" alt="" />
                </a>
                <a href="#">
                  <img width={100} src="assets/img/homepage/bizneslogo.png" alt="" />
                </a>
                <a href="#">
                  <img width={80} src="assets/img/homepage/opal logo.png" alt="" />
                </a>
                
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
