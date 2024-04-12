import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteappRoutingModule } from './noteapp-routing.module';
import { NoteappComponent } from './noteapp.component';
import { NoteappAddComponent } from './noteapp-add/noteapp-add.component';
import { NoteappListComponent } from './noteapp-list/noteapp-list.component';
import { NoteappEditComponent } from './noteapp-edit/noteapp-edit.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { DeletedListComponent } from './deleted-list/deleted-list.component'
import {NgxPaginationModule} from 'ngx-pagination'

@NgModule({
  declarations: [
    NoteappComponent,
    NoteappAddComponent,
    NoteappListComponent,
    NoteappEditComponent,
    DeletedListComponent
  ],
  imports: [
    CommonModule,
    NoteappRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class NoteappModule { }
