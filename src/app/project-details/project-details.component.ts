import { Component } from '@angular/core';
import { ProjectServicesService } from '../services/project-services.service';
import { OfferServicesService } from '../services/offer-services.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../modules/Project.module';
import { Offer } from '../modules/Offers.module';
import { CreateOffer } from '../modules/CreateOffer.module';
import { AuthServicesService } from '../services/auth-services.service';
import { Person } from '../modules/person/person.module';
import { AcceptedOffer } from '../modules/acceptedOffer.module';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  projectId!: number;
  person: Person = new Person();
    acceptoffer: AcceptedOffer = new AcceptedOffer();
  id!: number; // Property to store the project ID
  projectDetails:Project= new Project();
  console = console;
   messagge:any; 
  OfferDetails: Offer[] = [];
    acceptanceStatus: string | null = null; 
   createOffer: CreateOffer = new CreateOffer(); // Initialize createOffer with a new instance of CreateOffer
showBidSection: boolean = true;
  constructor(private http: HttpClient, private authService: AuthServicesService,private router: Router, private projectService: ProjectServicesService,private offerService:OfferServicesService , private route: ActivatedRoute,) { }
 ngOnInit(): void {
  // Retrieve the project ID from the route parameter
  this.route.params.subscribe(params => {
    this.projectId = +params['id']; // Assuming the route parameter name is 'id'
    

    // Load the 'showBidSection' value from browser storage when the component initializes
    const storedShowBidSection = localStorage.getItem(`showBidSection_${this.projectId}`);
    if (storedShowBidSection !== null) {
      this.showBidSection = JSON.parse(storedShowBidSection);
    }

    this.getProjectDetails();
    this.getOfferDetails();
    this.PersonData();
    this.getIfFreelance();
     this.GetAcceptedOffer();
  });
}
 GetAcceptedOffer() {
    this.offerService.GetAcceptProject(this.projectId).subscribe(
      (result: any) => {
        this.acceptoffer = result;
  
      },
      (error: any) => {
        console.log(error);
      }
    );
 }
  
hideBidSection() {
  this.showBidSection = false;
  // Save the 'showBidSection' value to browser storage when it changes
  localStorage.setItem(`showBidSection_${this.projectId}`, JSON.stringify(this.showBidSection));
}

// Rename the method to toggleBidSection
toggleBidSection() {
  this.showBidSection = !this.showBidSection;
  // Save the 'showBidSection' value to browser storage when it changes
  localStorage.setItem(`showBidSection_${this.projectId}`, JSON.stringify(this.showBidSection));
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
  getIfFreelance(){
  
    this.offerService.GetIfFreelance().subscribe(
      (data: any) => {
        // Handle the response, here 'data' contains the project details
        this.messagge = data;
        console.log(this.messagge)
        // You can now use 'this.projectDetails' to display the project details on your template
      },
      error => {
        // Handle the error if the API call fails
   
            console.log(this.messagge.freelance)
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
  
    getSafeImageUrl(base64String: string | undefined): string {
  if (base64String) {
    return 'data:image/jpeg;base64,' + base64String;
  } else {
   
    return ' ';
  }
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

    AcceptOffer(id: number): void {
    this.offerService.AcceptProject(id).subscribe(
      (response: any) => {
        console.log(`Accepted offer successfully.`);
  this.toggleBidSection(); 
        this.getOfferDetails();
        this.acceptanceStatus = `Offer accepted! You have accepted the offer with ID ${response.id}.`;
      },
      (error: any) => {
        console.log(`Error accepting offer: ${error}`);
        if (error.status === 400 && error.error === 'Invalid request. You have already accepted an offer for this project.') {
          this.acceptanceStatus = 'Invalid request! You have already accepted an offer for this project.';
        } else {
          this.acceptanceStatus = 'Error accepting offer. An error occurred while accepting the offer. Please try again later.';
        }
      }
    );
    }
    viewProjectDetails(id: number) {
    this.router.navigate(['/manageProject', id]);
  }


}
