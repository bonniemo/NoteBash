import axios from "axios";
import baseUrl from "../API/apiConfig";
import { Note } from "./types/interfaces";
import { getNotes } from "./getNotes";

export const btnShowNote = document.querySelector(".btn__show-note") as HTMLElement; 

export async function postNote() {
  const inputNoteTitle = document.querySelector(".input__note-title") as HTMLInputElement;
  const inputNoteBody = document.querySelector(".input__note-body") as HTMLInputElement;
  const inputUserName = document.querySelector(".input__user-name") as HTMLInputElement;
  const formBtn = document.querySelector(".btn__submit") as HTMLElement;

  formBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const note = {
      username: inputUserName.value,
      title: inputNoteTitle.value,
      note: inputNoteBody.value,
    } as Note;

    try {
      await axios.post(`${baseUrl}/api/notes`, note);

      getNotes(note.username);
    } catch (error) {
      console.error("Failed to post note:", error);
    }
  });

  btnShowNote.addEventListener("click", (e) => {
    e.preventDefault();
    getNotes(inputUserName.value);
  });
}