import axios from "axios";
import baseUrl from "./apiConfig";
import { Note, ApiResponse, ApiError } from "../types/interfaces";
import { displayNotes } from "./displayNotes";

export async function getNotes(username: string) {
    const url = `${baseUrl}/api/notes/${username}`;
  
    try {
      const response = await axios.get<ApiResponse | ApiError>(url);
  
      if ('notes' in response.data) {
        const notes: Note[] = response.data.notes;
        displayNotes(notes);
      } else {
        console.error('Failed to get notes:', response.data.message);
      }
      
    } catch (error) {
      console.log(error);
    }
  }