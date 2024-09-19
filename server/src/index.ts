import express from 'express';
import { scrapeHackerNews } from './controller/scraper.ts';
import {filterTitlesLessThanFiveWords, filterTitlesMoreThanFiveWords } from './controller/filters.ts';


const app = express();

app.get('/api/entries', async (req, res) => {
    const entries = await scrapeHackerNews();
    res.json(entries);
});

app.get('/api/entries/moreThanFiveWords', async (req, res) => {
    const entries = await scrapeHackerNews();
    const filteredEntries = filterTitlesMoreThanFiveWords(entries,5);
    res.json(filteredEntries);
  });

  app.get('/api/entries/lessThanFiveWords', async (req, res) => {
    const entries = await scrapeHackerNews();
    const filteredEntries = filterTitlesLessThanFiveWords(entries,5);
    res.json(filteredEntries);
  });



app.listen(3001, () => console.log('Server running on port 3001'));
