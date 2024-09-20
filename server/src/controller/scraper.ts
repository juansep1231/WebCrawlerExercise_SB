import axios from 'axios';
import * as cheerio from 'cheerio';
import { Entry } from '../models/types.ts';


function extractNumber(text: string, regex: RegExp): number {
  const match = text.match(regex);
  return match ? parseInt(match[1]) : 0;
}

function getNumber(element: cheerio.Cheerio): number {
  const numberOrder = element.find('.rank').text();
  const number = extractNumber(numberOrder, /(\d+)\./); 
  return number;
}

function getTitle(element: cheerio.Cheerio): string {
  return element.find('.titleline > a').text();
}

function getPoints(element: cheerio.Cheerio): number {
  const subtext = (element).next().find('.subtext');
  const pointsText = subtext.find('.score').text();
  const points = extractNumber(pointsText, /(\d+)\s+points/); 
  return points;
}

function getComments(element: cheerio.Cheerio): number {
  const subtext = (element).next().find('.subtext');
  const commentsText = subtext.find('a').last().text();
  const comments = extractNumber(commentsText, /(\d+)\scomment/);  
  return comments;
}

export async function scrapeHackerNews(): Promise<Entry[]> {
  const { data: entryData } = await axios.get('https://news.ycombinator.com/');
  const $ = cheerio.load(entryData);
  const entries: Entry[] = [];
  
  $('.athing').each((index, element) => {
    if (index >= 30) return false; 
  
    const number = getNumber($(element)); 
    
    const title = getTitle($(element));
    
    const points = getPoints($(element));

    const comments = getComments($(element));

    entries.push({ number, title, points, comments });
  });

  return entries;
}
