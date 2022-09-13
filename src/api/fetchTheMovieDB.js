import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const api_key = '6d25a4756e0ff1ccca3eba13a74efa5c';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

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

// async fetchTrend() {
//   const options = new URLSearchParams({
//     api_key: Movie.API_KEY,
//     page: this.#page,
//     language: this.#langCurrent,
//   });
//   const response = await axios.get(
//     `trending/${Movie.mediaType.MOVIE}/${this.#currentTrendTime}?${options}`
//   );
//   return response.data;
// }

// async fetchSearch() {
//   const options = new URLSearchParams({
//     api_key: Movie.API_KEY,
//     page: this.#page,
//     query: this.#query,
//     language: this.#langCurrent,
//   });
//   const response = await axios.get(
//     `search/${Movie.mediaType.MOVIE}?${options}`
//   );
//   return response.data;
// }

// async fetchGenre() {
//   const options = new URLSearchParams({
//     api_key: Movie.API_KEY,
//     language: this.#langCurrent,
//   });
//   const response = await axios.get(
//     `genre/${Movie.mediaType.MOVIE}/list?${options}`
//   );
//   return response.data;
// }

// async fetchById(idMovie) {
//   const options = new URLSearchParams({
//     api_key: Movie.API_KEY,
//     language: this.#langCurrent,
//   });
//   const response = await axios.get(
//     `${Movie.mediaType.MOVIE}/${idMovie}?${options}`
//   );
//   return response.data;
// }
