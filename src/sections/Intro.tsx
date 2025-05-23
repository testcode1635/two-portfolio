"use client";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
const Intro: FC = () => {
  //const [scope, animate] = useAnimate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, { once: true });
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  // useEffect(() => {
  //   new SplitType(scope.current.querySelector("h2"), {
  //     types: "lines,words",
  //     tagName: "span",
  //   });
  // }, [scope]);
  // useEffect(() => {
  //   if (inView) {
  //     animate(
  //       scope.current.querySelectorAll(".word"),
  //       {
  //         transform: "translateY(0%)",
  //       },
  //       {
  //         duration: 0.5,
  //         delay: stagger(0.2),
  //       }
  //     );
  //   }
  // }, [inView, animate, scope]);
  return (
    <section
      className="section  mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={sectionRef}
    >
      <div className="container ">
        <h2 className="text-4xl md:text-6xl lg:text-7xl lg:w-[80%]" ref={scope}>
          Building beautiful websites with clean code and thoughtful design to
          help your business succeed grow and stand out online
        </h2>
      </div>
    </section>
  );
};

export default Intro;
