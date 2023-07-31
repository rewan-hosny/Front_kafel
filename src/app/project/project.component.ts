import { Component } from '@angular/core';
import { Project } from '../modules/Project.module';
import { ProjectServicesService } from '../services/project-services.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
// In your component.ts file
// projects: any[] = [
//   {
   
//     title: "need developer to do project .net",
//     status: "Completed",
    
//     user: "rewan hosny",
//     timestamp: "1 year ago",

//     priceRange: "$300 - $500"
//   },
//     {
 
//     title: "need developer to do project .net",
//     status: "Completed",
   
//     user: "rewan hosny",
//     timestamp: "1 year ago",
   
//     priceRange: "$250 - $500"
//   },
//   // Add more project data objects here
// ];
  viewProjectDetails(id: number) {
    this.router.navigate(['/project-details', id]);
  }
  projects: Project[] = [];
    constructor(private http: HttpClient,  private router: Router, private projectService: ProjectServicesService,) { }

    ngOnInit(): void {
    this.AllProject();
  }

   AllProject() {
  this.projectService.getAllProject().subscribe(
    (result: any) => {
      this.projects = result;
    },
    (error: any) => {
      console.log(error);
    }
  );
}
}
