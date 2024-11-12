import React from "react";
import "./History.css";
import history from '../../../../../src/assets/images/history/history.jpeg'
import Image from "next/image";
const History = () => {
  return (
    <div className="mt-20">
      <div className="mb-10">
        <h2 className="text-center text-3xl font-bold">Our Journy </h2>
        <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
      </div>
      <section id="conference-timeline">
        <div className="timeline-start">Start</div>
        <div className="conference-center-line"></div>
        <div className="conference-timeline-content">
          {/* <!-- Article --> */}
          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-left">
                <h3 className="text-xl font-bold">Health Mela</h3>
                <p className="mt-3 block ">
                  When I orbited the Earth in a spaceship, I saw for the first
                  time how beautiful our planet is. Mankind, let us preserve and
                  increase this beauty, and not destroy it!{" "}
                </p>
              </div>
            </div>
            <div className="content-right-container">
              <div className="content-right">
                <div className="contentRightImgWrap">
                  <Image src={history} alt="history" width={500} height={300} />
                </div>
              </div>
            </div>
            <div className="meta-date">
              <span className="date">14</span>
              <span className="date">APR</span>
              <span className="date">2001</span>
            </div>
          </div>

          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-right">
                <div className="contentRightImgWrap">
                  <Image src={history} alt="history" width={500} height={300} />
                </div>
              </div>
            </div>
            <div className="content-right-container">


              <div className="content-left">
                <h3 className="text-xl font-bold">Health Mela</h3>
                <p className="mt-3 block ">
                  When I orbited the Earth in a spaceship, I saw for the first
                  time how beautiful our planet is. Mankind, let us preserve and
                  increase this beauty, and not destroy it!{" "}
                </p>
              </div>
            </div>
            <div className="meta-date">
            <span className="date">30</span>
              <span className="date">May</span>
              <span className="date">2001</span>
            </div>
          </div>



          <div className="timeline-article">
            <div className="content-left-container">

              <div className="content-left">
                <p>
                  When I orbited the Earth in a spaceship, I saw for the first
                  time how beautiful our planet is. Mankind, let us preserve and
                  increase this beauty, and not destroy it!{" "}
                  <span className="article-number">01</span>
                </p>
              </div>

            </div>
            <div className="content-right-container">
              <div className="content-right">
                <div className="contentRightImgWrap">
                  <Image src={history} alt="history" width={500} height={300} />
                </div>
              </div>

            </div>
            <div className="meta-date">
              <span className="date">18</span>
              <span className="month">APR</span>
            </div>
          </div>
          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-right">
                <div className="contentRightImgWrap">
                  <Image src={history} alt="history" width={500} height={300} />
                </div>
              </div>
            </div>
            <div className="content-right-container">


              <div className="content-left">
                <h3 className="text-xl font-bold">Health Mela</h3>
                <p className="mt-3 block ">
                  When I orbited the Earth in a spaceship, I saw for the first
                  time how beautiful our planet is. Mankind, let us preserve and
                  increase this beauty, and not destroy it!{" "}
                </p>
              </div>
            </div>
            <div className="meta-date">
              <span className="date">18</span>
              <span className="month">APR</span>
            </div>
          </div>
        </div>
        <div className="timeline-end">Load More </div>
      </section>

    </div>
  );
};

export default History;
