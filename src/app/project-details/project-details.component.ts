import { Component } from '@angular/core';
import { ProjectServicesService } from '../services/project-services.service';
import { OfferServicesService } from '../services/offer-services.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../modules/Project.module';
import { Offer } from '../modules/Offers.module';
import { CreateOffer } from '../modules/CreateOffer.module';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
 projectId!: number; // Property to store the project ID
  projectDetails:Project= new Project();
     console = console;
  OfferDetails: Offer[] = [];
   createOffer: CreateOffer = new CreateOffer(); // Initialize createOffer with a new instance of CreateOffer

  constructor(private http: HttpClient,  private router: Router, private projectService: ProjectServicesService,private offerService:OfferServicesService , private route: ActivatedRoute,) { }
  ngOnInit(): void {
    // Retrieve the project ID from the route parameter
    this.route.params.subscribe(params => {
      this.projectId = +params['id']; // Assuming the route parameter name is 'id'
      this.getProjectDetails();
      this.getOfferDetails();
    });
  }
  getProjectDetails() {
    // Call the GetOneProject function with the project ID
    this.projectService.GetOneProject(this.projectId).subscribe(
      (data: any) => {
        // Handle the response, here 'data' contains the project details
        this.projectDetails = data;
        // You can now use 'this.projectDetails' to display the project details on your template
      },
      error => {
        // Handle the error if the API call fails
        console.error('Error fetching project details:', error);
      });
}

  CreateOffers():void {
    this.offerService.CreateOffer(this.createOffer,this.projectId).subscribe(
    () => {
        console.log(`offer item  updated successfully.`);
        this.getOfferDetails();
   
    },
    (error: any) => {
      console.log(`Error updating }: ${error}`);
    }
  );;

    
}
  getOfferDetails(){
  
    this.offerService.GetOffer(this.projectId).subscribe(
      (data: any) => {
        // Handle the response, here 'data' contains the project details
        this.OfferDetails = data;
        // You can now use 'this.projectDetails' to display the project details on your template
      },
      error => {
        // Handle the error if the API call fails
        console.error('Error fetching project details:', error);
      });
  }



}
