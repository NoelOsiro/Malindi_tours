'use client'
import { useState, useEffect } from 'react';
import { supabase } from "@/app/lib/supabase";
import MainContent from "@/components/Post/MainContent";
import Sidebar from "@/components/Post/Sidebar";
import { usePathname } from "next/navigation";
import { QueryData } from '@supabase/supabase-js';

export interface IpostData {
    post_id: string;
    post_content: string;
    created_at: string;
    category: null;
    images: string[];
    title: string;
    description: string;
    profiles: {
        username: string;
        avatar_url:string;
        bio:string;
    }
  }
const Post: React.FC = () => {
    const [postData, setPostData] = useState<any | null>(null);
    const pathname = usePathname();
    const pathnameParts = pathname.split('/');
    const uuid = pathnameParts[pathnameParts.length - 1];

    useEffect(() => {
        async function fetchData() {
            const post_with_user = supabase
            .from('posts')
            .select(`
                post_id,
                post_content,
                created_at,
                category,
                images,
                title,
                description,
                profiles (username,avatar_url,bio)
            `)
            .eq('post_id', uuid)
            .single();
            type PostWithUser = QueryData<typeof post_with_user>
            try {
                const { data, error } = await post_with_user
                if (error) {
                    throw new Error('Failed to fetch data');
                }
                const result: PostWithUser = data
                setPostData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
        return () => {
            // Perform any cleanup tasks here
        };
    }, [uuid]);
    return (
        <div className="container mx-auto px-2 mt-24">
            <section className="grid md:grid-cols-3 mt-12">
                {postData && <MainContent postData={postData} />}
                {postData && <Sidebar profileData={postData.profiles} />}
            </section>
        </div>
    );
};

export default Post;
