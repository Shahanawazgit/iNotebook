import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDVkMTA3YzAzODQ1ZDk4MTU2OWYxIn0sImlhdCI6MTY5MjY4ODQ4NX0.iw-t4KzfyFAEQS8HpsbdUwj2jnUMKdLLkvkJXuOTxRI",
      },
    });
    const allNotes = await response.json();
    setNotes(allNotes);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDVkMTA3YzAzODQ1ZDk4MTU2OWYxIn0sImlhdCI6MTY5MjY4ODQ4NX0.iw-t4KzfyFAEQS8HpsbdUwj2jnUMKdLLkvkJXuOTxRI",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const newNote = await response.json();
    setNotes(notes.concat(newNote));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDVkMTA3YzAzODQ1ZDk4MTU2OWYxIn0sImlhdCI6MTY5MjY4ODQ4NX0.iw-t4KzfyFAEQS8HpsbdUwj2jnUMKdLLkvkJXuOTxRI",
      },
    });

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDVkMTA3YzAzODQ1ZDk4MTU2OWYxIn0sImlhdCI6MTY5MjY4ODQ4NX0.iw-t4KzfyFAEQS8HpsbdUwj2jnUMKdLLkvkJXuOTxRI",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < notes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
