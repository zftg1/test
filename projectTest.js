'use strict';

//PRACTICE 1.2
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)

// MAIN OBJECT

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false,
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');
          if (a != null && b != null && a != '' && b != '' && a.length < 50){
              personalMovieDB.movies[a] = b;
              console.log('done!');
          } else {
              console.log('Error');
              i--;
          }
}

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

const checkCount = (value) => {
    if (value < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (value >= 10 && value <= 30) {
        alert('Вы классический зритель');
    } else if (value > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
};

checkCount(personalMovieDB.count);

//debug test
console.log(personalMovieDB);