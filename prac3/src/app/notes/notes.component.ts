import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { NotesService, Note } from '../notes.service';
import { NoteColorDirective } from '../note-color.directive';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NoteColorDirective],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  notes: Note[] = [];
  formNote: Note = {
    id: 0,
    name: '',
    date: '',
    content: '',
  };
  isEdit: boolean = false;

  constructor(private notesService: NotesService, private router: Router) {
    this.loadNotes();
  }

  loadNotes() {
    this.notes = this.notesService.getNotes();
  }

  saveNote() {
    if (this.formNote.name.length < 1) {
      alert('Note title required');
      return;
    }
    if (this.isEdit) {
      this.notesService.updateNote(this.formNote);
    } else {
      this.notesService.addNote(this.formNote);
    }
    this.resetForm();
    this.loadNotes();
  }

  editNote(note: Note) {
    if (note.status === 'deleted') return;
    this.formNote = { ...note };
    this.isEdit = true;
  }

  deleteNote(id: number) {
    this.notesService.deleteNote(id);
    this.loadNotes();
  }

  viewNote(id: number) {
    console.log('in router');
    this.router.navigate(['/note', id]);
  }

  resetForm() {
    this.formNote = {
      id: 0,
      name: '',
      date: '',
      content: '',
    };
    this.isEdit = false;
  }
}
