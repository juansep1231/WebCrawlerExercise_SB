import { Entry } from "../models/types";
import { countWords } from "../utils/countWords";


export function filterTitlesMoreThanFiveWords(entries: Entry[], wordsTitleNumber: number): Entry[] {
  
    const entriesMoreThanFiveWordsSorted = entries
    .filter(entry => countWords(entry.title) > wordsTitleNumber)
    .sort((a, b) => b.comments - a.comments);

    return entriesMoreThanFiveWordsSorted;

}

export function filterTitlesLessThanFiveWords(entries: Entry[],  wordsTitleNumber: number): Entry[] {

    const entriesLessThanFiveWordsSorted = entries
    .filter(entry => countWords(entry.title) <= wordsTitleNumber)
    .sort((a, b) => b.points - a.points);

    return entriesLessThanFiveWordsSorted;
}
