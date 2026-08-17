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
  const { language } = useLanguage();

  return (
    <>
      <div>
        <CommonBanner
          title={language == "ENG" ? "Contact Us" : "আমাদের সাথে যোগাযোগ করুন"}
        />
        <Container>
          <div className="container mx-auto lg:px-4 my-5 md:my-20 lg:flex gap-10">
            <div className="lg:w-1/2 mb-12">
              <div className="bg-green-600 p-5 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-white font-serif">
                  {language == "ENG" ? "Contact Information" : "যোগাযোগের তথ্য"}
                </h2>
                <div className="text-white">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      <LocationOnIcon sx={{ marginRight: "5px", color: 'white' }} />
                      {language == "ENG" ? "Location" : "অবস্থান"}
                    </h3>
                    <p className="text-white/90">
                      {language == "ENG"
                        ? "2nd Floor, House No-02, Road No- 23/A, Gulshan-1, Dhaka-1212, Bangladesh (Near Gulshan-1, Post Office)"
                        : "২য় তলা, বাড়ি নং-০২, রোড নং-২৩/এ, গুলশান-১, ঢাকা-১২১২, বাংলাদেশ (গুলশান-১ পোস্ট অফিসের নিকটে)।"}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      <CallOutlinedIcon sx={{ marginRight: "5px", color: 'white' }} />
                      {language == "ENG" ? "Call Us" : "আমাদের কল করুন"}
                    </h3>
                    <p className="text-white/90">
                      {language == "ENG" ? "01817-226644" : "০১৮১৭-২২৬৬৪৪"}
                    </p>
                    <p className="text-white/90">
                      {language == "ENG" ? "01830-973973" : "০১৮৩০-৯৭৩৯৭৩"}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      <EmailOutlinedIcon sx={{ marginRight: "5px", color: 'white' }} />
                      {language == "ENG" ? "Email Us" : "আমাদের ইমেল করুন"}
                    </h3>
                    <p className="text-white/90">zrfinof.bd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-[#0A1A12] rounded-2xl shadow-lg p-6 border border-[#216740]/20">
                <h2 className="text-2xl font-serif font-bold mb-4 text-white">
                  {language == "ENG" ? "Contact Us!" : "যোগাযোগ করুন!"}
                </h2>
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