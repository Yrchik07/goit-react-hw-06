import axios from 'axios';

const ACCESS_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzIzN2I3NjAxYzczMzU4M2VhZjNkYzIxOTZmMWIwYyIsInN1YiI6IjY2MTQ0MWMxMzNhNTMzMDE3ZDg2MjQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w3lC1LFryVgYddnbuQyS1Xqf10uEvVf_SKXpqxgVXTA';
const API_URL = 'https://api.themoviedb.org/3';

const requestMoviesByTrending = async () => {
  try {
    const response = await axios.get(`${API_URL}/trending/movie/day`, {
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      'Error receiving the list of the most popular movies:',
      error,
    );
    throw error;
  }
};

export { requestMoviesByTrending };
const requestMoviesBySearch = async query => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        query: query,
      },
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      'Error receiving the list of the most popular movies:',
      error,
    );
    throw error;
  }
};

export { requestMoviesBySearch };

const requestMovieDetailsById = async reMovieId => {
  try {
    const response = await axios.get(`${API_URL}/movie/${reMovieId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Failed to get a movie details:', error);
    throw error;
  }
};

export { requestMovieDetailsById };

const requestMovieDetailsCast = async reMovieCastId => {
  try {
    const response = await axios.get(
      `${API_URL}/movie/${reMovieCastId}/credits`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_KEY}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Failed to get a movie details:', error);
    throw error;
  }
};

export { requestMovieDetailsCast };
const requestMovieDetailsReviews = async reMovieCastId => {
  try {
    const response = await axios.get(
      `${API_URL}/movie/${reMovieCastId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_KEY}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Failed to get a movie details:', error);
    throw error;
  }
};

export { requestMovieDetailsReviews };
