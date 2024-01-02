import React, { ChangeEvent, useState } from "react";
import Note from "./note";
import { Sidebar } from "../../layouts";
import { NoteProps } from "../../interfaces/note.interface";
import Swal from "sweetalert2";

interface TodoAppProps {
  showApp: boolean;
  setShowApp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoApp({ showApp, setShowApp }: TodoAppProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [valid, setValid] = useState<boolean>(false);

  function submitNote() {
    if (notes.length === 2) {
      setValid(true);
      return;
    }

    if (title.length === 0 || description.length === 0) return;
    setNotes((prev) => [...prev, { title, description }]);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your note has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div
      className="fixed top-0 w-full h-screen app-bg grid place-content-center transition-300 ease-in justify-items-center z-10"
      style={
        showApp
          ? { left: 0, transition: "1s", zIndex: 99 }
          : { left: "100%", zIndex: 99, transition: "1s" }
      }
    >
      <Sidebar setShowApp={setShowApp}></Sidebar>
      <div
        className="app-container-bg rounded-lg shadow-lg z-30"
        style={{ width: "1200px", height: "600px", borderRadius: "30px" }}
      >
        <h3 className="m-8 font-bold text-5xl tracking-wider">Notes</h3>
        <hr className=" mx-14" />

        <div className="w-fill flex m-10">
          <div className="grow flex">
            {notes.length === 0 ? (
              <p className="text-center mt-40 w-full text-2xl">No Notes Yet!</p>
            ) : (
              notes.map((note) => (
                <Note title={note.title} description={note.description} />
              ))
            )}
          </div>

          <div className="w-full max-w-xs mr-24">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  className="shadow appearance-none bord rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  placeholder="Description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <p className="text-xs italic">Write a description</p>
              </div>
              <div className="flex items-center justify-evenly">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-1"
                  type="button"
                  onClick={() => submitNote()}
                >
                  Create Note
                </button>
                <button
                  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your Notes have been deleted.",
                          icon: "success",
                        });
                        setNotes([]);
                        setValid(false);
                      }
                    });
                  }}
                >
                  Delete Notes
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              Create New Notes.
            </p>
          </div>
        </div>

        {valid && (
          <div>
            <p className="text-center text-red-600">
              Cannot create more than two notes
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
