import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proprietaire } from '../Model/proprietaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  url = "http://localhost:8080/AppSystemeAgence/rest/proprietaire/"
  constructor(private http: HttpClient) { }

  //methode modifier client
  public modifierProprietaire(propIn: Proprietaire): Observable<Proprietaire> {
    return this.http.put<Proprietaire>(`${this.url}modifCli`, propIn);
  }

  //methode rechercher client
  public chercherPropriotaireParId(id: number) {
    return this.http.get(`${this.url}recProp?pId=${id}`);
  }


}
