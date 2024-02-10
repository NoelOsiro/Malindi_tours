import React from 'react';
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
  { id: 1, imgUrl: 'https://source.unsplash.com/random/1', title: 'Title 1', author: 'Mario Rossi', tag: '#tag1' },
  { id: 2, imgUrl: 'https://source.unsplash.com/random/2', title: 'Title 2', author: 'Luigi Bianchi', tag: '#tag2' },
  { id: 3, imgUrl: 'https://source.unsplash.com/random/1', title: 'Title 3', author: 'Mario Rossi', tag: '#tag1' },
  { id: 4, imgUrl: 'https://source.unsplash.com/random/2', title: 'Title 4', author: 'Luigi Bianchi', tag: '#tag2' },
  { id: 5, imgUrl: 'https://source.unsplash.com/random/1', title: 'Title 5', author: 'Mario Rossi', tag: '#tag1' },
  { id: 6, imgUrl: 'https://source.unsplash.com/random/2', title: 'Title 6', author: 'Luigi Bianchi', tag: '#tag2' },
  { id: 7, imgUrl: 'https://source.unsplash.com/random/1', title: 'Title 7', author: 'Mario Rossi', tag: '#tag1' },
  { id: 8, imgUrl: 'https://source.unsplash.com/random/2', title: 'Title 8', author: 'Luigi Bianchi', tag: '#tag2' },
  // Add more card data as needed
];

const Masonry: React.FC = () => {
  return (
    <div className={styles.masonry}>
      {cardData.map((card) => (
        <div className={styles.grid} key={card.id}>
          <img src={card.imgUrl} alt="Card" />
          <div className={styles.grid__body}>
            <div className="relative">
              <a className={styles.grid__link} target="_blank" href="/"></a>
              <h1 className={styles.grid__title}>{card.title}</h1>
              <p className={styles.grid__author}>{card.author}</p>
            </div>
            <div className="mt-auto">
              <span className={styles.grid__tag}>{card.tag}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
