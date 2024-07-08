import React, { useRef, useState } from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

type Props = {};

const ContactMe = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const form: any = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      form.current!,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    ).then((result) => {
      form.current?.reset();
      toast.success("Thank you for contacting us! We will get back to you shortly");
    }).catch((error) => {
      console.error(error);
      toast.error(`Something went wrong: ${error.text}`);
    });
  };

  const nameInputRef: any = useRef();
  const emailInputRef: any = useRef();
  const subjectInputRef: any = useRef();
  const messageInputRef: any = useRef();
  const focusInput = (inputRef: any) => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="border-t border-white w-screen h-screen flex flex-col items-center justify-center py-20">
        <div className="flex flex-col text-center items-center md:text-left px-6 md:px-10 justify-center gap-10 mx-auto z-20">
          <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-10">
            Contact
          </h3>

          <div className="flex flex-col space-y-10 w-full md:w-3/5 lg:w-2/5">
            <h4 className="text-2xl md:text-4xl font-semibold text-center md:text-left cursor-default leading-relaxed">
              For exclusive membership inquiries and expert assistance.{" "}
              <span className="text-[#F7AB0A] cursor-default">Get in touch!</span>
            </h4>

            <div className="space-y-3">
              <div className="flex items-center space-x-5 justify-center md:justify-start">
                <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                <p className="text-lg md:text-2xl">London, UK</p>
              </div>

              <div className="flex items-center space-x-5 justify-center md:justify-start">
                <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                <p className="text-lg md:text-2xl">contact@societasarcana.com</p>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4 w-full mx-auto"
            >
              <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <input
                  placeholder="Name"
                  className="contactInput w-full sm:w-1/2"
                  type="text"
                  name="name"
                  required
                  ref={nameInputRef}
                  onClick={() => focusInput(nameInputRef)}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Email"
                  className="contactInput w-full sm:w-1/2"
                  type="email"
                  name="email"
                  required
                  ref={emailInputRef}
                  onClick={() => focusInput(emailInputRef)}
                  onChange={handleInputChange}
                />
              </motion.div>
              <motion.select
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="contactInput w-full"
                name="enquiryType"
                required
                onChange={handleInputChange}
              >
                <option value="">Select Enquiry Type</option>
                <option value="general">General</option>
                <option value="membership">Membership</option>
                <option value="consultation">Consultation</option>
                <option value="events">Events</option>
                <option value="press">Press/Media</option>
                <option value="partnerships">Partnerships</option>
                <option value="veterans">Veteran Memberships</option>
                <option value="pro-bono">Pro Bono</option>
                <option value="investors">Investors</option>
                <option value="other">Other</option>
              </motion.select>
              <motion.input
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                placeholder="Subject"
                className="contactInput w-full"
                type="text"
                name="subject"
                required
                ref={subjectInputRef}
                onClick={() => focusInput(subjectInputRef)}
                onChange={handleInputChange}
              />
              <motion.textarea
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                placeholder="Message"
                className="contactInput w-full"
                name="message"
                required
                ref={messageInputRef}
                onClick={() => focusInput(messageInputRef)}
                onChange={handleInputChange}
              />
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                type="submit"
                className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold transition duration-200 ease-in-out hover:drop-shadow-[0_0px_4px_#F7AB0A]"
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white bg-black pb-4 pt-4 w-full">
        <p className="mx-auto w-4/5 text-center text-sm text-neutral-300">
          Societas Arcana is an exclusive membership club and registered in England and Wales (Company No. 15424596) 128 City Road, London, EC1V 2NX
        </p>
      </div>
    </>
  );
};

export default ContactMe;
