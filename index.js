const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

let movies = [
  {
    title: 'Silence of the Lambs',
    description: 'A young FBI must receive the help of nobody',
    genre: {
      name: 'Thriller',
      description: 'Thriller film also known as suspense film or suspense thriller'
    },
    director: {
      name: 'Jonathan Demme',
      bio: 'Robert Jonathan Demme was an American director, producer and screenwriter',
      birth: 1994,
      death: 2017
    }
  },
  {
    title: 'Inception',
    description: 'Description for Inseption movie',
    genre: {
      name: 'Action',
      description: 'Action film is an adventurous type of film'
    },
    director: {
      name: 'Christopher Nolan',
      bio: 'Nolan is a great director',
      birth: 1950,
      death: 2018
    }
  },
  {
    title: 'Fight Club',
    description: 'Description for Fight Club movie',
    genre: {
      name: 'Action',
      description: 'Action film is an adventurous type of film'
    },
    director: {
      name: 'Jonathan Demme',
      bio: 'Robert Jonathan Demme was an American director, producer and screenwriter',
      birth: 1994,
      death: 2017
    }
  },
];

// app.get('/movies', (req, res) => {
//   console.log('filter by title');
//   const title = req.query.title;
//   const genre = req.query.genre;
//   const director = req.query.director;
//   let filtered = movies;
//   if (title){
//     filtered = filtered.filter(movie => movie.title === title);
//   }
//   if (genre) {
//     filtered = filtered.filter(movie => movie.genre.name === genre);
//   }
//   if (director) {
//     filtered = filtered.filter(movie => movie.director.name === director);
//   }
//   res.json(filtered);
//   // if (title) {
//   //   res.json(movies.filter(movie => movie.title === title
//   //       && movie.genre.name === genre
//   //       && movie.director.name === director));
//   // } else {
//   //   res.json(movies.filter(movie => movie.genre.name === genre
//   //       && movie.director.name === director));
//   // }
// });

app.get('/movies', (req, res) => {
  res.json(movies);
});

// app.get('/movies/:title?/:genre/:director', (req, res) => {
//   console.log('filter by title');
//   const title = req.params.title;
//   const genre = req.params.genre;
//   const director = req.params.director;
//
//   if (title) {
//     res.json(movies.filter(movie => movie.title === title
//         && movie.genre.name === req.params.genre
//         && movie.director.name === req.params.director));
//   } else {
//     res.json(movies.filter(movie => movie.genre.name === req.params.genre
//         && movie.director.name === req.params.director));
//   }
// });

app.get('/movies/:title', (req, res) => {
  console.log('filter by title');
  const title = req.params.title;
  res.json(movies.filter(movie => movie.title === title));
});

app.get('/movies/:genre/:director', (req, res) => {
  console.log('filter by genre and director');
  let result = movies.filter(movie => movie.genre.name === req.params.genre && movie.director.name === req.params.director);
  res.json(result);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});
