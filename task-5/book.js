function createBook(title, author, year, isAvaliable) {
  return { title, author, year, isAvaliable };
}
console.log(
  createBook("A Thousand Shining Suns", "Khaled Hosseini", 2007, true)
);
