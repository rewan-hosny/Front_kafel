import { Component } from '@angular/core';
import { AuthServicesService } from '../services/auth-services.service';

import { Person } from '../modules/person/person.module';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 newItem: Person = new Person(); // Initialize the 'newItem' with a new instance of 'Person'

  constructor(private authService: AuthServicesService, private router: Router, private jwtHelper: JwtHelperService,) { }
register(): void {
  this.authService.register(this.newItem).subscribe(
    (response: any) => {
      // Handle the successful response here
      console.log(response);

      // Store the JWT token in local storage (as a string)
      localStorage.setItem('Authorization', response.token);

      // Decode the JWT token to get user information
      const decodedToken = this.jwtHelper.decodeToken(response.token);

      // Store user information in local storage
      localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
      localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);

      // Redirect to the home page
      this.router.navigate(['/home']);
    },
    (error: any) => {
      console.log(error);
      console.log(error.error.errors); // Log the specific error messages, if available
      // Handle the error as needed
    }
  );
}



}
