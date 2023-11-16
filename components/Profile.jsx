"use client";
import Image from "next/image";
import { useState } from "react";
import PopUp from "@/components/shared/PopUp";
import AddMoney from "./AddMoney";

const Profile = () => {
  const [isTrigger, setIsTrigger] = useState(false);
  const [isActive, setIsActive] = useState({
    div1: false,
    div2: false,
    div3: false,
  });

  const handleClick = (name) => {
    const newIsActive = { ...isActive };

    newIsActive[name] = !newIsActive[name];

    if (newIsActive[name]) {
      for (const key in newIsActive) {
        if (key !== name) {
          newIsActive[key] = false;
        }
      }
    }

    setIsActive(newIsActive);
  };
  return (
    <>
      <PopUp trigger={isTrigger} setTrigger={setIsTrigger} size={"popup-inner"}>
        <AddMoney />
      </PopUp>
      <div className="flex flex-col gap-2">
        <div>
          <div
            onClick={() => handleClick("div1")}
            className={
              isActive.div1
                ? "flex justify-between border rounded-xl border-primary-white p-2 lg:p-3 text-primary-blue bg-primary-white cursor-pointer"
                : "flex justify-between border rounded-xl border-primary-white p-2 lg:p-3 text-primary-white cursor-pointer"
            }
          >
            <div className="flex gap-2">
              {isActive.div1 ? (
                <Image
                  src="walletIconblue.svg"
                  alt="wallet icon"
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  src="walletIcon.svg"
                  alt="wallet icon"
                  width={25}
                  height={25}
                />
              )}

              <h2>My Wallet</h2>
            </div>
            <div className="flex gap-2">
              <h2 className="font-bold">N850</h2>
              {isActive.div1 ? (
                <Image
                  src="eyeIconblue.svg"
                  alt="eye icon"
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  src="eyeIcon.svg"
                  alt="eye icon"
                  width={25}
                  height={25}
                />
              )}
            </div>
          </div>

          {isActive.div1 && (
            <div className="bg-primary-white text-primary-blue p-2 mt-1 rounded-xl">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-black lg:text-xl ">John david</h2>
                  <p>1234567890</p>
                </div>
                <div className="text-sm text-right">Transaction History</div>
              </div>
              <div className="flex justify-between mt-1 ">
                <div className="flex items-center gap-2">
                  <h2 className="font-black text-xl">N850</h2>
                  <Image src="eyeIconblue.svg" width={15} height={15} />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    className="cursor-pointer"
                    onClick={() => setIsTrigger(true)}
                    src="Add.svg"
                    width={30}
                    height={30}
                  />
                  <p className="text-xs">Add Money</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => handleClick("div2")}
            className={
              isActive.div2
                ? "flex justify-between border rounded-xl border-primary-white p-2 lg:p-3 text-primary-blue bg-primary-white cursor-pointer"
                : "flex justify-between border rounded-xl border-primary-white p-2 lg:p-3 text-primary-white cursor-pointer"
            }
          >
            <div className="flex gap-2">
              {isActive.div2 ? (
                <Image
                  src="profileIconblue.svg"
                  alt="profile icon"
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  src="profileIcon.svg"
                  alt="profile icon"
                  width={25}
                  height={25}
                />
              )}

              <h2>My Profile</h2>
            </div>
          </div>
          {isActive.div2 && (
            <div className="w-full bg-primary-white text-primary-blue p-2 mt-1 rounded-xl">
              <div className="flex gap-2 items-center">
                <div>
                  <Image src="profile picC.svg" width={100} height={100} />
                </div>
                <div>
                  <h2 className="text-xl">John David</h2>
                  <div className="flex gap">
                    <p className="text-xs">Dambare, Opp. BUK Newsite, Kano.</p>
                    <Image src="penIcon.svg" width={10} height={10} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-1">
                <button className="lg:px-5 lg:py-2 px-3 py-1 border rounded-xl border-primary-blue w-3/4">
                  Change Password
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => handleClick("div3")}
            className={
              isActive.div3
                ? "flex justify-between border rounded-xl border-primary-white p-2 lg:p-3 text-primary-blue bg-primary-white cursor-pointer"
                : "flex justify-between border rounded-xl border-primary-white p-2 lg:p-3 text-primary-white cursor-pointer"
            }
          >
            <div className="flex gap-2">
              {isActive.div3 ? (
                <Image
                  src="historyIconblue.svg"
                  alt="history icon"
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  src="historyIcon.svg"
                  alt="history icon"
                  width={25}
                  height={25}
                />
              )}

              <h2>History</h2>
            </div>
          </div>
          {isActive.div3 && (
            <div className="bg-primary-white text-primary-blue p-2 mt-1 rounded-xl">
              <div className="flex gap-4 text-xs">
                <p className="font-black">12-09</p>
                <p>4 Can</p>
                <p>Dambare</p>
                <p className="text-primary-yellow">Request Dispatch</p>
              </div>
              <div className="flex gap-4 text-xs">
                <p className="font-black">10-09</p>
                <p>4 Can</p>
                <p>Dambare</p>
                <p className="text-primary-green">Delivery Succrssful</p>
              </div>
              <div className="flex gap-4 text-xs">
                <p className="font-black">10-09</p>
                <p>4 Can</p>
                <p>Dambare</p>
                <p className="text-primary-red">Request Canceled</p>
              </div>
              <div className="flex gap-4 text-xs">
                <p className="font-black">09-09</p>
                <p>4 Can</p>
                <p>Dambare</p>
                <p className="text-primary-green">Delivery Succrssful</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="flex justify-between border rounded-xl border-primary-red p-2 lg:p-3 text-primary-red cursor-pointer">
            <div className="flex gap-2">
              <Image
                src="logoutIcon.svg"
                alt="log out icon"
                width={25}
                height={25}
              />
              <h2>Log Out</h2>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
