import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteappComponent } from './noteapp/noteapp.component';
import { SharedComponent } from './shared/shared.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'auth',component:AuthComponent,
  loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)},
  {path:"",redirectTo:"shared/home",pathMatch:'full'},
  {path:'noteapp',component:NoteappComponent,
    loadChildren:()=>import('./noteapp/noteapp.module').then(x=>x.NoteappModule)},
  {path:"shared",component:SharedComponent,
    loadChildren:()=>import('./shared/shared.module').then(x=>x.SharedModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
