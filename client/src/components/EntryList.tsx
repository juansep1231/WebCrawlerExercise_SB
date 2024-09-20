import React from 'react';

import '../styles/EntryList.css';
import { Entry } from '../models/types';
import EntryItem from './EntryItem';

interface EntryListProps {
  entries: Entry[];
}

const EntryList: React.FC<EntryListProps> = ({ entries }) => {
  return (
    <div className="list">
      {entries.map(entry => (
        <EntryItem key={entry.number} entry={entry} />
      ))}
    </div>
  );
};

export default EntryList;
