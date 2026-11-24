import image5 from "@/assets/images/hero_one.jpg";
import Image from "next/image";
function AboutUs() {
  return (
    <section className="mt-20 pb-16 lg:py-24" id="aboutus">
      <div className="container">
        <div className="flex justify-left">
          <p className="uppercase font-semibold text-xl tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-left bg-clip-text text-transparent">
            ABOUT ME
          </p>
          <hr className="order-t-2 border-white/5 mt-4 md:mt-5" />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-semibold md:text-5xl text-left mt-6">
            Know who am I
          </h2>
          <p className="text-left md:text-lg lg:text-xl text-white/60 mt-4 max-w-md">
            My journey in few words
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="lg:pb-16">
            <p className="text-justify mt-6">
             I am a dedicated legal professional committed to providing trusted legal advice, effective representation, and strategic solutions. My goal is to protect clients rights, uphold justice, and deliver reliable legal services with integrity and professionalism.
            </p>
            <a href="">
              <button className="bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl mt-8 font-semibold inline-flex items-center justify-center gap-2">
                <span>Download My CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1={7} y1={17} x2={17} y2={7} />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>
            </a>
          </div>
          <div className="relative mt-8 md:mt-10 lg:rotate-[8deg] lg:hover:rotate-[150deg] origin-center transition-transform duration-300">
            <Image
              src={image5}
              alt="Hero Image"
              className="-mb-4 md:mb-0 lg:absolute md:h-[70%] md:w-[90%] lg:h-full lg:w-auto lg:max-w-none lg:rotate-210"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
