"use client";
import Container from "@/components/share/Container";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/provider/LanguageProvider";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Contact = () => {
  const { language } = useLanguage()

  return (
    <>
      <div>
        <CommonBanner title={language == 'ENG' ? 'Contact Us' : 'আমাদের সাথে যোগাযোগ করুন'} />
        <Container>
          <div className="container mx-auto lg:px-4 my-20 lg:flex gap-10">
            <div className="lg:w-1/2 mb-12">
              <div className="bg-green-600 p-5">
                <h2 className="text-2xl font-bold mb-4 text-white font-serif">

                  {language == 'ENG' ? 'Contact Information' : 'যোগাযোগের তথ্য'}
                </h2>
                <div className="text-white">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      <LocationOnIcon sx={{ marginRight: "5px" }} />
                      {language == 'ENG' ? 'Location' : 'অবস্থান'}
                    </h3>
                    <p className="text-white">

                      {language == 'ENG' ? ' House#4, Road#7, Niketon Gate #2, Gulshan-1, Dhaka-1212, Bangladesh.' : 'বাড়ি#৪, রোড#৭, নিকেতন গেট#২, গুলশান-১, ঢাকা-১২১২, বাংলাদেশ।'}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      <CallOutlinedIcon sx={{ marginRight: "5px" }} />
                      {language == 'ENG' ? 'Location' : 'আমাদের কল করুন'}
                    </h3>
                    <p className="text-white">  {language == 'ENG' ? '01819213236' : '01819213236'} </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      <EmailOutlinedIcon sx={{ marginRight: "5px" }} />
                      {language == 'ENG' ? ' Email Us' : 'আমাদের ইমেল করুন'}
                    </h3>
                    <p className="text-white">donaroncolog@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className=" bg-white shadow-md p-5 border">
                <h2 className="text-2xl font-serif font-bold mb-4">
                  {language == 'ENG' ? 'Contact Us!' : ' যোগাযোগ করুন!'}
                </h2>
                {/* <p className="text-gray-700 mb-6">
                  {language == 'ENG' ? ' Contact us to get, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ainim veniam.' : 'পেতে আমাদের সাথে যোগাযোগ করুন, কনসেক্টেটুর adipisising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ইউটেনিম অ্যানিম ভেনিয়াম।'}

                </p> */}
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
        {/* Map Section */}
        <div className="mt-12">
          <div className="flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.440609721915!2d90.41482048380377!3d23.797132799278497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a617958589%3A0xe623614dfdafa8ae!2sBNP%20Chairperson&#39;s%20Office%2C%20Rd%2088%2C%20Dhaka%201212!5e1!3m2!1sen!2sbd!4v1725702340218!5m2!1sen!2sbd"
              width="100%"
              height="600"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
