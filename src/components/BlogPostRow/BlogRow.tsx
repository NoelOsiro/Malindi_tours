import { useState, useEffect } from 'react';
import { Database } from '@/app/lib/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';

interface Card {
  category: string;
  title: string;
  imageUrl: string;
  description: string;
}

interface Post {
  post_id: string;
  post_content: string;
  images: string[];
  title: string;
  description: string;
  category: string;
}

const BlogRow: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClientComponentClient<Database>();
        const { data, error } = await supabase.rpc('get_top_liked_posts');
        if (error) {
          console.error(error);
        } else {
          setPosts(data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run the effect only once after the initial render

  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-2xl text-black font-bold leading-none md:text-2xl">
          Continually Scale Results
        </h2>
        <a href="#" className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
          View Posts
        </a>
      </div>
      <div className="flex flex-wrap -mx-4">
        {loading && <p>Loading...</p>}
        {posts &&
          posts.map((post: Post) => (
            <div key={post.post_id} className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col" data-aos="fade-right">
              <img src={post.images[0]} alt="Card img" className="object-cover object-center w-full h-48" />
              <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                  <div>
                    <a href="#" className="inline-block mb-4 text-xs font-bold text-black capitalize border-b-2 border-blue-600 hover:text-blue-600">
                      {post.category}
                    </a>
                    <a href="#" className="block mb-4 text-2xl font-bold text-black leading-tight hover:underline hover:text-blue-600">
                      {post.title}
                    </a>
                    <p className="text-black mb-4">{post.description}</p>
                  </div>
                  <div>
                    <a href={`/posts/${post.post_id}`} className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
                      Read More
                    </a>
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
