interface Post {
    title: string;
    date: string;
    imageUrl: string;
    description: string;
    category: string;
    slug: string;
  }
  
const PostCard: React.FC<Post> = ({ title, date, imageUrl, description, category,slug }) => (
    <a href={`${category}/${slug}`} className=" relative max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
      <div className="overflow-hidden">
      <img
        role="presentation"
        className="object-cover w-full h-44 dark:bg-gray-500 transition-transform duration-300 transform hover:scale-110"
        src={imageUrl}
      />
    </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
        <span className="text-xs dark:text-gray-400">{date}</span>
        <p >{description}</p>
        
      </div>
      <div className="flex justify-between bottom-4 p-6">
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current text-green-500"
              viewBox="0 0 20 20"
            >
              <path d="M10 1C4.477 1 0 5.477 0 11c0 3.333 1.933 6.227 4.726 7.639L4 19c0-.553.447-1 1-1h5c.553 0 1 .447 1 1v-1.361C15.067 17.227 17 14.333 17 11c0-5.523-4.477-10-10-10zm0 18c-.828 0-1.617-.258-2.266-.742-.347-.215-.609-.526-.768-.884l-.954-2.371a1 1 0 0 1 .33-1.183c.706-.511 1.413-.776 2.108-.776h.052c.7 0 1.407.261 2.114.779.388.282.727.63 1.003 1.034l.663 1.21a1 1 0 0 1-.177 1.394A6.91 6.91 0 0 0 10 17zM7 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6-1a1 1 0 0 1 .994.876l.213 3.164a1 1 0 0 1-.186.768l-.007.01-1.5 1.5a1 1 0 0 1-1.32.083l-.093-.083-1.5-1.5a1 1 0 0 1-.174-1.142l.062-.1.213-.317A1 1 0 0 1 8 7V3a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2h-3V5a1 1 0 0 1 .006-.158l.105-.236A1.004 1.004 0 0 1 13 5z" />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current text-red-500"
              viewBox="0 0 20 20"
            >
              <path d="M10 1C4.477 1 0 5.477 0 11c0 3.333 1.933 6.227 4.726 7.639L4 19c0-.553.447-1 1-1h5c.553 0 1 .447 1 1v-1.361C15.067 17.227 17 14.333 17 11c0-5.523-4.477-10-10-10zm0 18c-.828 0-1.617-.258-2.266-.742-.347-.215-.609-.526-.768-.884l-.954-2.371a1 1 0 0 1 .33-1.183c.706-.511 1.413-.776 2.108-.776h.052c.7 0 1.407.261 2.114.779.388.282.727.63 1.003 1.034l.663 1.21a1 1 0 0 1-.177 1.394A6.91 6.91 0 0 0 10 17zM7 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6-1a1 1 0 0 1 .994.876l.213 3.164a1 1 0 0 1-.186.768l-.007.01-1.5 1.5a1 1 0 0 1-1.32.083l-.093-.083-1.5-1.5a1 1 0 0 1-.174-1.142l.062-.1.213-.317A1 1 0 0 1 8 7V3a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2h-3V5a1 1 0 0 1 .006-.158l.105-.236A1.004 1.004 0 0 1 13 5z" />
            </svg>
          </button>
          <button className="text-blue-500 hover:text-blue-700 focus:outline-none">Read</button>
      </div>
    </a>
  );
export default PostCard;