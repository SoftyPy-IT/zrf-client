/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./History.css";
import health from '../../../../../src/assets/images/history/healt2.jpeg'
import history from '../../../../../src/assets/images/history/history.jpeg'
import poverty from '../../../../../src/assets/images/history/poverty.jpeg'
import medical from '../../../../../src/assets/images/history/medical.jpeg'
import seed from '../../../../../src/assets/images/history/seed2.jpeg'
import chattogramm from '../../../../../src/assets/images/history/chattogramm.jpeg'
import asma from '../../../../../src/assets/images/history/health.jpeg'
import winter from '../../../../../src/assets/images/history/winter.jpeg'
import training from '../../../../../src/assets/images/history/asma-care.jpeg'
import cloting from '../../../../../src/assets/images/history/history.jpeg'
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
                <h3 className="text-xl font-bold">Health Fair</h3>
                <p className="mt-3 block ">
                  Ziaur Rahman Foundation organized a health fair at Belfulia High School in Rupsha, Khulna. The event was graced by the presence of the then Mayor of Khulna, Sheikh Tayebur Rahman, as the chief guest.
                </p>
              </div>
            </div>
            <div className="content-right-container">
              <div className="content-right">
                <div className="contentRightImgWrap">
                  <Image src={health} alt="history" width={500} height={300} />
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
              <div className="content-left">
                <div className="contentRightImgWrap">
                  <Image src={medical} alt="history" width={500} height={300} />
                </div>
              </div>
            </div>
            <div className="content-right-container">
              <div className="content-right">
                <h3 className="text-xl font-bold capitalize"> free medical camp </h3>
                <p className="mt-3 block capitalize">
                  In commemoration of the 20th martyrdom anniversary of Shaheed President Ziaur Rahman, a free medical camp was organized in Karail, Jatrabari, Dhaka.
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
                <h3 className="text-xl font-bold capitalize"> Poverty Alleviation Program </h3>
                <p className="mt-3 block capitalize">
                  Ziaur Rahman Foundation launched its Poverty Alleviation Program. The event was inaugurated by the President of the Foundation, Mr. Tarique Rahman, as the chief guest.
                </p>
              </div>

            </div>
            <div className="content-right-container">
              <div className="content-right">
                <div className="contentRightImgWrap">
                  <Image src={poverty} alt="history" width={500} height={300} />
                </div>
              </div>

            </div>
            <div className="meta-date">
              <span className="date">02</span>
              <span className="date">April</span>
              <span className="date">2003</span>
            </div>
          </div>


          <div className="timeline-article">


            <div className="content-left-container">

              <div className="content-left">
                <div className="contentRightImgWrap">
                  <Image src={asma} alt="history" width={500} height={300} />
                </div>
              </div>

            </div>
            <div className="content-right-container">
              <div className="content-right">
                <h3 className="text-xl font-bold capitalize">  Asthma Care and Prevention Center </h3>
                <p className="mt-3 block capitalize">
                  Ziaur Rahman Foundation inaugurated the Asthma Care and Prevention Center in Bogura. The center was officially opened by the then Health Minister, Dr. Khandaker Mosharraf Hossain.
                </p>
              </div>

            </div>


            <div className="meta-date">
              <span className="date">10</span>
              <span className="date">April</span>
              <span className="date">2003</span>
            </div>
          </div>


          <div className="timeline-article">
            <div className="content-left-container">

              <div className="content-left">
                <h3 className="text-xl font-bold capitalize"> Komol Seed Program </h3>
                <p className="mt-3 block capitalize">
                  Ziaur Rahman Foundation launched the "Komol Seed" initiative at the Seafood Center on Airport Road. The event was inaugurated by the Foundation's Executive Director, Professor Dr. Farhad Halim Donar. The occasion was also attended by Dr. Md. Shafiqul Haider Parvez, a founding member of the Foundation and a current member of the working committee.
                </p>
              </div>

            </div>

            <div className="content-right-container">
              <div className="content-right">
                <div className="contentRightImgWrap">
                  <Image src={seed} alt="history" width={500} height={300} />
                </div>
              </div>

            </div>


            <div className="meta-date">
              <span className="date">16</span>
              <span className="date">November</span>
              <span className="date">2003</span>
            </div>
          </div>




          <div className="timeline-article">

            <div className="content-left-container">

              <div className="content-left">
                <div className="contentRightImgWrap">
                  <Image src={training} alt="history" width={500} height={300} />
                </div>
              </div>

            </div>

            <div className="content-right-container">
              <div className="content-right">
                <h3 className="text-xl font-bold capitalize">   Foundation initiated a training program </h3>
                <p className="mt-3 block capitalize">
                  Ziaur Rahman Foundation initiated a training program at the Asthma Care and Prevention Center in Bogura. The program was inaugurated by Dr. Mizanur Rahman.
                </p>
              </div>

            </div>

            <div className="meta-date">
              <span className="date">10</span>
              <span className="date">December</span>
              <span className="date">2007</span>
            </div>
          </div>


          <div className="timeline-article">
            <div className="content-left-container">

              <div className="content-left">
                <h3 className="text-xl font-bold capitalize"> winter clothing distribution program </h3>
                <p className="mt-3 block capitalize">
                  Ziaur Rahman Foundation organized a winter clothing distribution program in Lebutala and Fatehpur of Jashore, in Narail Sadar. The event was led by the Foundation’s President, Mr. Tarique Rahman.
                </p>
              </div>

            </div>
            <div className="content-right-container">
              <div className="content-right">
                <div className="contentRightImgWrap">
                  <Image src={winter} alt="history" width={500} height={300} />
                </div>
              </div>

            </div>
            <div className="meta-date">
              <span className="date">27</span>
              <span className="date">December</span>
              <span className="date">2003</span>
            </div>
          </div>


          <div className="timeline-article">
            <div className="content-left-container">

              <div className="content-left">
                <div className="contentRightImgWrap">
                  <Image src={chattogramm} alt="history" width={500} height={300} />
                </div>
              </div>

            </div>



            <div className="content-right-container">
              <div className="content-right">
                <p className="mt-3 block capitalize">
                  In celebration of the birth anniversary of Shaheed President Ziaur Rahman, the Ziaur Rahman Foundation organized a free medical camp in Chattogram. The event was attended by the Foundation's President, Mr. Tarique Rahman.
                </p>
              </div>

            </div>

            <div className="meta-date">
              <span className="date">19</span>
              <span className="date">January</span>
              <span className="date">2004</span>
            </div>
          </div>



        </div>
        <div className="timeline-end">Load More </div>
      </section>

    </div>
  );
};

export default History;
