import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Button from "@/components/Button";
import Image from "next/image";
const Hero: FC = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch ">
        <div className=" md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 ">
              Creating digital experience through code and creative design
            </h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start  gap-6">
              <Button
                variant="secondary"
                iconAfter={
                  <svg
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <symbol
                        className="size-5"
                        id="a"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </symbol>
                    </defs>
                    <g className="layer">
                      <use xlinkHref="#a" />
                    </g>
                  </svg>
                }
              >
                <span>View my work</span>
              </Button>
              <Button variant="text">Let&apos;s talk </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              src={heroImage}
              alt="mayportrat"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
