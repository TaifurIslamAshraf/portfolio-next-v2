"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const navlink = [
  {
    path: "/",
    label: "Home",
    targetSegment: null,
  },
  {
    path: "/about",
    label: "About",
    targetSegment: "about",
  },
  {
    path: "/service",
    label: "Service",
    targetSegment: "service",
  },
  {
    path: "/projects",
    label: "Projects",
    targetSegment: "projects",
  },
  {
    path: "/contact",
    label: "Contact",
    targetSegment: "contact",
  },
];

const Navbar = () => {
  const isLogin = true;
  const activeSegment = useSelectedLayoutSegment();

  return (
    <div
      className="
    fixed top-4 bg-white
    shadow-lg
    rounded-lg
    w-[80%]
    left-0 right-0
    mx-auto
    px-8
    py-5
    flex
    items-center
    justify-between
  "
    >
      <div className="font-bold text-xl">
        <Link href={"/"}>Taifur Dev</Link>
      </div>
      <div className="space-x-10 font-semibold">
        {navlink.map((value, index) => {
          return (
            <Link
              className={` ${
                activeSegment === value.targetSegment
                  ? "border-b-2 border-black text-blue-800"
                  : ""
              } hover:text-blue-700`}
              href={value.path}
              key={index + 1}
            >
              {value.label}
            </Link>
          );
        })}
      </div>
      <div className="login">
        {isLogin ? (
          <div
            className="
            flex justify-center items-center gap-3
        "
          >
            <Image
              className="rounded-full"
              src="/images/placeholder.jpg"
              alt="profile"
              height={30}
              width={30}
            />
            <span className="font-semibold">Logout</span>
          </div>
        ) : (
          <div>
            <span className="font-semibold">Login</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
