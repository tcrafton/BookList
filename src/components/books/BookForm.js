import React from "react";
import TextInput from "../common/TextInput";
import TextAreaInput from "../common/TextAreaInput";
import SelectInput from "../common/SelectInput";

const BookForm = ({ book, authors, notes, onChange, onSave, errors = {} }) => {
  return (
    <form onSubmit={onSave} autoComplete="off">
      <div className="row">
        <div className="col-lg-9">
          <TextInput
            name="title"
            label="Title"
            value={book.title || ""}
            onChange={onChange}
            error={errors.title}
          />

          <SelectInput
            name="authorID"
            label="Author"
            value={book.authorID || ""}
            options={authors.map((author) => ({
              value: author.id,
              text: author.name,
            }))}
            onChange={onChange}
            error={errors.author}
          />

          <TextInput
            name="link"
            label={
              <a target="_blank" rel="noopener noreferrer" href={book.link}>
                Link
              </a>
            }
            value={book.link || ""}
            onChange={onChange}
            error={errors.link}
          />

          <TextAreaInput
            name="description"
            label="Description"
            value={book.description || ""}
            onChange={onChange}
            error={errors.description}
            rows="4"
          />
        </div>

        <div
          className="col-lg-3"
          style={{ paddingTop: 30, display: !book.id ? "none" : "" }}
        >
          <img
            src={book.imgLocation}
            alt={book.title}
            width="200"
            height="250"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>

        <div className="col-lg-6">
          <button className="btn btn-light">Notes ({notes.length})</button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
