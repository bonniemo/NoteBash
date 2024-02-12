
export interface Note {
    id: string;
    username: string;
    title: string;
    note: string;
}

export interface ApiResponse {
    success: boolean;
    notes: Note[];
}

export interface ApiError {
    message: string
    status: number
  }




