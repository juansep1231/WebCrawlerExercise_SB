import React, { useState} from 'react';
import './App.css';
import EntryList from './components/EntryList';
import { useFetchEntries } from './hooks/fetchEntriesHook';

const App: React.FC = () => {

  const [filter, setFilter] = useState<'all' | 'longTitle' | 'shortTitle'>('all');

  const {loading, error, entries} = useFetchEntries(filter);
  
  const handleFilterChange = (newFilter: 'all' | 'longTitle' | 'shortTitle') => {
    setFilter(newFilter);
  };

  return (
    <div className="container">
      <h1 className="header">Hacker News Entries</h1>
      <div className="buttonContainer">
        <button
          onClick={() => handleFilterChange('all')}
          className={filter === 'all' ? 'activeButton' : 'button'}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange('longTitle')}
          className={filter === 'longTitle' ? 'activeButton' : 'button'}
        >
          Titles with more than five words
        </button>
        <button
          onClick={() => handleFilterChange('shortTitle')}
          className={filter === 'shortTitle' ? 'activeButton' : 'button'}
        >
          Titles with less than or equal to five words
        </button>
      </div>
      {loading && <p>Loading entries</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <EntryList entries={entries} />}
    </div>
  );
};

export default App;
