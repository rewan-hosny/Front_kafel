import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthServicesService } from './services/auth-services.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front_kafel';
     isLoggedIn: boolean = false;
   
      constructor(private cdr: ChangeDetectorRef,private sharedService: SharedService,private authService: AuthServicesService, private router: Router, private jwtHelper: JwtHelperService,) { }

  ngOnInit(): void {
        this.sharedService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn; });
     const isLoggedInString = localStorage.getItem("isLoggedIn");
    this.isLoggedIn = isLoggedInString ? JSON.parse(isLoggedInString) : false;
        

    
  }
    logout(): void {
    // Clear user information from local storage and navigate back to login page
    localStorage.removeItem('Authorization');
    localStorage.removeItem('name');
    localStorage.removeItem('userid');

    // Set isLoggedIn to false and remove it from local storage
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');

      this.router.navigate(['/login']);
        this.cdr.detectChanges();
  }

}
