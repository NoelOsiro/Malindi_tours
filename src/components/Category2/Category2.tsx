'use client'
import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';
import { format } from 'date-fns';

interface IpostData {
  post_id: string;
  post_content: string;
  created_at: string;
  category: null;
  images: string[];
  title: string;
}

const Category2: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('post_id,post_content,created_at,category,images,title')
          .range(0, 8);
        if (error) {
          throw new Error('Failed to fetch data');
        }

        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: format(date, 'do'),
      month: format(date, 'MMM'),
    }
  };

  return (
    <section className="mx-auto mt-4 p-5">
      <h1 className='text-6xl text-gray-800 hover:text-white'>Latest Posts</h1>
      <div className="w-[70%] border-b-4 border-gray mb-8 mt-4"></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <a key={post.post_id} href={`/posts/${post.post_id}`}>
            <div className="relative flex flex-col justify-end text-left bg-center bg-cover h-96 md:col-span-1 lg:col-span-1 rounded-md" style={{ backgroundImage: `url(${post.images[0]})` }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 rounded-md "></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <span className="px-3 py-2 text-xs font-semibold text-gray-100 bg-violet-400 uppercase hover:underline">{post.category}</span>
                <div className="flex flex-col items-center justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold">{formatDate(post.created_at).day}</span>
                  <span className="uppercase">{formatDate(post.created_at).month}</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <span className="font-medium text-md lg:text-lg hover:underline">{post.title}</span>
              </h2>
            </div>
          </a>
        ))}

      </div>
    </section>
  );
};

export default Category2;
