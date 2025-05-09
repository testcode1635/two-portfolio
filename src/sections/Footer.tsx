"use client";
import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, MouseEvent, useEffect } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
const navItems = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "About Us",
    href: "#aboutus",
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
    label: "Our Questions",
    href: "#faqs",
  },
  {
    label: "My Blog",
    href: "#projectsection",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Footer",
    href: "#footer",
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
    <footer className="bg-[#20232B] text-white" id="footer">
      <div className="container">
        <div className="section mb-2">
          <div className="flex items-center gap-3">
            <div className="size-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="uppercase">One spot availabel for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl mt-8 font-extralight md:text-5xl lg:text-6xl"
                ref={scope}
              >
                We provide Courtkachari services to bring a common platform to
                all advocates in Bangladesh.
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
                courtkachari
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

              <div className="flex gap-4 mt-8">
                <a
                  href=""
                  className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <FaFacebook />
                </a>

                <a
                  href=""
                  className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <ImLinkedin />
                </a>

                <a
                  href=""
                  className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  href=""
                  className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href=""
                  className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href=""
                  className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <AiFillTikTok />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="py-6 text-white/30 text-sm text-center">
          Copyright 2025 &copy; sujan pramanik &buld;
          email:sujandev1635@gmail.com All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
