import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

export default function Alert() {
  let context = useContext(NoteContext);
  let { alert } = context;
  const capital = (word) => {
    if (word === "danger") {
      word = "Error";
    }
    return word[0].toUpperCase().concat(word.slice(1));
  };
  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capital(alert.type)}</strong>: {alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}
