"use client";

import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";
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
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimation] = useAnimate();
  const [bottomLineScope, bottomLineAnimation] = useAnimate();
  const [navScope, navAnimation] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimation([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);
      bottomLineAnimation([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
      navAnimation(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      topLineAnimation([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      bottomLineAnimation([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      navAnimation(navScope.current, {
        height: 0,
      });
    }
  }, [
    isOpen,
    topLineAnimation,
    topLineScope,
    bottomLineAnimation,
    bottomLineScope,
    navScope,
    navAnimation,
  ]);
  // const handleClickMobileViewItem = (e: MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   setIsOpen(false);
  //   const url = new URL(e.currentTarget.href);
  //   const hash = url.hash;
  //   const target = document.querySelector(hash);
  //   if (!target) return;
  //   target.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <header>
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-[#283541] z-10"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 border-t last:border-b border-stone-800 py-4 group/nav-item relative isolate"
              onClick={() => {
                setIsOpen(false);
                const target = document.querySelector(href);
                if (!target) return;
                target.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="container !mix-w-full flex items-center justify-between">
                <span className="text-2xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
              <div className="absolute w-full h-0 bg-[#030712] group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <div className="flex items-center justify-between h-20">
            <div>
              <a href="">
                <span className="text-xl font-bold uppercase bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
                  Court&nbsp;Kachari
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="flex items-center justify-end h-20">
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-stone-400 inline-flex items-center justify-center rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x={3}
                    y={7}
                    width={18}
                    height={2}
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />
                  <motion.rect
                    x={3}
                    y={15}
                    width={18}
                    height={2}
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>
              <button className="bg-orange-500 h-11 px-5 rounded-xl text-white border border-orange-500 uppercase hidden md:inline-flex items-center">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
