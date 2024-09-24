function createMovie(title, director, year, genres, isWatched) {
  return { title, director, year, genres, isWatched };
}
console.log(
  createMovie("Descendants of the Sun", "Lee Eung-bok", 2016, "drama", true)
);
