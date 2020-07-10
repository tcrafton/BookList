import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";
import * as bookApi from "../../api/bookApi";
import * as noteApi from "../../api/noteApi";
import newBook from "./newBook";
import { ToastContainer, toast } from "react-toastify";

const ManageBookPage = (props) => {
  const [book, setBook] = useState({});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (props.match.params.id) {
      bookApi.getBookById(props.match.params.id).then((response) => {
        setBook(response[0]);
      });
    } else {
      setBook(newBook);
    }
  }, [props.match.params.id]);

  useEffect(() => {
    noteApi.getNotesByBookId(props.match.params.id).then((response) => {
      setNotes(response);
    });
  }, [props.match.params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: name === "authorID" ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    bookApi
      .saveBook(book)
      .then(() => {
        toast.success("Book saved");
        setTimeout(() => {
          props.history.push("/books");
        }, 1000);
      })
      .catch((error) => {
        toast.error("Something has gone awry");
      });
  };

  return (
    <>
      <BookForm
        book={book}
        authors={props.location.state.authors}
        notes={notes}
        onChange={handleChange}
        onSave={handleSave}
      />
      <ToastContainer />
    </>
  );
};

export default ManageBookPage;
