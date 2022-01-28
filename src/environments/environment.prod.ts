export const environment = {
  production: true,
  // api de peliculas
  movieApi: ' https://api.themoviedb.org/3/discover/movie?api_key=fd31753f3bac10778d2c67b3ea7f76d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
  imgAPI:'https://image.tmdb.org/t/p/w500/',
  apiKey:'fd31753f3bac10778d2c67b3ea7f76d2',
  firstPart:'https://api.themoviedb.org/3/movie/',
  lastPart:'?api_key=fd31753f3bac10778d2c67b3ea7f76d2',
  videoAPI2:'videos?api_key=fd31753f3bac10778d2c67b3ea7f76d2&language=en-US',
  recAPI: 'similar?api_key=fd31753f3bac10778d2c67b3ea7f76d2&language=en-US&page=1',
  YT: 'https://www.youtube.com/embed/',
  // api del carrito
  cartRestApi: "http://localhost:3000/api/cart",
  // login
  restApi:   'http://localhost:3000/api/'
};
