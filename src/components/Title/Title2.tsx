import React from 'react';

interface Item {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface Title2Props {
  items: Item[];
}

const Title2Item: React.FC<{ item: Item }> = ({ item }) => (
  <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
      <a href={item.buttonLink} className="flex flex-wrap no-underline hover:no-underline">
        <p className="w-full text-gray-600 text-xs md:text-sm px-6">
          xGETTING STARTED
        </p>
        <div className="w-full font-bold text-xl text-gray-800 px-6">
          {item.title}
        </div>
        <p className="text-gray-800 text-base px-6 mb-5">
          {item.description}
        </p>
      </a>
    </div>
    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
      <div className="flex items-center justify-center">
        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          {item.buttonText}
        </button>
      </div>
    </div>
  </div>
);

const Title2: React.FC<Title2Props> = ({ items }) => (
  <section className="bg-white border-b py-8">
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Title
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      {items.map((item, index) => (
        <Title2Item key={index} item={item} />
      ))}
    </div>
  </section>
);

export default Title2;
