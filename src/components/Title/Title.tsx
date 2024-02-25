
// Define prop types
'use client'

import AOS from "aos";
import { useEffect } from "react";
import BlogRow from "../BlogPostRow/BlogRow";

interface TitleProps {
  title: string;
  subTitle: string;
  paraText: string;
  buttonText: string;
  imageUrl: string;
}
const Title: React.FC<TitleProps> = ({ title, subTitle, paraText, buttonText, imageUrl }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      delay: 2
    });
  }, []);
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8"  data-aos="fade-up">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h2>
        <BlogRow/>
      </div>
    </section>
  );
}
export default Title;