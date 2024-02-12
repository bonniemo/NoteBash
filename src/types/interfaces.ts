
export interface Note {
    id: string;
    username: string;
    title: string;
    note: string;
}

// Fix this interface
export interface ApiResponse {
    notes: Note[];
}

export interface ApiError {
    message: string
    status: number
  }




