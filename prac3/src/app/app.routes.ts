import { Routes } from '@angular/router';
import { ViewNoteComponent } from './view-note/view-note.component';
import { NotesComponent } from './notes/notes.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'notes',
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'note/:id',
    component: ViewNoteComponent,
  },
];
