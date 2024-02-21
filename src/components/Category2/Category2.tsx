import React from 'react';

interface Card {
  category: string;
  date: string;
  imageUrl: string;
  title: string;
}

const cards: Card[] = [
  {
    category: 'Art',
    date: '31 Jul',
    imageUrl: 'https://source.unsplash.com/random/245x320',
    title: 'Fuga ea ullam earum assumenda, beatae labore eligendi.'
  },
  {
    category: 'Politics',
    date: '04 Aug',
    imageUrl: 'https://source.unsplash.com/random/240x320',
    title: 'Autem sunt tempora mollitia magnam non voluptates'
  },
  {
    category: 'Health',
    date: '01 Aug',
    imageUrl: 'https://source.unsplash.com/random/241x320',
    title: 'Inventore reiciendis aliquam excepturi'
  },
  {
    category: 'Science',
    date: '28 Jul',
    imageUrl: 'https://source.unsplash.com/random/242x320',
    title: 'Officiis mollitia dignissimos commodi optio vero animi'
  },
  {
    category: 'Sports',
    date: '19 Jul',
    imageUrl: 'https://source.unsplash.com/random/243x320',
    title: 'Doloribus sit illo necessitatibus architecto exercitationem enim'
  }
];

const Category2: React.FC = () => {
  return (
    <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
        {cards.map((card, index) => (
          <div key={index} className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500" style={{ backgroundImage: `url(${card.imageUrl})` }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">{card.category}</a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">{card.date}</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold dark:text-gray-100">{card.title}</a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category2;
