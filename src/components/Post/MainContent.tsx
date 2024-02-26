import { IpostData } from "@/app/posts/[id]/page";

interface MainContentProps {
  postData: IpostData
}

const MainContent: React.FC<MainContentProps> = ({ postData }) => {
  return (
    <main className="col-span-2 relative md:mr-2">
      <div className="flex justify-center p-6">
        <img src={postData.images[0]} className="cursor-pointer rounded-lg" alt="placeholder tag" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 p-6">{postData.title}</h1>
      <div className="flex mt-2 my-2 items-center gap-4 px-6 py-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="text-gray-500">
          By <span className="text-gray-800 cursor-pointer">Sarthak Kaushik</span> on 14th April 2020
        </div>
      </div>

      <blockquote className="italic font-semibold font-serif text-gray-800 border-l-4 border-gray-900 my-3 pl-2 ml-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit explicabo at expedita nam assumenda totam voluptas quibusdam repudiandae. Culpa mollitia dolor illo dolorum ipsum expedita ea nemo quasi soluta hic.

      </blockquote>
      <article>
        <section>
          <h2 className="text-2xl mb-2 font-semibold font-serif">What is a for loop</h2>

          <p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
            Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
          </p>

          <p className="my-4">

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
            Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
          </p>
        </section>



        <section>
          <h3 className="text-2xl mb-2 font-semibold font-serif">When to Use  a for loop</h3>


          <p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
            Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
          </p>

          <p className="my-4">

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
            Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
          </p>
        </section>

        <section>
          <h3 className="text-2xl mb-2 font-semibold font-serif">How to Use  a for loop</h3>


          <p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
            Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
          </p>

          <p className="my-4">

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente?
            Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.
          </p>
        </section>
      </article>
      <form id="comment">
        <textarea placeholder="your comment" cols={5} rows={6} className="outline-none focus:outline-none text-xl bg-gray-100 rounded p-4 text-gray-800 font-semibold w-full"></textarea>
        <input type="email" className="w-full bg-gray-100 p-2 my-2 px-4 text-xl text-gray-800 rounded focus:outline-none" placeholder="your email" required />
        <input type="text" className="w-full bg-gray-100 p-2 px-4 text-xl text-gray-800 rounded focus:outline-none" placeholder="your name" required />
        <button className="my-2 py-2 text-xl text-center w-full bg-blue-700 text-gray-50 hover:bg-blue-600 focus:outline-none rounded" type="submit">Comment</button>
      </form>
    </main>
  );
};

export default MainContent