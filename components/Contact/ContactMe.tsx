import React, { useRef ,useState} from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

type Props = {};

const ContactMe = (props: Props) => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    enquiryType: "",
    subject:"",
    message:""
  })
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
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-28 ">
        <h4 className="text-2xl md:text-4xl font-semibold text-center cursor-default">
        For exclusive membership inquiries and expert assistance.{" "}
          <span className="text-[#F7AB0A] cursor-default">Get in touch!</span>
        </h4>

        <div className="space-y-3 ">
          
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">London, UK</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">contact@societasarcana.com</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col  space-y-2 w-fit  mx-auto "
        >
          <motion.div
            initial={{
              x: -100,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex space-x-1 sm:space-x-2 sm:justify-between  "
          >
            <input
              placeholder="Name"
              className="contactInput "
              type="text"
              style={{ width: "50%" }}
              name="name"
              required
              ref={nameInputRef}
              onClick={() => focusInput(nameInputRef)}
             
            />
            <input
              placeholder="Email"
              className="contactInput "
              type="email"
              style={{ width: "50%" }}
              name="email"
              required
              ref={emailInputRef}
              onClick={() => focusInput(emailInputRef)}
            />
          </motion.div>
          <motion.select
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="contactInput"
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
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            required
            ref={subjectInputRef}
            onClick={() => focusInput(subjectInputRef)}
          />
          <motion.textarea
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            placeholder="Message"
            className="contactInput"
            name="message"
            required
            ref={messageInputRef}
            onClick={() => focusInput(messageInputRef)}
          />
          <motion.button
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            type="submit"
         
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold transition duration-200  ease-in-out hover:drop-shadow-[0_0px_4px_#F7AB0A]"
          >
            Submit
          </motion.button>
        </form>
      </div>
      
    </div>
    <div className=" border-t border-white bg-black pb-4 pt-4 md:mx-auto md:w-full lg:mx-auto lg:w-full">
    <p className="mx-auto w-4/5 items-center text-center text-sm text-neutral-300 sm:mb-0">
      Societas Arcana is a exclusive membership club and registered in England and Wales (Company No. 15424596) 128
      City Road, London, EC1V 2NX
    </p>
  </div>
  </>
  );
};

export default ContactMe;