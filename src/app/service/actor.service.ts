import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Actor } from '../model/actor.class';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  url: string = "http://localhost:8080/actors/";
  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
  save(actor: Actor): Observable<JsonResponse> {
    return this.http.post(this.url, actor) as Observable<JsonResponse>;
  }
}

// pg. 129