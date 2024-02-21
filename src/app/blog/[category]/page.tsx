'use client'
import LoadMoreButton from '@/components/Category/LoadMore';
import PostCard from '@/components/Category/PostCard';
import React, { useState } from 'react';

interface Post {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  category: string;
  slug: string;
}

const posts: Post[] = [
  {
    title: 'Noster tincidunt reprimique ad pro',
    date: 'February 19, 2021',
    imageUrl: 'https://source.unsplash.com/random/480x360',
    description: 'Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.',
    category: 'sports',
    slug: 'slug',
  },
  {
    title: 'In usu laoreet repudiare legendos',
    date: 'January 20, 2021',
    imageUrl: 'https://source.unsplash.com/random/480x360?1',
    description: 'Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.',
    category: 'sports',
    slug: 'slug',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: 'March 5, 2021',
    imageUrl: 'https://source.unsplash.com/random/480x360?2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum blandit nisl, eget luctus eros sagittis non.',
    category: 'sports',
    slug: 'slug',
  },
  {
    title: 'Sed Do Eiusmod Tempor Incididunt',
    date: 'April 15, 2021',
    imageUrl: 'https://source.unsplash.com/random/480x360?3',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'sports',
    slug: 'slug',
  },
  {
    title: 'Consectetur Adipiscing Elit',
    date: 'May 20, 2021',
    imageUrl: 'https://source.unsplash.com/random/480x360?4',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    category: 'sports',
    slug: 'slug',
  },
  {
    title: 'Duis Aute Irure Dolor In Reprehenderit',
    date: 'June 8, 2021',
    imageUrl: 'https://source.unsplash.com/random/480x360?5',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    category: 'sports',
    slug: 'slug',
  },
  {
    title: 'Excepteur Sint Occaecat Cupidatat Non Proident',
    date: 'July 17, 2021',
    imageUrl: 'https://source.unsplash.com/random/480x360?6',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: 'sports',
    slug: 'slug',
  },
  {
    title: 'Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat',
    date: 'August 25, 2021',
    imageUrl: 'https://source.unsplash.com/random/480x360?7',
    description: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    category: 'sports',
    slug: 'slug',
  },
];


const CategoryPage: React.FC = () => {
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>(posts.slice(0, 3));
  const loadMorePosts = () => {
    const nextPosts = posts.slice(displayedPosts.length, displayedPosts.length + 3);
    setDisplayedPosts([...displayedPosts, ...nextPosts]);
  };
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mt-20 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
          <img src={posts[0].imageUrl} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{posts[0].title} </h3>
            <span className="text-xs dark:text-gray-400">{posts[0].date} </span>
            <p>{posts[0].description} </p>
          </div>
        </a>
        {/* Additional posts */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map through your posts array to generate individual post components */}
          {displayedPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
        {displayedPosts.length < posts.length && <LoadMoreButton onClick={loadMorePosts} />}
      </div>
    </section>
  );
};

export default CategoryPage;
