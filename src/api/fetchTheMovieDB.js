import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const api_key = '6d25a4756e0ff1ccca3eba13a74efa5c';

export const IMG_PATH_W300 = 'https://image.tmdb.org/t/p/w300';
export const IMG_PATH_W200 = 'https://image.tmdb.org/t/p/w200';

const mediaType = {
  ALL: 'all',
  MOVIE: 'movie',
  TV: 'tv',
  PERSON: 'person',
};
const trendTime = {
  DAY: 'day',
  WEEK: 'week',
};
const language = {
  ENGLISH: 'en-US',
  UKRAINIAN: 'uk-UA',
};

export async function fetchTrend({ page }) {
  const searchParams = new URLSearchParams({
    api_key,
    page,
    language: language.ENGLISH,
  });
  const response = await axios.get(
    `trending/${mediaType.MOVIE}/${trendTime.DAY}?${searchParams}`
  );
  return response.data;
}

export async function fetchMovieById({ movieId }) {
  const options = new URLSearchParams({
    api_key,
    language: language.ENGLISH,
  });
  const response = await axios.get(`${mediaType.MOVIE}/${movieId}?${options}`);
  return response.data;
}

export async function fetchCreditsById({ movieId }) {
  const options = new URLSearchParams({
    api_key,
    language: language.ENGLISH,
  });
  const response = await axios.get(
    `${mediaType.MOVIE}/${movieId}/credits?${options}`
  );
  return response.data;
}

export async function fetchReviewsById({ movieId, page }) {
  const options = new URLSearchParams({
    api_key,
    page,
    language: language.ENGLISH,
  });
  const response = await axios.get(
    `${mediaType.MOVIE}/${movieId}/reviews?${options}`
  );
  return response.data;
}

export async function fetchSearch({ query, page }) {
  const options = new URLSearchParams({
    api_key,
    page,
    query,
    language: language.ENGLISH,
  });
  const response = await axios.get(`search/${mediaType.MOVIE}?${options}`);
  return response.data;
}
