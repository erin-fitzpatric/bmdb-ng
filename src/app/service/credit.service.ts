import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  url: string = "http://localhost:8080/credits/";
 
  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
}
