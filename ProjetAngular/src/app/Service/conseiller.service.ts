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

// *******************************************Conseiller
//methode modifier un conseiller
public modifierConseiller(cIn:Conseiller):Observable<Conseiller>{
  return this.http.put<Conseiller>(`${this.url}modifCon`,cIn);
}

// *******************************************Proprietaire

//methode liste de proprietaire
public afficherTousProprietaire(){
  return this.http.get(`${this.url}listePro`);
}

//methode ajouter proprietaire
public ajouterProprietaire(pIn:Proprietaire):Observable<Proprietaire>{
  return this.http.post<Proprietaire>(`${this.url}ajoutPro`,pIn)
}

//methode modifier Proprietaire
public modifierProprietaire(pIn:Proprietaire):Observable<Proprietaire>{
  return this.http.put<Proprietaire>(`${this.url}modifPro`,pIn)
}

//methode supprimer Proprietaire
public supprimerProprietaire(id:number){
  return this.http.delete(`${this.url}supprPro/${id}`)
}

//methode rechercher un proprietaire
public chercherProprietaireParId(id:number){
  return this.http.get(`${this.url}recPro?pId=${id}`)
}

// *******************************************Client
//methode afficher liste Clients
public afficherTousClient(){
  return this.http.get(`${this.url}listeCli`)
}
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

//methode supprimer client
public supprimerClient(id:number){
  return this.http.delete(`${this.url}supprCli/${id}`)
}

//rechercher client par classe standard
public chercherClientParClasseStandard(id:number){
  return this.http.get(`{this.url}recCliByCstd?pId=${id}`)
}

// *******************************************Biens Immo
public chercherBienImmobilierParClasseStandard(id:number){
  return this.http.get(`${this.url}recBienByCstd?pId=${id}`)
}

// *******************************************Biens A Louer

public afficherTousBaL






  //methode ajouter un bien Immobilier
  public ajouterBienAVendre(bvIn:BiensAVendre):Observable<BiensAVendre>{
    return this.http.post<BiensAVendre>(`${this.url}ajoutBaV`,bvIn);
  }
  
  //methode 
}
