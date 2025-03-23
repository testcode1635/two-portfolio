import Button from "@/components/Button";
import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
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

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex items-center justify-between h-20">
          <div className="">
            <a href="/">
              <span className="text-xl font-bold uppercase">
                Court&nbsp;kachari
              </span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200  ">
              <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                <g className="layer">
                  <path d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5zM19 8.25H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5zM19 17.25H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5z" />
                </g>
              </svg>
            </div>
            <Button variant="primary" className="hidden md:inline-flex ">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
