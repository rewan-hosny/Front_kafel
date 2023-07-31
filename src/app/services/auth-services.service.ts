import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../modules/person/person.module';
import { Login } from '../modules/login.module';
import { CompleteMyProfile } from '../modules/CompleteProfile.module';
import { AddImage } from '../modules/AddImge.module';


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
    return this.http.post(`${environment.apiUrl}/${this.registerr}`, person);
  }
  
  
  
  login(login: Login): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.loginn}`, login);
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