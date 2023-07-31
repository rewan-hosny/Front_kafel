import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Project } from '../modules/Project.module';
import { AllCategories } from '../modules/Category.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProjectServicesService {
  private GetAllProject = "Project/GetAllProject";
  private OneProject = "Project/GetOneProject";
  private CreateProject = "Project";

 constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private localStorage: LocalStorageService, private router: Router) { }

   getAllProject() {
  const token = localStorage.getItem('Authorization');
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
  };
   
  return this.http.get(`${environment.apiUrl}/${this.GetAllProject}`, httpOptions);
   }
  
  
  GetOneProject(id: number) {
          const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(
     `${environment.apiUrl}/${this.OneProject}/${id}`,httpOptions
    );
  }
  

    AddProject(project: Project): Observable<any> {
        const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${environment.apiUrl}/${this.CreateProject}`, project,httpOptions);
  }


  
  
}
