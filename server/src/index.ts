import express from 'express';
import { scrapeHackerNews } from './controller/scraper.ts';
import {filterTitlesLessThanFiveWords, filterTitlesMoreThanFiveWords } from './controller/filters.ts';


const app = express();

app.get('/api/entries', async (req, res) => {
  try {
    const entries = await scrapeHackerNews();
    res.json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
});

app.get('/api/entries/moreThanFiveWords', async (req, res) => {
  try {
    const entries = await scrapeHackerNews();
    const filteredEntries = filterTitlesMoreThanFiveWords(entries, 5);
    res.json(filteredEntries);
  } catch (error) {
    console.error('Error fetching or filtering entries:', error);
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
  });

  app.get('/api/entries/lessThanFiveWords', async (req, res) => {
    try {
      const entries = await scrapeHackerNews();
      const filteredEntries = filterTitlesLessThanFiveWords(entries, 5);
      res.json(filteredEntries);
    } catch (error) {
      console.error('Error fetching or filtering entries:', error);
      res.status(500).json({ error: 'Failed to fetch entries' });
    }
  });



app.listen(3001, () => console.log('Server running on port 3001'));
