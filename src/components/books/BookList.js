import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books, authors, onDeleteClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          return (
            <tr key={book.id}>
              <td>
                <Link
                  to={{
                    pathname: "/book/" + book.id,
                    state: { authors: authors },
                  }}
                >
                  {book.title}
                </Link>
              </td>
              <td>{book.authorName}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteClick(book)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BookList;
