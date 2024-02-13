import axios from "axios";
import baseUrl from "./apiConfig";
import { Note } from "../types/interfaces";
import { getNotes } from "./getNotes";

export async function updateNote(data: Note | null) {
    if (!data) {
      console.error("Missing parameters for updating note.");
      return;
    }
  
    try {
      const updatedNote = prompt("Enter updated note:", data.note);
  
      if (updatedNote !== null) {
        await axios.put(
          `${baseUrl}/api/notes/${data.id}`,
          { note: updatedNote }
        );
  
        getNotes(data.username);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function deleteNote(id: string | null) {
    const URL = `${baseUrl}/api/notes/${id}`;
    try {
      await axios.delete(URL);
    } catch (error) {
      console.log(error);
    }
  }