import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url="http://localhost:8081/AppSystemeAgence/client/"
  constructor(private http:HttpClient) { }

  //methode ajouter client
  public ajouterClient(clIn:Client):Observable<Client>{
    return this.http.post<Client>(`${this.url}ajoutCli`,clIn);
  }

  //methode modifier client
  public modifierClient(clIn:Client):Observable<Client>{
    return this.http.put<Client>(`${this.url}modifCli`,clIn);
  }

  //methode rechercher client
  public chercherClientParId(id:number){
    return this.http.get(`${this.url}recCli?pId=${id}`);
  }

  //methode afficher liste des biens a louer
  public afficherTousBaL(){
    return this.http.get(`${this.url}listeBaL`);
  }

  //methode rechercher un bien a louer par son id
  public chercherBaLParId(id:number){
    return this.http.get(`${this.url}recBaL?pId=${id}`);
  }

  //methode afficher biens a vendre
}
