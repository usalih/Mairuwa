import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-primary-blue text-lg font-normal text-primary-white p-16 lg:pb-40">
        <div className="logo-footer pb-5 mb-5">
          <Image src="logo2.svg" width={150} height={150} />
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex lg:w-2/4 gap-6">
            <div className="flex-1">
              <h4 className="font-black mb-4">What it's for</h4>
              <ul className="flex flex-col gap-3">
                <li>Our Services</li>
                <li>Project Documentation</li>
                <li>Partnership</li>
                <li>Evolution</li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-black mb-4">Our Site</h4>
              <ul className="flex flex-col gap-3">
                <li>About Us</li>
                <li>Reviews</li>
                <li>Careers</li>
                <li>Customers</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/4 flex-1">
            <h4 className="font-black mb-4">Conatct Address</h4>
            <p className="mb-2">
              Group F - Project Management Semester Project, Department of
              Software Engineering, TY Danjuma Building, Faculty of Computing,
              Bayero University, Kano Nigeria.
            </p>
            <p>Tel: 01 - 92345676987</p>
            <p>E-mail: support@mairuwa.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
