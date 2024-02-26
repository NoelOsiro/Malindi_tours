'use client'
import { useState, useEffect } from 'react';
import { supabase } from "@/app/lib/supabase";
import MainContent from "@/components/Post/MainContent";
import Sidebar from "@/components/Post/Sidebar";
import { usePathname } from "next/navigation";
export interface IpostData {
    post_id: string;
    user_id: string;
    post_content: string;
    created_at: string;
    category: null;
    images: string[];
    title: string;
    description: string;
  }
const Post: React.FC = () => {
    const [postData, setPostData] = useState<IpostData | null>(null);
    const pathname = usePathname();
    const pathnameParts = pathname.split('/');
    const uuid = pathnameParts[pathnameParts.length - 1];

    useEffect(() => {
        async function fetchData() {
            try {
                let { data: posts, error } = await supabase
                    .from('posts')
                    .select("*")
                    .eq('post_id', uuid)
                    .single();
                if (error) {
                    throw new Error('Failed to fetch data');
                }
                setPostData(posts);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error if necessary
            }
        }

        fetchData();

        // Cleanup function (optional)
        return () => {
            // Perform any cleanup tasks here
        };
    }, [uuid]); // Trigger the effect whenever `uuid` changes

    return (
        <div className="container mx-auto px-2 mt-24">
            <section className="grid md:grid-cols-3 mt-12">
                {postData && <MainContent postData={postData} />}
                <Sidebar />
            </section>
        </div>
    );
};

export default Post;
