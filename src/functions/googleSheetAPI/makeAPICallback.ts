import { IGapiResponse, ISheetData } from '@/Interfaces/sheetData';
import { IWordItem } from '@/Interfaces/word';

const makeApiCall = (sheetId: string) => {
  const request = window.gapi.client.sheets.spreadsheets.get({
    spreadsheetId: sheetId,
    ranges: 'Sheet1!2:1225',
    includeGridData: true,
  });

  return new Promise((resolve, reject) => {
    request.then(
      (response: any) => {
        const sheetRowData: ISheetData[] =
          response.result.sheets[0].data[0].rowData;

        const result: IGapiResponse = { parts: [], words: [], favorites: [] };

        const wordItemList: IWordItem[] = sheetRowData.map(
          (sheetData: ISheetData) => {
            //console.log(sheetData);
            const id: string = sheetData.values[0].formattedValue;
            const enItemData: string = sheetData.values[1].formattedValue;
            const zhItemData: string = sheetData.values[2].formattedValue;
            const exampleData: string = sheetData.values[3]?.formattedValue ?? '';
            const alphabet: string = enItemData.slice(0, 1).toLowerCase();

            const _parts: string[] = zhItemData.match(/【[a-z]{1,}】/g) ?? [];
            const parts: string[] = _parts.map((str) => str.slice(1, -1));
            const partsToSet = new Set([...result.parts, ...parts]);

            result.parts = [...partsToSet];

            return {
              id,
              alphabet,
              parts,
              en: enItemData,
              zh: zhItemData.split('%').map((itemText) => {
                const name: string[] = itemText.split('$');
                return `${name[0]}`;
              }),
              example: exampleData.split('%').map((itemText) => {
                const name: string[] = itemText.split('$');
                return `${name[0]}`.replace(/\n/g, '');
              }),
            };
          }
        );
        console.log(wordItemList);

        result.words = wordItemList;

        resolve(result);
      },
      (response: any) => reject(response)
    );
  });
};

export default makeApiCall;
