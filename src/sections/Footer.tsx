"use client";
import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, MouseEvent, useEffect } from "react";
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3  bg-green-400 rounded-full animate-pulse"></div>
            <span className="uppercase">One spot availabel for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl mt-8 font-extralight md:text-7xl lg:text-8xl"
                ref={scope}
              >
                Enough talk, let&apos;s make someting great together
              </h2>
              <Button
                variant="secondary"
                className="mt-8 md:mt-12"
                iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex group-hover/button:translate-x-1/2 transition-transform duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                }
              >
                sujandev1635@gmail.com
              </Button>
            </div>
            <div className="">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0 ">
                {navItems.map(({ label, href }) => (
                  <a key={label} href={href} onClick={handleClickMobileNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright 2025 &copy; sujan pramanik &buld;
          email:sujandev1635@gmail.com All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
