"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

import Profile from "./Profile";
import Notification from "./Notification";

const Nav = () => {
  const session = true;
  const [isProfile, setIsProfile] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfile(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotification(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isProfile, isNotification]);

  const profileRef = useRef();
  const notificationRef = useRef();

  return (
    <>
      <nav className="sticky top-0 z-20 drop-shadow-md">
        <div className="relative flex justify-between items-center px-10	lg:px-14 py-4 w-full bg-primary-white">
          <div className="logo">
            <Image src="logo.svg" width={100} height={100} />
          </div>
          <div className="nav-link hidden lg:block">
            <ul className="flex list-none gap-4 opacity-70	">
              <li className="cursor-pointer">
                <a href="#about-us">About Us</a>
              </li>
              <li className="cursor-pointer">
                <a href="#contact-us">Contact Us</a>
              </li>
              <li className="cursor-pointer">
                <a href="#">Partner with us</a>
              </li>
            </ul>
          </div>
          <div className="login flex gap-4">
            {session ? (
              <>
                <div className="flex gap-2 items-center">
                  <div ref={notificationRef}>
                    <div
                      className="mr-3"
                      onClick={() => setIsNotification(!isNotification)}
                    >
                      <Image src="bell.svg" width={20} height={20} />
                    </div>
                    {isNotification && (
                      <div className="absolute z-30 w-2/4 lg:w-1/4 bg-primary-white top-16 mt-3 right-10 rounded-xl p-2 lg:p-4">
                        <Notification />
                      </div>
                    )}
                  </div>

                  <div ref={profileRef}>
                    <div
                      className="flex gap-2 items-center cursor-pointer"
                      onClick={() => setIsProfile(!isProfile)}
                    >
                      <div className="opacity-70">Hello, Mike Dave</div>
                      <div>
                        <Image src="profile pic.svg" width={40} height={40} />
                      </div>
                    </div>
                    {isProfile && (
                      <div className="absolute z-30 w-2/4 lg:w-1/4 bg-primary-blue top-16 mt-3 right-10 rounded-xl p-4 lg:p-6">
                        <Profile />
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <button className="text-primary-blue">Log In</button>
                <button className="bg-primary-blue text-primary-white py-2 px-5 rounded-lg ">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
