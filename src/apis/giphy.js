const API_KEY = 'q60528g7xYbZgGDN3R887xY2C0gerKbw';
const API_BASE_URL = 'http://api.giphy.com/v1/gifs';

function createSearchUrl(apiKey, searchTerm, number) {
  return (
    API_BASE_URL +
    '/search?api_key=' +
    apiKey +
    '&q=' +
    searchTerm +
    '&limit=' +
    number +
    '&rating=g' +
    '&lang=en&bundle=messaging_non_clips'
  );
}

function extractGifs(json) {
  const gifs = json.data.map((entry) => {
    return {
      id: entry.id,
      url: entry.images.original.url,
    };
  });
  return gifs;
}

export default async function getGifs(searchTerm, number) {
  const requestUrl = createSearchUrl(API_KEY, searchTerm, number);
  const response = await fetch(requestUrl);
  const json = await response.json();
  return extractGifs(json);
}
