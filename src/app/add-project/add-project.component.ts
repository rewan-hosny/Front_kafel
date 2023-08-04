import { Component } from '@angular/core';
import { OfferServicesService } from '../services/offer-services.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProjectServicesService } from '../services/project-services.service';

import { AllCategories } from '../modules/Category.module';
import { Project } from '../modules/Project.module';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  AllCategories: AllCategories[] = [];


  CreateProject: Project = new Project();
  

  constructor(private http: HttpClient,  private router: Router, private offerService:OfferServicesService,   private projectService: ProjectServicesService , private route: ActivatedRoute,) { }
 ngOnInit(): void {
    // Retrieve the project ID from the route parameter
   this.getCategories();
  }
  getCategories() {
    // Call the GetOneProject function with the project ID
    this.offerService.GetAllCategories().subscribe(
      (data: any) => {
        // Handle the response, here 'data' contains the project details
        this.AllCategories = data;
        // You can now use 'this.projectDetails' to display the project details on your template
      },
      error => {
        // Handle the error if the API call fails
        console.error('Error fetching project details:', error);
      });
}
  
  
  
  
  AddProjects():void {
    this.projectService.AddProject(this.CreateProject).subscribe(
    () => {
        console.log(`offer item  updated successfully.`);
       this.router.navigate(['/project']);
   
    },
    (error: any) => {
      console.log(`Error updating }: ${error}`);
    }
  );;

    
}


}
