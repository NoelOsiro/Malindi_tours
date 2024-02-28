import Masonry from "@/components/Masonry/Masonry";
import BlogHero from "@/components/Hero/BlogHero";
import Category2 from "@/components/Category2/Category2";
import BlogRow from "@/components/BlogPostRow/BlogRow";

export default function Home() {

  return (
    <main className="mt-22 px-1">
      <BlogHero 
      title={"MaliCul"} 
      subTitle={"Kenyan Coast: Where Beauty is infinte."} 
      buttonText={"Start 📲"} 
      heroText={'Explore your favourite events and register now to showcase your talent and win exciting prizes.'}/>
      {/* <Masonry /> */}
      <Category2/>
    </main>
  );
}
