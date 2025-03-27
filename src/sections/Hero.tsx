"use client";
import { FC, useEffect, useRef } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Button from "@/components/Button";
import Image from "next/image";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { motion, useAnimate, useScroll, useTransform } from "motion/react";
//import SplitType from "split-type";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });
  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation]);
  //12/5 = 2.4*100=240
  // useEffect(() => {
  //   new SplitType(titleScope.current, {
  //     types: "lines,words",
  //     tagName: "span",
  //   });
  //   titleAnimate(
  //     titleScope.current.querySelectorAll(".word"),
  //     {
  //       transform: "translateY(0)",
  //     },
  //     {
  //       duration: 0.5,
  //       delay: stagger(0.2),
  //     }
  //   );
  // }, []);
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className=" md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 "
              ref={scope}
            >
              Creating digital experience through code and creative design
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start  gap-6">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.75, duration: 0.5 }}
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:translate-x-1/2 transition-transform duration-500 ">
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
                      </div>
                    </div>
                  }
                >
                  <span>View my work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                <Button variant="text">Let&apos;s talk </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full "
            style={{
              width: portraitWidth,
            }}
          >
            <Image
              src={heroImage}
              alt="mayportrat"
              className="size-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="md:h-[200vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
