let numberOfFilms;for (; !numberOfFilms;) {  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')}const personalMovieDB = {  count: numberOfFilms,  movies: {},  actors: {},  genres: [],  privat: false};// let lastOfWatchedFilmsA,//     howMuchRateItA,//     lastOfWatchedFilmsB,//     howMuchRateItB;  for (let i = 0; i < personalMovieDB.count / 10 + 2; i++) {  const lastOfWatchedFilms = prompt('Один из последних просмотренных фильмов?', '');  const howMuchRateIt = prompt('На сколько оцените его?', '')  if (lastOfWatchedFilms != null && howMuchRateIt != null && lastOfWatchedFilms !== '' && howMuchRateIt !== '' && lastOfWatchedFilms.length < 50) {    console.log('done');    personalMovieDB.movies[lastOfWatchedFilms] = howMuchRateIt;  } else {    console.log('error');    i--;  }}  if (personalMovieDB.count < 10) {    console.log('Просмотрено довольно мало фильмов')  } else if (personalMovieDB.count > 30) {    console.log('Вы киноман')  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {    console.log('Вы классический зритель')  } else (console.log('Произошла ошибка'))console.log(personalMovieDB);