import { HttpClient, HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { Person } from '../modules/person/person.module';
import { Login } from '../modules/login.module';
import { CompleteMyProfile } from '../modules/CompleteProfile.module';
import { AddImage } from '../modules/AddImge.module';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private registerr = "Auth/register";
  private loginn = "Auth/login";
  private Complete = "Auth/complete-profile";
  private Image = "Auth/Image";
  private user = "Auth/User";
  private UpdatePerson = "Auth/UpdateUser";
  private getImage = "Auth/Image";

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private localStorage: LocalStorageService, private router: Router) { }
  register(person: Person): Observable<any> {
     return this.http.post(`${environment.apiUrl}/${this.registerr}`, person).pipe(
      catchError(this.handleError)
    );

  }

  private handleError(error: HttpErrorResponse) {
  if (error.status === 400) {
    // A client-side or network error occurred. Handle it accordingly.
console.log(error)
    return throwError(() => ({
error:error
     }));
  }
  else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
 return throwError(()=>new Error( error.error));
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.',error.error.errors));
}

  
  
  login(login: Login): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.loginn}`, login).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error);
      })
    );
  }
  
  
    
  CompleteProfile(completeprofile: CompleteMyProfile): Observable<any> {
    const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
   
        
    return this.http.post(`${environment.apiUrl}/${this.Complete}`, completeprofile, httpOptions);
  }

      
  UpdateImage(addImage: AddImage): Observable<any> {
    const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    };
    // Create form data
    const formData = new FormData();
    console.log(addImage.imageUrl);
    // Store form name as "file" with file data
    if (addImage.imageUrl)
      formData.append("image", addImage.imageUrl, addImage.imageUrl.name);
    return this.http.patch(`${environment.apiUrl}/${this.Image}`, formData, httpOptions);
  }

  

  GetUser() {
    const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(
      `${environment.apiUrl}/${this.user}`, httpOptions
    );
  }
  
  UpdateUser(person: Person): Observable<any> {
    const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    };
    // Create form data
    
    return this.http.patch(`${environment.apiUrl}/${this.UpdatePerson}`, person, httpOptions);
  }

   GetImage() {
    const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(
      `${environment.apiUrl}/${this.getImage}`, httpOptions
    );
  }
}