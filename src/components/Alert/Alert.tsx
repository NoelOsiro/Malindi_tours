// Alert.tsx
import React, { useState } from 'react';
import styles from './Alert.module.css'; // You can style it with a CSS module or use inline styles

interface AlertProps {
  type: 'error' | 'success';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const [dismissed, setDismissed] = useState(false);

  const handleClose = () => {
    setDismissed(true);
  };

  if (dismissed) {
    return null; // Don't render the component if dismissed
  }

  return (
    <div className={`${styles.alert} ${type === 'error' ? styles.error : styles.success}`}>
      <span>{message}</span>
      <button onClick={handleClose} className={styles.closeButton}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
