import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64e4d0e74705e885a4b4deef",
      user: "64e45d107c03845d981569f1",
      title: "MERN App",
      description: "This is a MERN App backend",
      tag: "Web Development",
      date: "2023-08-22T15:14:47.243Z",
      __v: 0,
    },
    {
      _id: "64e4db2420c94cd7107bcd86",
      user: "64e45d107c03845d981569f1",
      title: "New note",
      description: "This is a backend note",
      tag: "Express Node",
      date: "2023-08-22T15:58:28.505Z",
      __v: 0,
    },
    {
      _id: "64e5aaa59af6aaa17d9fd755",
      user: "64e45d107c03845d981569f1",
      title: "New note1",
      description: "This is a backend note1",
      tag: "Express Node",
      date: "2023-08-23T06:43:49.669Z",
      __v: 0,
    },
    {
      _id: "64e5aaa59af6aaa17d9fd751",
      user: "64e45d107c03845d981569f1",
      title: "New note1",
      description: "This is a backend note1",
      tag: "Express Node",
      date: "2023-08-23T06:43:49.669Z",
      __v: 0,
    },
    {
      _id: "64e5aaa59af6aaa17d9fd752",
      user: "64e45d107c03845d981569f1",
      title: "New note1",
      description: "This is a backend note1",
      tag: "Express Node",
      date: "2023-08-23T06:43:49.669Z",
      __v: 0,
    },
    {
      _id: "64e5aaa59af6aaa17d9fd753",
      user: "64e45d107c03845d981569f1",
      title: "New note1",
      description: "This is a backend note1",
      tag: "Express Node",
      date: "2023-08-23T06:43:49.669Z",
      __v: 0,
    },
    {
      _id: "64e5aaa59af6aaa17d9fd754",
      user: "64e45d107c03845d981569f1",
      title: "New note1",
      description: "This is a backend note1",
      tag: "Express Node",
      date: "2023-08-23T06:43:49.669Z",
      __v: 0,
    },
    {
      _id: "64e5aaa59af6aaa17d9fd756",
      user: "64e45d107c03845d981569f1",
      title: "New note1",
      description: "This is a backend note1",
      tag: "Express Node",
      date: "2023-08-23T06:43:49.669Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    // TODO API call
    const note = {
      _id: "64e5aaa59af6aaa17d9fd757",
      user: "64e45d107c03845d981569f1",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-23T06:43:49.669Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    // TODO API call
    console.log(`Deleting note with id ${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = () => {};

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
