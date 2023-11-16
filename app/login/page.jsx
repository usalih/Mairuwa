import Image from "next/image";
import React from "react";

const login = () => {
  return (
    <>
      <div className="p-8 px-24">
        <Image src="logo.svg" width={120} height={120} />
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 rounded-xl shadow-xl">
          <div className="bg-primary-blue flex justify-center itmes-center py-14 w-2/4 rounded-xl">
            <Image src="black girl waving.svg" width={200} height={220} />
          </div>
          <div className="w-2/4 flex justify-center items-center rounded-xl">
            <div>
              <div className="my-4">
                <h2 className="font-extrabold text-xl my-4">
                  Hello! Welcome back.
                </h2>
                <p>Use the details you used during regitration.</p>
              </div>
              <form>
                <div className=" mb-4 p-3 w-full border border-primary-blue rounded-xl">
                  <input
                    className="p-1 w-full focus:outline-none"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div className=" mb-1 p-3 w-full border border-primary-blue rounded-xl">
                  <input
                    className="p-1 w-full focus:outline-none"
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                  />
                </div>
                <p className="text-primary-blue mb-4">Forgot Passowrd?</p>
                <div>
                  <button
                    type="submit"
                    className=" w-full bg-primary-blue text-primary-white rounded-xl px-12 py-3"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-8">
                <p className="text-center">
                  New here?<span className="text-primary-blue">Sign Up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
