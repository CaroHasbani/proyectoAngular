// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  // usuarios
  moviesRestApi: 'https://61ca086020ac1c0017ed8f66.mockapi.io/',
  // peliculas
  movieApi: ' https://api.themoviedb.org/3/discover/movie?api_key=fd31753f3bac10778d2c67b3ea7f76d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
  apiKey:'fd31753f3bac10778d2c67b3ea7f76d2',
  // img pelicula
  imgAPI:'https://image.tmdb.org/t/p/w500/',
  firstPart:'https://api.themoviedb.org/3/movie/',
  lastPart:'?api_key=fd31753f3bac10778d2c67b3ea7f76d2',
  videoAPI2:'videos?api_key=fd31753f3bac10778d2c67b3ea7f76d2&language=en-US',
  // YT:'https://www.youtube.com/watch?v='
  YT: 'https://www.youtube.com/embed/'
};

