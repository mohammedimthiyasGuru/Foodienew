import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class countrycode {
  
  constructor() { }

   country = [

    {
    "name": "India",
    "dial_code": "+91",
    "code": "IN"
    },
   
    {
    "name": "Malaysia",
    "dial_code": "+60",
    "code": "MY"
    },
    
    {
    "name": "Singapore",
    "dial_code": "+65",
    "code": "SG"
    },
    
    ]


}

  
 