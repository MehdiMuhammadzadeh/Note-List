import Header from "./components/Header";
import Search from "./components/Search";
import AddNoteCard from "./components/AddNoteCard";
import NoteStick from "./components/NoteStick";
import { useEffect, useState } from "react";
import "./global.css";
import Swal from "sweetalert2";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (value) => {
    const newNote = {
      id: Date.now(),
      content: value,
      createdAt: Date.now(),
    };

    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      setNotes(notes);
    }
  }, []);

  const handleRemoveNote = (id) => {
    const filterdNotes = notes.filter((note) => note.id !== id);
    Swal.fire({
      title: "Note Deleted",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      toast: true,
      position: "top",
    });
    setNotes(filterdNotes);
    localStorage.setItem("notes", JSON.stringify(filterdNotes));
  };

  const handleSearch = (e) => {
    if (e.target.value.length === 0){
      
      return setNotes(JSON.parse(localStorage.getItem("notes")));
    }

    const searchNotes = notes.filter((note) => {
      return note.content.toLowerCase().includes(e.target.value.toLowerCase());
    });

    if (searchNotes.length === 0) {
      return Swal.fire({
        title: "Nothing like this to search!",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
        toast: true,
        position: "top",
      });
    }

    setNotes(searchNotes);
  };

  return (
    <div className="container mx-auto px-10 sm:px-0">
      <Header />
      <Search handleSearch={(e) => handleSearch(e)} />
      <div className="grid grid-cols-12 gap-3 mt-7 ">
        {notes.map((item) => {
          return (
            <NoteStick
              item={item}
              key={item.id}
              handleRemoveNote={() => handleRemoveNote(item.id)}
            />
          );
        })}
        <AddNoteCard handleAddNote={(e) => handleAddNote(e)} />
      </div>
    </div>
  );
}

export default App;
