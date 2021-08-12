'use strict';

//PRACTICE 1.3
//1
let numberOfFilms;

// const start = () => {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// };

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false,
};

// const rememberMyFilms = () => {
//     for (let i = 0; i < 2; i++){
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = +prompt('На сколько оцените его?', '');
//               if (a != null && b != null && a != '' && b != '' && a.length < 50){
//                   personalMovieDB.movies[a] = b;
//                   console.log('done!');
//               } else {
//                   console.log('Error');
//                   i--;
//               }
//     }    
// };

// rememberMyFilms();

// const detectPersonalLevel = () => {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// };

// detectPersonalLevel();

// const showMyDB = () => {
//     if (personalMovieDB.private === false) {
//         console.log(personalMovieDB);
//     }
// };

// showMyDB();

let genresAnswer;
const writeYourGenres = () => {
    while (genresAnswer <= 3) {
        let filmNumber;
        for (filmNumber = 0; filmNumber <= 3; filmNumber++) {
            return filmNumber; 
        }
        genresAnswer = prompt(`Ваш любимый жанр под номером ${filmNumber}`);
    }

    return personalMovieDB.genres.push(genresAnswer);
};

writeYourGenres(genresAnswer);

//debug test
console.log(personalMovieDB);