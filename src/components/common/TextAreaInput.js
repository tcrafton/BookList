import React from "react";
import PropTypes from "prop-types";

const TextAreaInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  rows,
  readOnly,
  error,
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <textarea
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          rows={rows}
          onChange={onChange}
          readOnly={readOnly}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default TextAreaInput;
