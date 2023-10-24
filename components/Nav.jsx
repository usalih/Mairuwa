import Image from "next/image";

const Nav = () => {
  const session = {};

  return (
    <>
      <nav className="flex justify-between items-center px-10	lg:px-14 py-4 w-full bg-primary-white">
        <div className="logo">
          <Image src="logo.svg" width={100} height={100} />
        </div>
        <div className="nav-link hidden lg:block">
          <ul className="flex list-none gap-4 opacity-70	">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Partner with us</li>
          </ul>
        </div>
        <div className="login flex gap-4">
          {session ? (
            <>NotificationIcon userName profilePic</>
          ) : (
            <>
              <button className="text-primary-blue">Log In</button>
              <button className="bg-primary-blue text-primary-white py-2 px-5 rounded-lg ">
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
