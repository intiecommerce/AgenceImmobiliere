import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Model/client';
import { Observable } from 'rxjs';
import { BiensAVendre } from '../Model/biens-avendre';
import { Conseiller } from '../Model/conseiller';
import { Proprietaire } from '../Model/proprietaire';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {
  url="http://localhost:8080/AppSystemeAgence/rest/conseiller/"
  constructor(private http:HttpClient) { }


//methode modifier un conseiller
public modifierConseiller(cIn:Conseiller):Observable<Conseiller>{
  return this.http.put<Conseiller>(`${this.url}modifCon`,cIn);
}

//methode liste de proprietaire
public afficherTousProprietaire(){
  return this.http.get(`${this.url}listePro`);
}

//methode ajouter proprietaire
public ajouterProprietaire(pIn:Proprietaire):Observable<Proprietaire>{
  return this.http.post<Proprietaire>(`${this.url}ajoutPro`,pIn)
}

  //methode ajouter un bien Immobilier
  public ajouterBienAVendre(bvIn:BiensAVendre):Observable<BiensAVendre>{
    return this.http.post<BiensAVendre>(`${this.url}ajoutBaV`,bvIn);
  }
  
}
