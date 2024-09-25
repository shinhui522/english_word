/* eslint-disable global-require */
const isDevEnv = process.env.NODE_ENV === 'development';
const productionPath = '';

const provideApiKey = () => {
  //if (isDevEnv) {
  //  const secret = require('./secret.js');
  //  return secret();
  //}
  return 'AIzaSyBqds6JDXuFFNBLoYlVe5GT6ch1jhFQycE'
  //return 'AIzaSyBqwYzbJZjQZggrAYBkiUgUNhxnTI695oI';
};

module.exports = {
  basePath: isDevEnv ? '' : productionPath,
  trailingSlash: true,
  reactStrictMode: false,
  env: {
    BASE_PATH: isDevEnv ? '' : productionPath,
    API_KEY: provideApiKey(),
    CLIENT_ID: '',
    SCOPE: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    SHEET_ID: '1_gakJ5WCkXsqbgzhTBGPZsqRkI9L5xpu3jUfeo36PDg',
    DISCOVERY_DOCS: 'https://sheets.googleapis.com/$discovery/rest?version=v4',
  },
};
