"use client";
import Image from "next/image";
import img1 from "../../../../assets/images/initiatives/3-1.jpg";
import img2 from "../../../../assets/images/initiatives/1.jpeg";
import img3 from "../../../../assets/images/initiatives/1-1.jpg";
import Container from "@/components/share/Container";
import Banner from "./Banner";
import { Button } from "@mui/material";
import {
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import ZRFForm from "@/components/Forms/Form";
import ZRFInput from "@/components/Forms/Input";
import ZRFTextArea from "@/components/Forms/TextArea";
import { pink } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Contact = () => {
  const handleSubmit = () => {
    console.log();
  };
  return (
    <>
      <div>
        <Banner />
        <Container>
          <div className="container mx-auto lg:px-4 my-20 lg:flex gap-10">
            {/* Contact Information Section */}
            <div className="lg:w-1/2 mb-12">
              <div className="bg-green-600 p-5">
                <h2 className="text-2xl font-bold mb-4 text-white font-serif">
                  Contact Information
                </h2>
                <div className="text-white">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      <LocationOnIcon />
                      Location
                    </h3>
                    <p className="text-white">
                      1234 Street Name, City, State, 12345
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      <CallOutlinedIcon />
                      Call Us
                    </h3>
                    <p className="text-white">(123) 456-7890</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      <EmailOutlinedIcon />
                      Email Us
                    </h3>
                    <p className="text-white">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <div className=" bg-white shadow-md p-5 border">
                <h2 className="text-2xl font-serif font-bold mb-4">
                  Let’s Talk!
                </h2>
                <p className="text-gray-700 mb-6">
                  Contact us to get, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ainim veniam.
                </p>
                <ZRFForm onSubmit={handleSubmit}>
                  <div className="lg:flex gap-2 w-full">
                    <ZRFInput
                      type="text"
                      name="name"
                      required
                      label="Name"
                      fullWidth
                    />
                    <ZRFInput
                      type="email"
                      name="email"
                      required
                      label="Email"
                      fullWidth
                    />
                  </div>
                  <div className="lg:flex gap-2">
                    <ZRFInput type="tel" name="phone" label="Phone" fullWidth />
                    <ZRFInput
                      type="text"
                      name="subject"
                      label="Subject"
                      fullWidth
                    />
                  </div>
                  <div>
                    <ZRFTextArea
                      name="message"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "gray",
                          },
                          "&:hover fieldset": {
                            borderColor: "darkgray",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "blue",
                          },
                        },
                      }}
                      placeholder="Write something..."
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    <Checkbox {...label} defaultChecked />I agree to the terms
                    and privacy policy
                  </div>

                  <Button type="submit" disableElevation>
                    Contact Us
                  </Button>
                </ZRFForm>
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
