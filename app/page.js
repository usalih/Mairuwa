import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="rounded-b-xl text-primary-white bg-gradient-to-r	from-primary-blue to-primary-blueO ">
        <div className="absolute -z-10 w-full">
          <picture>
            <source media="(min-width: 768px)" srcSet="MaiRuwa.png" />
            <img src="MaiRuwa-mobile.png" alt="" className="w-full h-full " />
          </picture>
        </div>
        <div className="lg:w-2/3  py-28 pb-44 px-8 lg:py-56 lg:px-14">
          <h1 className="font-extrabold text-5xl lg:text-6xl mb-2">
            Want To Get A Mairuwa Without Stress?
          </h1>
          <h2 className="font-medium text-xl mb-4 lg:mb-6">
            Get the water delivered to your doorstep as quick as possible.
          </h2>
          <button className="bg-primary-white text-primary-blue py-3 px-4 rounded-xl text-xl font-semibold">
            Order Now!!!
          </button>
        </div>
      </section>
      <section className="pt-44 pb-28 px-10 text-lg lg:flex lg:px-24 w-full">
        <div className="flex justify-center items-center lg:w-2/4">
          <Image src="Busnesswoman head.svg" height={300} width={320} />
        </div>
        <div className="mt-6">
          <p className="mb-4">
            We are with a sole purpose to making water buying, selling and
            delivery from local vendors ‘Mairuwas’ a very much more easier and
            comfortablte task.
          </p>
          <p className="mb-4">
            With our product, from your comfort, you can order any amount of
            water you want, pay conviniently and securedly, and get the water
            delivered right to your doorstep.
          </p>
          <p className="mb-4">
            We are not only after quick delivery of purchased water, we are also
            concerned about the safety and cleanliness of water you get from us.
          </p>
          <p>Still thinking? Check out what others are saying about us.</p>
        </div>
      </section>
      <section className="flex flex-col items-center pb-28 px-10 lg:px-28">
        <div className="flex justify-center items-center w-3/4 mb-6">
          <div className="bg-primary-blue w-full h-0.5"></div>
          <div className="bg-primary-blue w-2 h-2 rounded-full"></div>
        </div>
        <div className="lg:flex lg:mb-24 gap-4 ">
          <div className="flex flex-col items-center mt-6">
            <div className="flex">
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
            </div>
            <p className="mb-3 text-center">
              This website is the best in making life easy for people. I always
              have problems looking for this mairuwas, but with this solution,
              finding them is become so easy and without stress. Thanks to the
              team for putting this together.
            </p>
            <p>John Jacob</p>
            <p className="font-bold">Dambare, Kano</p>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="flex">
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blackStar.svg" />
              </div>
              <div>
                <img src="blackStar.svg" />
              </div>
            </div>
            <p className="mb-3 text-center">
              This website is the best in making life easy for people. I always
              have problems looking for this mairuwas, but with this solution,
              finding them is become so easy and without stress. Thanks to the
              team for putting this together.
            </p>
            <p>John Jacob</p>
            <p className="font-bold">Dambare, Kano</p>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="flex">
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blueStar.svg" />
              </div>
              <div>
                <img src="blackStar.svg" />
              </div>
            </div>
            <p className="mb-3 text-center">
              This website is the best in making life easy for people. I always
              have problems looking for this mairuwas, but with this solution,
              finding them is become so easy and without stress. Thanks to the
              team for putting this together.
            </p>
            <p>John Jacob</p>
            <p className="font-bold">Dambare, Kano</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-3/4">
          <div className="bg-primary-blue w-2 h-2 rounded-full"></div>
          <div className="bg-primary-blue w-full h-0.5"></div>
        </div>
      </section>
      <section>
        <div className="text-primary-blue font-extrabold text-xl text-center mb-10">
          Send us a messgae
        </div>
        <div className="mx-8">
          <form className="flex flex-col items-center w-full rounded-xl border-2 p-3">
            <div className="border-2 rounded-xl w-full mb-2">
              <input
                className="p-3 rounded-xl"
                type="text"
                name="name"
                placeholder="Tell us your name"
                value=""
              />
            </div>
            <div className="border-2 rounded-xl w-full">
              <input
                className="p-3 rounded-xl"
                type="email"
                name="email"
                placeholder="Tell us your mail for reply sake"
                value=""
              />
            </div>
            <div>
              <textarea
                id="message"
                className="p-3"
                placeholder="Your message here, please"
                name="message"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="message"
                name="name"
                placeholder="Your message here, please"
                value=""
              />
            </div>
            <button
              type="submit"
              className="bg-primary-blue text-primary-white rounded-xl px-12 py-3"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
