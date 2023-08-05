import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { CompleteMyProfile } from '../modules/CompleteProfile.module';
import { AddImage } from '../modules/AddImge.module';
import { GetImage } from '../modules/GetImage.module';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent {
  
  complete: CompleteMyProfile = new CompleteMyProfile();
  image: AddImage = new AddImage();
    getImage: GetImage = new GetImage();
    public imageSrc: string | undefined;

  constructor(private http: HttpClient, private router: Router, private authService: AuthServicesService) { }
  ngOnInit(): void {
    this.GetImage();
  }


    CompleteMyProfile():void {
    this.authService.CompleteProfile(this.complete).subscribe(
    () => {
        console.log(`offer item  updated successfully.`);
       this.router.navigate(['/controlPanel']);
   
   
    },
      (error: any) => {
        console.log(error);
      console.log(`Error  }: ${error}`);
    }
  );

    
    }
  
    onImageSelected(event: any) {
    this.image.imageUrl = event.target.files[0];
    this.AddImage();
  }
      AddImage():void {
    this.authService.UpdateImage(this.image).subscribe(
    () => {
        console.log(`Image  updated successfully.`);
      
   
   
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
