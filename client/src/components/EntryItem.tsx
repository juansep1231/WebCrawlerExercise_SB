import React from 'react';

import '../styles/EntryItem.css';
import { Entry } from '../models/types';

interface EntryItemProps {
  entry: Entry;
}

const EntryItem: React.FC<EntryItemProps> = ({ entry }) => {
  return (
    <div className="container">
      <h3 className="title">
        {entry.number}. {entry.title}
      </h3>
      <p className="details">
        Points: {entry.points} | Comments: {entry.comments}
      </p>
    </div>
  );
};

export default EntryItem;
