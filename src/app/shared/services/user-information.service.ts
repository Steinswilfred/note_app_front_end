// // import { Injectable } from '@angular/core';
// // import { UserInformation } from '../models/user-information';
// // import { environment } from 'src/environments/environment';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { Items } from '../models/items';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UserInformationService {

// //   information: UserInformation[] = [];
// //   formpostdata: UserInformation = new UserInformation;
// //   category : Items[]= [];
  
// //   constructor(private httpClient: HttpClient) {}

// //   //list
// //   bindListPosts():void{
// //     this.httpClient.get<UserInformation[]>(environment.apiUrl+ "/list_details").subscribe(response=>this.information = response)
// //   }


// //   //update
// //   updatePosts(information:UserInformation) : Observable<any>{
// //     console.log("in update");
// //     return this.httpClient.put(environment.apiUrl+"/information/"+information.id,information)
// //   }

// //   listitems():void{
// //     this.httpClient.get<Items[]>(environment.apiUrl+ "/item_list").subscribe(response=>this.category = response)
// //   }

// //   //add
// //   insertposts(posts:UserInformation):Observable<any>{
// //     return this.httpClient.post(environment.apiUrl+'/list_details',posts)
// //   }

// //   //delete
// //   deletePosts(id:number){
// //     return this.httpClient.delete(environment.apiUrl+"/information/"+id);
// //   }


// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInformation } from '../models/user-information';
import { Items } from '../models/items';
import { Signup } from '../models/signup';


@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  completeSignup(value: any) {
    throw new Error('Method not implemented.');
  }

  information: UserInformation[] = [];
  deletedRecords: UserInformation[] = [];
  formpostdataAdd: UserInformation = new UserInformation();
  formpostdata: UserInformation = new UserInformation();
  category: Items[] = [];
  signupdata: Signup = new Signup();

  constructor(private httpClient: HttpClient) { }

  bindListPosts(): void {
    this.httpClient.get<UserInformation[]>(environment.apiUrl + "/list_details/").subscribe(response => {
      // Exclude deleted records from the list
      this.information = response.filter(post => !post.isDeleted);
    });
  }

  updatePosts(information: UserInformation): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/information/" + information.id + '/', information);
  }

  bindDeletedRecords(): void {
    this.httpClient.get<UserInformation[]>(environment.apiUrl + "/deleted_list/").subscribe(response => this.deletedRecords = response);
  }

  listitems(): void {
    this.httpClient.get<Items[]>(environment.apiUrl + "/item_list/").subscribe(response => this.category = response)
  }

  restoreRecord(id: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/information/restore/" + id + '/', {});
  }

  insertposts(posts: UserInformation): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/list_details/', posts);
  }

  deletePosts(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/information/" + id + '/');
  }

  movePostToDeleted(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/move_to_deleted/" + id + '/');
  }

  signup(signup: Signup): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/user/signup', signup);
  }

}
