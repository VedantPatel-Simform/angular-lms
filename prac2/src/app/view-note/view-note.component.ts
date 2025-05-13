import { Component, inject, Input, OnInit } from '@angular/core';
import { Note, NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-note',
  imports: [],
  templateUrl: './view-note.component.html',
  styleUrl: './view-note.component.css',
})
export class ViewNoteComponent implements OnInit {
  noteService = inject(NotesService);
  activatedRoute = inject(ActivatedRoute);
  note!: Note | undefined;
  id!: number;

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.id);
    this.note = this.noteService.getNote(Number(this.id));
  }
}
