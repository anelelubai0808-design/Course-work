// Простая библиотека книг - 1 курс
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

// Показ всех книг
function showBooks() {
  let list = document.getElementById("book-list");
  let total = document.getElementById("count");
  total.textContent = books.length;
  console.log(list);
  list.innerHTML = "";
  //   total.textContent = books.length;
  console.log(books);

  if (books.length == 0) {
    list.innerHTML =
      "<p style='text-align:center; color:gray; padding:30px;'>Пока нет книг</p>";
    return;
  }

  for (let i = 0; i < books.length; i++) {
    let div = document.createElement("div");
    div.className = "book-card";
    div.innerHTML = `
            <h3>${books[i].title}</h3>
            <p>Автор: ${books[i].author}</p>
            <p>год издания: ${books[i].year}</p>
            <p>Жанр: ${books[i].genre}</p>
            <button onclick="deleteBook(${i})">Удалить</button>
        `;
    list.appendChild(div);
  }
}
window.deleteBook = function(index) {
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  showBooks();
}
// Запуск программы
loadBooks();
