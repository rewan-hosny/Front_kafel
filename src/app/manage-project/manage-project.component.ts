import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { JwtHelperService } from '@auth0/angular-jwt';

import { GetImage } from '../modules/GetImage.module';
import { OfferServicesService } from '../services/offer-services.service';
import { Message } from '../modules/Message.module';
import { ActivatedRoute } from '@angular/router';
import { AcceptedOffer } from '../modules/acceptedOffer.module';
import { Person } from '../modules/person/person.module';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent {
  person: Person = new Person();
  message: Message = new Message();
  acceptoffer: AcceptedOffer = new AcceptedOffer();
  getImage: GetImage = new GetImage();
  messages: Message[] = [];
  massege: string = '';
  reciverId: number = 0;
     messagge:any; 

projectId!: number;
  public imageSrc: string | undefined;
  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute, private authService: AuthServicesService, private offerService: OfferServicesService, private jwtHelper: JwtHelperService) { }
  ngOnInit(): void {
    this.PersonData();
    this.GetImage();
     this.route.params.subscribe(params => {
    this.projectId = +params['id']; // Assuming the route parameter name is 'id'
       this.GetAcceptedOffer();
       this.GetMessages();
       this.getIfFreelance();

   
  });
  }
calculateReceiverId(): number {
    if (this.acceptoffer?.offers?.freelance?.person?.id === this.person?.id) {
      return this.acceptoffer?.offers?.project?.person?.id || 0;
    } else {
      return this.acceptoffer?.offers?.freelance?.person?.id || 0;
    }
}
  calculateReceiverName(): string {
  if (this.acceptoffer?.offers?.freelance?.person?.id === this.person?.id) {
    return  this.acceptoffer?.offers?.freelance?.person?.firstName || 'Unknown';
  } else {
    return this.acceptoffer?.offers?.project?.person?.firstName || 'Unknown';
  }
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
  GetMessages() {
  this.offerService.GetMessages(this.projectId).subscribe(
    (result: any) => {
      this.messages = result;
 
    },
    (error: any) => {
      console.log(error);
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
   submitForm() {
    // Call the Rewan function and pass the inputValue as an argument
    this.Rewan(this.massege);
  }

  Rewan(e: string) {
    this.PostMessage(e);
    console.log(e);
}
  PostMessage(e:string) {
    this.massege = e;
     this.reciverId = this.calculateReceiverId();
    this.offerService.PotsMessage(this.massege,this.reciverId, this.projectId).subscribe(
      () => {
        console.log(`message send successfully.`);
        this.GetMessages();
   
      },
      (error: any) => {
        console.log(`Error updating }: ${error}`);
      }
    );;
  }



}