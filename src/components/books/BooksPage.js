import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as bookApi from "../../api/bookApi";
import * as authorApi from "../../api/authorApi";
import BookList from "./BookList";
import { ToastContainer, toast } from "react-toastify";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    authorApi.getAuthors().then((response) => {
      setAuthors(response);
    });
  }, []);

  useEffect(() => {
    bookApi.getBooks().then((response) => {
      setBooks(() => {
        return authors.length === 0
          ? []
          : response.map((book) => {
              return {
                ...book,
                authorName: authors.find((a) => a.id === book.authorID).name,
              };
            });
      });
    });
  }, [authors]);

  const handleDeleteBook = async (book) => {
    toast.success("Book deleted");
    bookApi.deleteBook(book.id);
    setBooks(books.filter((b) => b.id !== book.id));
  };

  return (
    <>
      <Link
        style={{ marginBottom: 20 }}
        to={{
          pathname: "/book/",
          state: { authors: authors },
        }}
        className="btn btn-primary"
      >
        Add Book
      </Link>

      <BookList
        books={books}
        authors={authors}
        onDeleteClick={handleDeleteBook}
      />

      <ToastContainer />
    </>
  );
};

export default BooksPage;
