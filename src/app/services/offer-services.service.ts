import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CreateOffer } from '../modules/CreateOffer.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class OfferServicesService {
  private Offer = "Offer/Offers";
  private GetCategory = "Offer/allCategory";
  
    constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private localStorage: LocalStorageService, private router: Router) { }

    GetOffer(id: number) {
          const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(
     `${environment.apiUrl}/${this.Offer}/${id}`,httpOptions
    );
    }
  CreateOffer(Offer: CreateOffer, id: number): Observable<any> {
        const token = localStorage.getItem('Authorization');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${environment.apiUrl}/${this.Offer}/${id}`, Offer,httpOptions);
  }
  

    GetAllCategories() {

    return this.http.get(
     `${environment.apiUrl}/${this.GetCategory}`
    );
    }


}
