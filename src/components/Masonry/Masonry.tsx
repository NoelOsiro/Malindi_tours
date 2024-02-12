import React from 'react';
import MasonryLayout from '@/components/Masonry/MasonryLayout';
import Link from 'next/link';
import styles from './Masonry.module.css'; // Import your CSS file

// Define types for card data
interface Card {
  id: number;
  imgUrl: string;
  title: string;
  author: string;
  tag: string;
}

// Sample card data
const cardData: Card[] = [
  { id: 1, imgUrl: 'https://source.unsplash.com/random/?Malindi', title: 'My City', author: 'Mario Rossi', tag: 'malindi' },
  { id: 2, imgUrl: 'https://source.unsplash.com/random/?Kilifi', title: 'Title 2', author: 'Luigi Bianchi', tag: 'kilifi' },
  { id: 3, imgUrl: 'https://source.unsplash.com/random/?Watamu', title: 'Sports', author: 'Mario Rossi', tag: 'sports' },
  { id: 4, imgUrl: 'https://source.unsplash.com/random/?Gede,ruins', title: 'Tourism', author: 'Luigi Bianchi', tag: 'tourism' },
  { id: 5, imgUrl: 'https://source.unsplash.com/random/?Lamu', title: 'Gallery', author: 'Mario Rossi', tag: 'gallery' },
  { id: 6, imgUrl: 'https://source.unsplash.com/random/?coconuts', title: 'Dining', author: 'Luigi Bianchi', tag: 'dining' },
  { id: 7, imgUrl: 'https://source.unsplash.com/random/?Culture_festival', title: 'Art & Culture', author: 'Mario Rossi', tag: 'art' },
  { id: 8, imgUrl: 'https://source.unsplash.com/random/?Events', title: 'Events', author: 'Luigi Bianchi', tag: 'events' },
  // Add more card data as needed
];



const IndexPage: React.FC = () => {
  return (
    <MasonryLayout breakpointCols={{ default: 3,
      1100: 3,
      700: 2,
      500: 1 }} >
      {/* Your Masonry items */}
      {cardData.map((card) => (
        <div className={styles.grid} key={card.id}>
          <img src={card.imgUrl} alt="Card" />
          <div className={styles.grid__body}>
            <div className="relative">
              <a className={styles.grid__link} href={`blog/${card.tag}`}></a>
              <h1 className={styles.grid__title}>{card.title}</h1>
              <p className={styles.grid__author}>{card.author}</p>
            </div>
            <div className="mt-auto">
                <span className={styles.grid__tag}>#{card.tag}</span>
            </div>
          </div>
        </div>
      ))}
      {/* Add more items as needed */}
    </MasonryLayout>
  );
};

export default IndexPage;
