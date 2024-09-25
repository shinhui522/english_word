interface IWordItem {
  id: string;
  en: string;
  zh: string[];
  parts: string[];
  alphabet: string;
  examlple: string[];
}

interface IDailyCase {
  date: string;
  words: string[];
}

export type { IWordItem, IDailyCase };
