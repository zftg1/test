'use strict';

//PRACTICE 1.1

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false,
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

//debug test
console.log(numberOfFilms);
console.log(personalMovieDB);