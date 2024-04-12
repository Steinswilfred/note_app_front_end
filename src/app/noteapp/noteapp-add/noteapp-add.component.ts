import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from 'src/app/shared/models/items';
import { UserInformationService } from 'src/app/shared/services/user-information.service';

@Component({
  selector: 'app-noteapp-add',
  templateUrl: './noteapp-add.component.html',
  styleUrls: ['./noteapp-add.component.scss']
})
export class NoteappAddComponent implements OnInit {
  searchTerm: string = '';
  filteredItems: Items[] = [];
  
  constructor(public service:UserInformationService,public router:Router) { }

  ngOnInit(): void {
    this.service.listitems();
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.addposts(form)
  }
  addposts(form:NgForm){
    console.log("inserting")
    this.service.insertposts(form.value).subscribe(
      (result=>{
        console.log(result);
        this.resetForm(form);
        this.router.navigate(['noteapp/list'])
      }))
  }
  //recent form after add record
  resetForm(form:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

}