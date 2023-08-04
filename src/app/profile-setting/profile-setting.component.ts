import { Component } from '@angular/core';
import { Person } from '../modules/person/person.module';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GetImage } from '../modules/GetImage.module';
@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent {
  person: Person = new Person();
  updatedPerson: Person = new Person();
  getImage: GetImage = new GetImage();
    public imageSrc: string | undefined;
  constructor(private http: HttpClient,  private router: Router, private authService:AuthServicesService, private jwtHelper: JwtHelperService) { }
    ngOnInit(): void {
      this.PersonData();
      this.GetImage();
  }
  
   PersonData() {
  this.authService.GetUser().subscribe(
    (result: any) => {
      this.person = result;
    },
    (error: any) => {
      console.log(error);
    }
  );
}

      UpdatePerson():void {
    this.authService.UpdateUser(this.updatedPerson).subscribe(
    (response: any) => {
        console.log(`Image  updated successfully.`);
        this.PersonData();
      localStorage.setItem('Authorization', response.token);

      // Decode the JWT token to get user information
      const decodedToken = this.jwtHelper.decodeToken(response.token);

      // Store user information in local storage
      localStorage.setItem('name', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
      localStorage.setItem('userid', decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
      this.router.navigate(['/home']);
   
   
    },
      (error: any) => {
        console.log(error);
      console.log(`Error  }: ${error}`);
    }
  );

    
      }
     GetImage() {
  this.authService.GetImage().subscribe(
    (result: any) => {
      this.getImage = result;
       this.imageSrc = `data:image/jpeg;base64,${this.getImage.imageUrl}`;
    },
    (error: any) => {
      console.log(error);
    }
  );
}



}
