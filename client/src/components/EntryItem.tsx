import React from 'react';

import styles from './EntryItem.module.css';
import { Entry } from '../models/types';

interface EntryItemProps {
  entry: Entry;
}

const EntryItem: React.FC<EntryItemProps> = ({ entry }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {entry.number}. {entry.title}
      </h3>
      <p className={styles.details}>
        Points: {entry.points} | Comments: {entry.comments}
      </p>
    </div>
  );
};

export default EntryItem;
