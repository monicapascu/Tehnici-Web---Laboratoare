var movie = {
  titlu: 'Scent of a Woman',
  durata: 156,
  actori: ['Al Pacino','Chris O`Donnell','Gabrielle Anwar']
}

function afisFilm(film){
  console.log(movie.titlu + 'a durat ' + movie.durata + 'de minute. Actori: ' + movie.actori.join(','));
}

afisFilm(movie);
