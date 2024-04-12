import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformation } from 'src/app/shared/models/user-information';
import { UserInformationService } from 'src/app/shared/services/user-information.service';

@Component({
  selector: 'app-noteapp-list',
  templateUrl: './noteapp-list.component.html',
  styleUrls: ['./noteapp-list.component.scss']
})
export class NoteappListComponent implements OnInit {
  searchTerm = '';
  p: number = 1;

  constructor(public service: UserInformationService, public router: Router) { }

  ngOnInit(): void {
    this.service.bindListPosts();
  }

  updatePosts(p: UserInformation) {
    console.log(p);
    this.populatePostsData(p);
    this.router.navigate(['noteapp/edit', p.id])
  }

  populatePostsData(p: UserInformation) {
    this.service.formpostdata = Object.assign({}, p);
  }

  // deletePosts(id: number) {
  //   if (confirm("Are you sure to delete this record?")) {
  //     this.service.movePostToDeleted(id).subscribe(() => {
  //       console.log("Record moved to deleted list");
  //       this.service.bindListPosts();
  //       this.service.bindDeletedRecords();
  //     }, (error) => {
  //       console.log(error);
  //     });
  //   } 
  // }
  deletePosts(id: number) {
    if (confirm("Are you sure to delete this record?")) {
      this.service.movePostToDeleted(id).subscribe(() => {
        console.log("Record moved to deleted list");
        // Remove the deleted record from the list
        this.service.information = this.service.information.filter(post => post.id !== id);
        this.service.bindDeletedRecords();
      }, (error) => {
        console.log(error);
      });
    }
  }

  moveToDeletedList(id: number) {
    this.service.restoreRecord(id).subscribe(() => {
      console.log("Record restored");
      this.service.bindListPosts();
      this.service.bindDeletedRecords();
    });
  }
}
