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

  filteredProjects: any[] = []; 
  categoriesProjects: any[] = [];
   selectedCategoryId: number | null = null; // Property to store the selected category ID
  selectedStatus: number | null = null;   

  viewProjectDetails(id: number) {
    this.router.navigate(['/project-details', id]);
  }
  projects: Project[] = [];
    constructor(private http: HttpClient,  private router: Router, private projectService: ProjectServicesService,) { }

    ngOnInit(): void {
      this.AllProject();
      this.filteredProjects = this.projects;
    }
filterProjectsAndCategory(): void {
  const selectedCategoryId = this.selectedCategoryId;
  const selectedStatus = this.selectedStatus;

  if (selectedCategoryId === null && selectedStatus === null) {
    // If both selectedCategoryId and selectedStatus are null, show all projects
    this.filteredProjects = this.projects;
  } else if (selectedCategoryId === null) {
    // If selectedCategoryId is null, filter projects only by selectedStatus
    this.filteredProjects = this.projects.filter(project => project.statues === selectedStatus);
  } else if (selectedStatus === null) {
    // If selectedStatus is null, filter projects only by selectedCategoryId
    this.filteredProjects = this.projects.filter(project => project.categoryId === selectedCategoryId);
  } else {
    // Filter projects based on both selectedCategoryId and selectedStatus
    this.filteredProjects = this.projects.filter(project => project.categoryId === selectedCategoryId && project.statues === selectedStatus);
  }
}

selectCategory(categoryId: number|null): void {
  this.selectedCategoryId = categoryId;
  this.filterProjectsAndCategory();
}
selectStatus(status: number|null): void {
  this.selectedStatus = status;
  this.filterProjectsAndCategory();
}

  

   AllProject() {
  this.projectService.getAllProject().subscribe(
    (result: any) => {
      this.filteredProjects = result;
      this.categoriesProjects = result;
      this.projects = result;
    },
    (error: any) => {
      console.log(error);
    }
  );
   }
  
  getSafeImageUrl(base64String: string | undefined): string {
  if (base64String) {
    return 'data:image/jpeg;base64,' + base64String;
  } else {
   
    return '/assets/images/profile.png';
  }
}

}
