import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteappListComponent } from './noteapp-list/noteapp-list.component';
import { NoteappEditComponent } from './noteapp-edit/noteapp-edit.component';
import { NoteappAddComponent } from './noteapp-add/noteapp-add.component';
import { DeletedListComponent } from './deleted-list/deleted-list.component';

const routes: Routes = [
  {path:'add',component:NoteappAddComponent},
  {path:'list', component: NoteappListComponent},
  {path:'edit', component: NoteappEditComponent},
  {path:'edit/:id',component:NoteappEditComponent},
  {path:'deleted-list',component:DeletedListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteappRoutingModule { }
