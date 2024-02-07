export const api_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDP_ACCESS_TOKEN,
  },
};

export const imagePath = "https://media.themoviedb.org/t/p/w440_and_h660_face/";
export const altImagePath =
  "https://img.freepik.com/premium-vector/movie-time-neon-text-cinema-movie-night-movie-time-neon-sign-logo-emblem-cinema-banner-label-night-b_104045-2510.jpg?w=1380";
