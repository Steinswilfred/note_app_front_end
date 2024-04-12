import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginData: Login = new Login();

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.http.post<any>(environment.apiUrl+'/user/login', formData).subscribe(
        (res) => {
          this.loginData = res;
          if (this.loginData.status === 200) {
            // Login successful, save token to localStorage or session storage
            localStorage.setItem('token', this.loginData.data.Token);
            // Redirect to desired route
            this.router.navigate(['shared/home']);
          } else {
            // Handle error response
            console.log('Error:', this.loginData.message);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.log('Invalid Form');
    }
  }
}

// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       const formData = this.loginForm.value;
//       this.http.post<any>(`${environment.apiUrl}/user/login`, formData).subscribe(
//         (response) => {
//           if (response.status === 200 && response.data.token) {
//             // Login successful, save token to localStorage
//             localStorage.setItem('token', response.data.token);
//             // Redirect to desired route
//             this.router.navigate(['shared/home']);
//           } else {
//             // Handle error response
//             console.error('Login failed:', response.message);
//           }
//         },
//         (error) => {
//           console.error('Login error:', error);
//         }
//       );
//     } else {
//       console.log('Invalid Form');
//     }
//   }
// }
