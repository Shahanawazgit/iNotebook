import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import noteImg from "../assets/noteImg.jpg";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;

  return (
    <div className="col-md-4">
      <div className="card my-2">
        <img src={noteImg} className="card-img-top" alt="Note img" />
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger mx-1"
              onClick={() => {
                deleteNote(note._id);
                showAlert("Note Deleted Successfully", "success");
              }}
            >
              Delete <i className="fa-solid fa-trash-can mx-2" />
            </button>
            <button
              className="btn btn-warning mx-1"
              onClick={() => {
                updateNote(note);
              }}
            >
              Edit <i className="fa-solid fa-pen-to-square mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
