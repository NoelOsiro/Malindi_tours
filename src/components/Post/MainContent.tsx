import { IpostData } from "@/app/posts/[id]/page";
import { format } from 'date-fns';

interface MainContentProps {
  postData: IpostData
}


const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    return format(date, 'do MMMM yyyy');
};

const MainContent: React.FC<MainContentProps> = ({ postData }) => {
  return (
    <main className="col-span-2  p-6 relative md:mr-2">
      <div className="flex justify-center">
        <img src={postData.images[0]} className="cursor-pointer rounded-lg" alt="placeholder tag" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 py-6">{postData.title}</h1>
      <div className="flex mt-2 my-2 items-center gap-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full">
          <img src={postData.profiles.avatar_url} className="w-10 h-10 rounded-full" alt='avatar'/>
        </div>
        <div className="text-black-500">
          By <span className="text-gray-800 font-bold cursor-pointer">{postData.profiles.username}</span> on {formatDate(postData.created_at)}
        </div>
      </div>
      <blockquote className="italic mt-4 font-semibold font-mono text-gray-800 border-l-4 border-gray-900 my-3 pl-2 ml-8">
        {postData.description}
      </blockquote>
      <article>
        <section className="mt-8">
          <h2 className="text-2xl mb-2 font-semibold font-sans">What is a for loop</h2>

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
          <h3 className="text-2xl mb-2 font-semibold font-sans">When to Use  a for loop</h3>


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
          <h3 className="text-2xl mb-2 font-semibold font-sans">How to Use  a for loop</h3>


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
        <textarea placeholder="your comment" cols={5} rows={6} className="outline-none focus:outline-none text-xl h-20 bg-gray-100 rounded p-4 text-gray-800 font-semibold w-full"></textarea>
        <button className="w-3/4 ml-auto my-2 py-2 text-xl text-center w-full bg-blue-700 text-gray-50 hover:bg-blue-600 focus:outline-none rounded" type="submit">Comment</button>
      </form>
    </main>
  );
};

export default MainContent