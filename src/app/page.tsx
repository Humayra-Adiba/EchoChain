 import { PersonButton } from "@/Components/button";
 import ContactForm from "@/Components/form";
 import {persons} from "@/lib/data";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex justify-start items-center w-full flex-col h-full bg-background text-foreground pb-10">

      <div className="text-center py-[50px]">
        <h1 className="md:text-[81px] text-[40px] font-extrabold leading-[99.06px] tracking-[-3%]">
          Get in{" "}
          <span className="bg-gradient-to-r from-white from-10% via-secondary via-75% to-primary to-95% bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p className="md:text-[22px] text-[16px] font-medium leading-[26.63px] tracking-[-2%]">
          Contact with the EchoVerse Team!
        </p>
      </div>
      <div className="w-full max-w-[1092px] mx-auto bg-[#FFFFFF0A] border-2 rounded-[20px] border-[#0A0D170D] relative">
      <div className="left-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-primary" />
        <div className="right-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-secondary" />
        <div className="left-0 bottom-0 absolute size-[152px] rounded-full blur-[200px] bg-violet-800" />

        <div className="w-full h-full p-5 flex justify-between items-start relative z-20 flex-col md:flex-row">
          <div className="w-full max-w-[516px] relative flex flex-col justify-center items-center">
           <h2 className="font-semibold md:text-[32px] text-[20px] md:leading-[39.06px] leading-[20px] tracking-[-2%]">Let's Connect with our team!</h2> 
           <div className="flex flex-row gap-5 md:mt-5 mt-2 mb-2 md:mb-5">
            {persons.map((person) => (
              <PersonButton key={person.id}>{person.name}</PersonButton>
            ))}
          </div>
          <ContactForm />
          </div>
          

          <div className="w-full max-w-[516px] relative">
            <Image
              alt="Hablu Contact Form Image"
              src="/contact-form.png"
              width={516}
              height={536}
              className="w-full h-auto rounded-xl"
            />

            <div className="space-y-1.5 px-7 absolute bottom-10 text-center w-full">
              <p className="opacity-70 md:text-[16px] text-[15px]">
                For any problems or assistance, please contact with the EchoVerse team. We are always ready to help! 😊
              </p>
              <p className="font-bold inline-block opacity-80 bg-gradient-to-r from-pink-600  to-indigo-400 text-transparent bg-clip-text md:px-32 px-8 ">~EchoVerse Team~</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;