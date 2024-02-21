import Navbar from "@/components/Navbar/Navbar";
import Masonry from "@/components/Masonry/Masonry";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import BlogHero from "@/components/Hero/BlogHero";
import Category2 from "@/components/Category2/Category2";
import BlogRow from "@/components/BlogPostRow/BlogRow";

export default function Home() {

  return (
    <main className="mt-22">
      <BlogHero 
      title={"TourMal"} 
      subTitle={"Kenyan Coast: Where Beauty is infinte."} 
      buttonText={"Start 📲"} 
      heroText={'Explore your favourite events and register now to showcase your talent and win exciting prizes.'}/>
      <Masonry />
      <Category2/>
      <BlogRow/>
    </main>
  );
}
