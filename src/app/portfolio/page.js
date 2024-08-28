"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react"; 

const PortfolioListPage = () => {
  useWow()
  return (
    <MainLayout>
      <div
        className="portfolio-list-section scroll-margin pt-120 mb-120"
        id="portfolio-grid"
      >
        <div className="container">
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img
                    src="/assets/img/clients/accountiko.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <span>Client: Accountiko - (India)</span>
                  <h5>
                    <Link href="/portfolio">
                    Designing and developing the Accountiko India website.
                    </Link>
                  </h5>
                  <p>
                  Developing a detailed 100-page website for Accountiko, showcasing their accounting services and expertise.Unsing Web Development Technologies
                  </p>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Website</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Software</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img
                    src="/assets/img/clients/dashboard.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <span>Client: Accountiko </span>
                  <h5>
                    <Link href="/portfolio">
                      Accounitko DashBoard For Indian Complaince 
                    </Link>
                  </h5>
                  <p>
                  This web application aims to streamline the process of receiving, analyzing, and tracking applications. Built using React for the frontend and Django for the backend, the application will provide a seamless user experience and efficient process management.
                  </p>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    
                    <li>
                      <Link href="/portfolio">Software</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img
                    src="/assets/img/clients/atb-client.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <span>Client: allthingsbiznes.com</span>
                  <h5>
                    <Link href="/portfolio">
                     Dyanmic Webiste for Allthingsbiznes
                    </Link>
                  </h5>
                  <p>
                  The majority of the plain text sections provided have been modified, typically by incorporating human-generated or randomized words that do not significantly alter the overall meaning.
                  </p>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Graphic Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Software</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="800ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img
                    src="/assets/img/clients/biznes.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <span>Client: BiznesMagazine</span>
                  <h5>
                    <Link href="/portfolio">
                     Create a Dyanmic Blog application
                    </Link>
                  </h5>
                  <p>
                  We are building a robust blog application featuring dynamic pages and a full range of functionalities. This application is designed to offer a seamless blogging experience with advanced SEO capabilities to enhance visibility and engagement.
                  </p>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Website</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">SEO</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="eg-card2 style-2 mb-60 wow animate fadeInDown"
            data-wow-delay="800ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-img">
                  <img
                    src="/assets/img/clients/ecom.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-content">
                  <span>Client: Arifa Fashions</span>
                  <h5>
                    <Link href="/portfolio">
                      E - Comerce Webiste For Fashions
                    </Link>
                  </h5>
                  <p>
                  We're creating an e-commerce site with a smooth cart, intuitive admin dashboard, SEO optimization, and secure payment gateway integration.
                  </p>
                  <ul className="tag-list">
                    <li>
                      <Link href="/portfolio">Web Design</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Development</Link>
                    </li>
                    <li>
                      <Link href="/portfolio"> E - commerce</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">SEO</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <Link href="/portfolio" className="load-btn">
                <span>
                  Load More
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PortfolioListPage;
