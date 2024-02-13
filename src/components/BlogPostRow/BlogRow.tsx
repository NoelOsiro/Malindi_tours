import React from 'react';

interface Card {
  category: string;
  title: string;
  imageUrl: string;
  description: string;
}

const cards: Card[] = [
  {
    category: 'Reliable Schemas',
    title: 'What Zombies Can Teach You About Food',
    imageUrl: 'https://source.unsplash.com/Lki74Jj7H-U/400x300',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?',
  },
  {
    category: 'Client-based Adoption',
    title: 'Old School Art',
    imageUrl: 'https://source.unsplash.com/L9_6GOv40_E/400x300',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.',
  },
  {
    category: 'Intellectual Capital',
    title: '5 Things To Do About Rain',
    imageUrl: 'https://source.unsplash.com/7JX0-bfiuxQ/400x300',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.',
  },
];

const BlogRow: React.FC = () => {
  return (
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
        {cards.map((card, index) => (
          <div key={index} className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src={card.imageUrl} alt="Card img" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
              <div className="triangle"></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                <div>
                  <a href="#" className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">{card.category}</a>
                  <a href="#" className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">{card.title}</a>
                  <p className="mb-4">{card.description}</p>
                </div>
                <div>
                  <a href="#" className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogRow;