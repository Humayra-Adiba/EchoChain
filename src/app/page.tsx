
import Image from "next/image";
import Contact from "@/Components/contact";


const HomePage = () => {


  return (
    <div className="flex justify-start items-center w-full flex-col h-full bg-gradient-to-b from-background to-primary/10 pb-5 md:pb-10">

      <div className="text-center md:py-[50px] py-5">
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
      <div className="w-full max-w-[1092px] mx-auto bg-[#FFFFFF0A] border-2 rounded-[20px] border-blue-950 relative ">
      <div className="left-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-primary" />
        <div className="right-0 top-0 absolute size-[152px] rounded-full blur-[200px] bg-secondary" />
        <div className="left-0 bottom-0 absolute size-[152px] rounded-full blur-[200px] bg-violet-800" />

        <div className="w-full h-full p-5 flex justify-between items-start relative z-20 flex-col md:flex-row">
          <Contact/>
          

          <div className="w-full max-w-[516px] relative">
            <Image
              alt="Hablu Contact Form Image"
              src="/contact-form.png"
              width={516}
              height={536}
              className="w-full h-auto rounded-xl"
            />

            <div className="space-y-1.5 px-7 absolute bottom-10 text-center w-full">
              <p className="opacity-70 md:text-[16px] text-[15px] ">
              Need help? The EchoVerse team is just a message away! We're always here to assist you with care and enthusiasm. ✨😊
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