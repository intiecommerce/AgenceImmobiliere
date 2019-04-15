import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url="http://localhost:8080/AppSystemeAgence/rest/client/"
  constructor(private http:HttpClient) { }

  // *******************************************Client
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

// *******************************************biens immo
//rechercher bien immo par classe standard
public chercherBienImmobilierParClasseStandard(id:number){
  return this.http.get(`${this.url}recBienByCstd?pId=${id}`)
}
// *******************************************biens a louer
  //methode afficher liste des biens a louer
  public afficherTousBaL(){
    return this.http.get(`${this.url}listeBaL`);
  }

  //methode rechercher un bien a louer par son id
  public chercherBaLParId(id:number){
    return this.http.get(`${this.url}recBaL?pId=${id}`);
  }

// *******************************************biens a vendre
  //methode afficher biens a vendre
  public afficherTousBaV(){
    return this.http.get(`${this.url}listeBaV`)
  }

  //methode rechercher un bien a vendre
  public chercherBaVParId(id:number){
    return this.http.get(`${this.url}recBaV?pId=${id}`)
  }
// *******************************************visite
//afficher liste visite
public afficherTousVis(){
  return this.http.get(`${this.url}listeVis`)
}

  //methode rechercher une visite par son id
  public chercherVisParId(id:number){
    return this.http.get(`${this.url}recVis?pId=${id}`)
  }

  // *******************************************dossier
  //methode afficher tous les dossiers
  public afficherTousDos(){
    return this.http.get(`${this.url}listeDos`)
  }

  //recherche un dossier par son id
  public chercherDosParId(id:number){
    return this.http.get(`${this.url}recDos?pId=${id}`)
  }

  // *******************************************classe standard
  //rechercher une classe standard par son id
  public chercherClasseStandardParClient(id:number){
    return this.http.get(`${this.url}recCstdByCli?pId=${id}`)
  }
}
