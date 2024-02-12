import Navbar from "@/components/Navbar/Navbar";
import Masonry from "@/components/Masonry/Masonry";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import BlogHero from "@/components/Hero/BlogHero";

export default function Home() {

  return (
    <main className="mt-22">
      <BlogHero 
      title={"TourMal"} 
      subTitle={"Kenyan Coast: Where Beauty is infinte."} 
      buttonText={"Start 📲"} 
      heroText={'Explore your favourite events and register now to showcase your talent and win exciting prizes.'}/>

      <Masonry />
      <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500" style={{ backgroundImage: 'url(https://source.unsplash.com/random/245x320)' }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Art</a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">31</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100">Fuga ea ullam earum assumenda, beatae labore eligendi.</a>
            </h2>
          </div>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: 'url(&quot;https://source.unsplash.com/random/240x320&quot;)' }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Politics</a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">04</span>
                <span className="leadi uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100"> Autem sunt tempora mollitia magnam non voluptates</a>
            </h2>
          </div>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: 'url(&quot;https://source.unsplash.com/random/241x320&quot;)' }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Health</a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">01</span>
                <span className="leadi uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100">Inventore reiciendis aliquam excepturi</a>
            </h2>
          </div>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: 'url(&quot;https://source.unsplash.com/random/242x320&quot;)' }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Science</a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">28</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100">Officiis mollitia dignissimos commodi optio vero animi</a>
            </h2>
          </div>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: 'url(&quot;https://source.unsplash.com/random/242x320&quot;)' }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">Sports</a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">19</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100">Doloribus sit illo necessitatibus architecto exercitationem enim</a>
            </h2>
          </div>
        </div>
      </div>
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Continually Scale Results
          </h2>
          <a href="#" className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
            Go to insights
          </a>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src="https://source.unsplash.com/Lki74Jj7H-U/400x300" alt="Card img" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                <div>
                  <a href="#" className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Reliable Schemas</a
                  >
                  <a
                    href="#"
                    className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                  >
                    What Zombies Can Teach You About Food
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?
                  </p>
                </div>
                <div>
                  <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
          >
            <img
              src="https://source.unsplash.com/L9_6GOv40_E/400x300"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div
                className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400"
              >
                <div>
                  <a
                    href="#"
                    className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                  >Client-based Adoption</a
                  >
                  <a
                    href="#"
                    className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                  >
                    Old School Art
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.
                  </p>
                </div>
                <div>
                  <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More </a
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
          >
            <img
              src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div
                className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400"
              >
                <div>
                  <a
                    href="#"
                    className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                  >Intellectual Capital</a
                  >
                  <a
                    href="#"
                    className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                  >
                    5 Things To Do About Rain
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
                  </p>
                </div>
                <div>
                  <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More </a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
