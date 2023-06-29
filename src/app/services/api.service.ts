import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }
  get<T>(url: string){
    return this.http.get<any[]>('http://localhost:3000/api/' + url).pipe(shareReplay());
  }
  post<T>(url: string, data: any){
    return this.http.post<any[]>('http://localhost:3000/api/' + url, data);
  }
}
