import { handleResponse, handleError } from "./apiUtil";
import { API_URL } from "./apiConfig";

const baseUrl = API_URL + "bookNotes/";

export function getNotes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getNotesByBookId(bookId) {
  return fetch(baseUrl + "?bookId=" + bookId)
    .then(handleResponse)
    .catch(handleError);
}
