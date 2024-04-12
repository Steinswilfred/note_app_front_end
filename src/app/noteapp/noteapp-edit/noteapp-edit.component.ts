import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInformationService } from 'src/app/shared/services/user-information.service';

@Component({
  selector: 'app-noteapp-edit',
  templateUrl: './noteapp-edit.component.html',
  styleUrls: ['./noteapp-edit.component.scss']
})
export class NoteappEditComponent implements OnInit {

  constructor(public service: UserInformationService, public router: Router) { }

  ngOnInit(): void {
    this.service.listitems();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.editPosts(form)
  }
  editPosts(form: NgForm) {
    console.log("editing....")
    this.service.updatePosts(form.value)
      .subscribe((result => {
        console.log(result);
        this.router.navigate(['noteapp/list'])

      }))
  }
}
