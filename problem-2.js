// Create an array of objects representing books with properties like title, author, and year. 
// Write a function that takes the array and returns a new array with only the book titles.
//  Print the result.

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];


function getBookTitles(bookArray) {
  return bookArray.map(book => book.title);
}


const titles = getBookTitles(books);
// console.log(titles);

