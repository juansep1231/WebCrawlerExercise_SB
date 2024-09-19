import { Entry } from "../models/types";


function countWords(title: string): number {
    return title
    .split(' ')
    .map(word => word.replace(/[^\w-]/g, ''))
    .filter(Boolean)
    .length
}

export function filterTitlesMoreThanFiveWords(entries: Entry[]): Entry[] {
  return entries
    .filter(entry => countWords(entry.title) > 5)
    .sort((a, b) => b.comments - a.comments);
}

export function filterTitlesLessThanFiveWords(entries: Entry[]): Entry[] {
  return entries
    .filter(entry => countWords(entry.title) <= 5)
    .sort((a, b) => b.points - a.points);
}
