import { handleResponse, handleError } from "./apiUtil";
import { API_URL } from "./apiConfig";

const baseUrl = API_URL + "books/";

export function getBooks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getBookById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then(handleResponse)
    .catch(handleError);
}

export function saveBook(book) {
  return fetch(baseUrl + (book.id || ""), {
    method: book.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(book),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBook(bookId) {
  return fetch(baseUrl + bookId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
