'use client'
import { useState, useEffect } from 'react';
import MainContent from "@/components/Post/MainContent";
import Sidebar from "@/components/Post/Sidebar";
import { usePathname,useRouter } from "next/navigation";
import { QueryData } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';

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
        avatar_url: string;
        bio: string;
    }
}

const Post: React.FC = async () => {
    const [postData, setPostData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    const pathnameParts = pathname.split('/');
    const uuid = pathnameParts[pathnameParts.length - 1];
    const supabase = createClient();
    const router = useRouter();

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        router.push('/login')
    }
    useEffect(() => {
        async function fetchData() {
            setLoading(true); // Set loading state to true before fetching data   
            const post_with_user = supabase.from('posts')
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
            } finally {
                setLoading(false); // Set loading state to false after fetching data
            }
        }
        fetchData();
        return () => {
            // Perform any cleanup tasks here
        };
    }, [uuid]);

    return (
        <div className="container mx-auto px-2 mt-24 h-full">
            {loading && (
                <div className="h-[700px] flex justify-center items-center bg-gray-200 bg-opacity-75 z-50">
                    <div className="text-4xl font-bold">Loading...</div>
                </div>
            )}
            {postData &&
                <section className="grid md:grid-cols-3 mt-12">
                    <MainContent postData={postData} />
                    <Sidebar profileData={postData.profiles} />
                </section>}
        </div>
    );
};

export default Post;
