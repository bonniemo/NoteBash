
export interface Note {
    id: string;
    username: string;
    title: string;
    note: string;
}

// Fix this interface
export interface ApiResponse {
    notes: Note[];
    status: number;
}

export interface ApiError <T, D> {
    message: T;
    status: D;
  }




