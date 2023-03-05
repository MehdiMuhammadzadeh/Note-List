import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const AddNoteCard = ({ handleAddNote }) => {
  // const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(500);
  const textAreaRef = useRef();

  const handleChangeTextarea = () => {
    if (textAreaRef.current.value.length === 0)
      return Swal.fire({
        icon: "error",
        title: "Empty Note!",
        text: "Note cannot be empty, Please Add a note!",
      });
      setMaxCount(500)
    handleAddNote(textAreaRef.current.value);
    textAreaRef.current.value = "";
  };
  const recalculate = (e) => {
    // setCount(e.target.value.length)
    setMaxCount(500 - e.target.value.length);
  };

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-teal-400 rounded-md p-5 h-full">
      <textarea
        onChange={recalculate}
        maxLength={500}
        ref={textAreaRef}
        className="w-full rounded-lg bg-transparent p-2 outline-none text-blac"
        cols="30"
        rows="6"
        placeholder="Type to add a note ..."
      ></textarea>
      <div className="flex justify-between items-center">
        {/* <span>{count}/250</span>  */}
        <span>{maxCount} Remaining</span>
        <span>
          <button
            onClick={handleChangeTextarea}
            className="bg-gray-200 px-3 py-1 rounded-3xl font-bold text-lg hover:bg-gray-300"
          >
            Save
          </button>
        </span>
      </div>
    </div>
  );
};

export default AddNoteCard;
