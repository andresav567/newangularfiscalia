import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { City } from './model/city';
import { Province } from './model/province';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }
  apiURL = 'http://localhost:8085/fiscalia/';
  
  getprovincias(): Observable<Province>{
    return this.http.get<Province>(this.apiURL +"provinces")
  }
  
  savecliente(usuario:City): Observable<City> {
 
    return this.http.post<City>(this.apiURL + 'save', usuario)  
  }  
  
  delete(id:number){

    return  this.http.delete<City>(this.apiURL + 'delete/'+id)      
  }  
  
}
