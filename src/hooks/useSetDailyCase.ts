/**
 * Verify data from IndexedDB to return correct daily case.
 */

import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import randomCollection from '@/Functions/randomCollection';
import { IDailyCase } from '@/Interfaces/word';
import { RootState } from '@/Store/index';

const useSetDailyCase = () => {
  const WORDS_DATA = useSelector((state: RootState) => state.collection.words);
  console.log(WORDS_DATA);

  return useCallback(
    (dateId: string, localData: IDailyCase | undefined): IDailyCase => {
      const result: IDailyCase = { date: dateId, words: [] };
      let hasLocalData: boolean = false;

      if (localData) {
        const { date = '', words = [] }: IDailyCase = JSON.parse(
          JSON.stringify(localData)
        );
        const wordsNumberToSet: Set<string> = new Set(words);
        console.log(localData);

        if (date === dateId && wordsNumberToSet.size === 10) {
          const cleanedWords: string[] = [...wordsNumberToSet];

          const isConfirm: boolean = cleanedWords.every(
            (wordId: string) =>
              WORDS_DATA.findIndex(({ id }) => id === wordId) >= 0
          );

          if (isConfirm) {
            hasLocalData = true;
            result.words = [...cleanedWords];
          }
        }
      }

      if (hasLocalData === false) {
        console.log("false");
        //const randoms: number[] = randomCollection(10, WORDS_DATA.length);
        //result.words = randoms.map((num: number) => WORDS_DATA[num].id);

        const startDay = new Date('2024-09-27'); // 設定固定的開始日期
        const currentDate = new Date(dateId);
        const diffTime = currentDate.getTime() - startDay.getTime(); // 計算時間差
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // 將時間差轉換為天數
        const totalWords = WORDS_DATA.length;
        const startIndex = (diffDays * 10) % totalWords; // 計算起始索引並處理超出範圍
        const endIndex = (startIndex + 10) % totalWords; // 計算結束索引並處理超出範圍
  
        const result: IDailyCase = { date: dateId, words: [] };
        if (totalWords > 0) {
          if (endIndex > startIndex) {
            // 確保在不需要從頭開始的情況下
            const wordsSlice = WORDS_DATA.slice(startIndex, endIndex);
            result.words = wordsSlice.map(word => word.id);
          } else {
            // 處理從頭開始的情況
            const wordsSlice = [
              ...WORDS_DATA.slice(startIndex),
              ...WORDS_DATA.slice(0, endIndex)
            ];
            result.words = wordsSlice.map(word => word.id);
          }
        }
      }
      console.log(result);

      return result;
    },
    [WORDS_DATA]
  );
};

export default useSetDailyCase;
