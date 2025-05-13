import { Injectable } from '@angular/core';
export interface Note {
  id: number;
  name: string;
  date: string;
  content: string;
  status?: 'static' | 'new' | 'updated' | 'deleted';
}

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[] = [
    {
      id: 1,
      name: 'Note One',
      date: '2025-05-01',
      content: 'Content for Note One',
      status: 'static',
    },
    {
      id: 2,
      name: 'Note Two',
      date: '2025-05-02',
      content: 'Content for Note Two',
      status: 'static',
    },
    {
      id: 3,
      name: 'Note Three',
      date: '2025-05-03',
      content: 'Content for Note Three',
      status: 'static',
    },
    {
      id: 4,
      name: 'Note Four',
      date: '2025-05-04',
      content: 'Content for Note Four',
      status: 'static',
    },
    {
      id: 5,
      name: 'Note Five',
      date: '2025-05-05',
      content: 'Content for Note Five',
      status: 'static',
    },
  ];

  getNotes(): Note[] {
    return this.notes;
  }

  getNote(id: number): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  addNote(note: Note) {
    note.id = Math.max(...this.notes.map((n) => n.id), 0) + 1;
    note.status = 'new';
    this.notes.push(note);
  }

  updateNote(updatedNote: Note) {
    const index = this.notes.findIndex((n) => n.id === updatedNote.id);
    if (index !== -1) {
      updatedNote.status = 'updated';
      this.notes[index] = updatedNote;
    }
  }

  deleteNote(id: number) {
    const index = this.notes.findIndex((n) => n.id === id);
    if (index !== -1) {
      this.notes[index].status = 'deleted';
    }
  }
}
