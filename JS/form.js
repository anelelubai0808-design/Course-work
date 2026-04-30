// Простая библиотека книг - 1 курс
const formBook = document.querySelector("#books-form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const genre = document.querySelector("#genre");

const rawData = localStorage.getItem("books");
let books = rawData ? JSON.parse(rawData) : [];

// Загрузка книг из памяти браузера
function loadBooks() {
  let saved = localStorage.getItem("books");
  if (saved) {
    books = JSON.parse(saved);
  }
  showBooks();
}

// Сохранение книг в память браузера
function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

// Добавление книги
formBook.addEventListener("submit", (e) => {
  e.preventDefault(); // Отмена перезагрузки страницы
  const newItem = {
    title: title.value,
    author: author.value,
    year: year.value,
    genre: genre.value,
  };
  books.push(newItem); // Добавляем в массив
  saveBooks(); // Сохраняем в localStorage
  author.value = ""; // Очищаем поле ввода
  title.value = "";
  year.value = "";
  genre.value = "";
});

if (formBook) {
  formBook.onsubmit = function (e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    if (title && author) {
      books.push({ title: title, author: author });
      console.log(books);
      saveBooks();
      alert("Книга добавлена!");
      form.reset();
    } else {
      alert("Заполните название и автора!");
    }
  };
}
