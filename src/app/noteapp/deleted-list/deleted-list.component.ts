// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-deleted-list',
//   templateUrl: './deleted-list.component.html',
//   styleUrls: ['./deleted-list.component.scss']
// })
// export class DeletedListComponent implements OnInit {
//   searchTerm = '';
//   deletedRecords: any[] = [];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     // Adjust the URL to match the correct endpoint for fetching deleted records
//     this.http.get<any[]>('http://127.0.0.1:8000/list_details?deleted=true').subscribe(
//       (response) => {
//         this.deletedRecords = response;
//       },
//       (error) => {
//         console.error('Error fetching deleted records:', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/shared/services/user-information.service';

@Component({
  selector: 'app-deleted-list',
  templateUrl: './deleted-list.component.html',
  styleUrls: ['./deleted-list.component.scss']
})
export class DeletedListComponent implements OnInit {
  searchTerm = '';
  p : number=1;

  constructor(public service: UserInformationService) { }

  ngOnInit(): void {
    this.service.bindDeletedRecords();
  }

  restoreRecord(id: number) {
    if (confirm("Are you sure to restore this record?")) {
      this.service.restoreRecord(id).subscribe(() => {
        console.log("Record restored");
        this.service.bindListPosts();
        this.service.bindDeletedRecords();
      });
    }
  }
}
