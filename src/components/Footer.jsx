import React from "react";
import {
  FaSquareInstagram,
  FaFacebook,
  FaMapLocationDot,
  FaLinkedin
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="footer-wrapper"  data-aos="fade-up">
      <div className="container ps-4 ps-lg-1">
        <div className="d-lg-flex justify-content-between">
          <div className="f-name ">
            <h3 className="logo">CODEFEST 2K25</h3>
            <p>
              <span className="d-block">
                Dive into the world of technology and innovation{" "}
              </span>
              at CodeFest 2K25. Join us on this thrilling journey!
            </p>
          </div>
          <div className="f-sub-name">
            <h3 className="f-sub-header">Quick Links</h3>
            <p className="q-links" onClick={() => scrollToSection("home")}>Home</p>
            <p className="q-links" onClick={() => scrollToSection("about")}>About Us</p>
            <p className="q-links" onClick={() => scrollToSection("events")}>Events</p>
            <p className="q-links" onClick={() => scrollToSection("contact")}>Contact</p>
          </div>

          <div className="f-sub-name">
            <h3 className="f-sub-header">Contact Us</h3>
            <p>
              <span className="d-block">G.S.T Road, Chinna Kolambakkam,</span>
              <span className="d-block"> Madhuranthagam(T.k), </span>{" "}
              Chengalpattu (D.t)-603308.
            </p>
          </div>
          <div className="f-sub-name">
            <h3 className="f-sub-header">More Details</h3>
            <p>Developers</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="f-copy-rights d-lg-flex justify-content-between align-items-center">
          <div>
            <p>@ 2025 CODEFEST2K25. All rights reserved.</p>
          </div>
          <div className="d-flex gap-2 gap-lg-5 align-items-center">
           <a href="https://www.instagram.com/codefest_2k25?igsh=MWFuejJweHJmaXJkYg%3D%3D" target="blank"> <FaSquareInstagram  /></a>
           <a href="https://www.facebook.com/KarpagaVinayagaCollegeOfEngineeringAndTechnology/?ref=nf&hc_ref=ARQUmie8IqCuuKYya12IY4m4Q160ERZPH9h3e00ACVNhirZAaU9go_vNR8IvnzkWQyk" target="blank">  <FaFacebook /></a>
           <a href="https://www.linkedin.com/school/karpaga-vinayaga-college-of-engineering-and-technology/posts/?feedView=all" target="blank"> <FaLinkedin /></a>
           <a href="https://www.google.co.in/maps/place/Karpaga+Vinayaga+College+of+Engineering+and+Technology/@12.5906875,79.9136875,17z/data=!3m1!4b1!4m6!3m5!1s0x3a531d49e3a4dc6f:0x2485bea2ae7907a2!8m2!3d12.5906875!4d79.9136875!16s%2Fg%2F1tfwnc_v?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" target="blank"> <FaMapLocationDot /></a>
           
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;