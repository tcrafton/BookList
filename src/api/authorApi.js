import { handleResponse, handleError } from "./apiUtil";
import { API_URL } from "./apiConfig";

const baseUrl = API_URL + "authors";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
