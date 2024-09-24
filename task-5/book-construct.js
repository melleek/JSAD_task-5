function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

const firstBook = new Book("A Thousand Splendid Suns", "Khaled Hosseini", 2007, "roman");
const secondBook = new Book("Harry Potter: The Philosopher's Stone", "J. K. Rowling)", 2011, "fantasy");
const thirdBook = new Book("The Kite Runner", "Khaled Hosseini", 2003, "drama");

console.log(firstBook);
console.log(secondBook);
console.log(thirdBook);
