// import { Component, OnInit } from '@angular/core';
// import { UserInformationService } from 'src/app/shared/services/user-information.service';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.scss']
// })
// export class SignupComponent {
//   username: string = '';
//   email: string = '';
//   otp: string = '';
//   password: string = '';
//   confirmPassword: string = '';
//   otpSent: boolean = false;
//   signupSuccess: boolean = false;

//   constructor(private signupService: UserInformationService) {}

//   sendOTP() {
//     this.signupService.sendOTP(this.email)
//       .subscribe(
//         response => {
//           console.log(response);
//           this.otpSent = true;
//         },
//         error => {
//           console.error(error);
//           // Handle error
//         }
//       );
//   }

//   verifyOTP() {
//     this.signupService.verifyOTP(this.email, this.otp)
//       .subscribe(
//         response => {
//           console.log(response);
//           this.signupSuccess = true;
//         },
//         error => {
//           console.error(error);
//           // Handle error
//         }
//       );
//   }

//   signup() {
//     const signupData = {
//       username: this.username,
//       email: this.email,
//       password: this.password
//     };

//     this.signupService.signup(signupData)
//       .subscribe(
//         response => {
//           console.log(response);
//           // Handle success
//         },
//         error => {
//           console.error(error);
//           // Handle error
//         }
//       );
//   }
// }
// signup.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/shared/models/signup';
import { UserInformationService } from 'src/app/shared/services/user-information.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupData: Signup = new Signup();
  otpSent: boolean = false;
  otpVerified: boolean = false;
  errorMessage: string = '';
  sentOTP: string = ''; // Define sentOTP property

  constructor(public service: UserInformationService,public router:Router) { }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.Signup(form)
  }
  Signup(form:NgForm){
    console.log("inserting")
    this.service.signup(form.value).subscribe(
      (result=>{
        console.log(result);
        this.resetForm(form);
        this.router.navigate(['shared/home'])
      }))
  }
  //recent form after add record
  resetForm(form:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

}