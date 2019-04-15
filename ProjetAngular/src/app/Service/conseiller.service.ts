import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Model/client';
import { Observable } from 'rxjs';
import { BiensAVendre } from '../Model/biens-avendre';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {
  url="http://localhost:8080/AppSystemeAgence/rest/client/"
  constructor(private http:HttpClient) { }

  //methode ajouter un bien Immobilier
  public ajouterBienAVendre(bvIn:BiensAVendre):Observable<BiensAVendre>{
    return this.http.post<BiensAVendre>(`${this.url}ajoutBaV`,bvIn);
  }
  
}
