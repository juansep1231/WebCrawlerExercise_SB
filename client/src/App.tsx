import React, { useState, useEffect } from 'react';
import './App.css';
import { Entry } from './models/types';
import axios from 'axios';
import EntryList from './components/EntryList';

const App: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [filter, setFilter] = useState<'all' | 'longTitle' | 'shortTitle'>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchEntries();
  }, [filter]);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      setError('');
      let endpoint = '/api/entries'; 

      if (filter === 'longTitle') {
        endpoint = '/api/entries/moreThanFiveWords';
      } else if (filter === 'shortTitle') {
        endpoint = '/api/entries/lessThanFiveWords';
      }

      const response = await axios.get<Entry[]>(endpoint);
      setEntries(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching entries.');
      setLoading(false);
    }
  };

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
      {loading && <p>Loading entries...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <EntryList entries={entries} />}
    </div>
  );
};

export default App;
