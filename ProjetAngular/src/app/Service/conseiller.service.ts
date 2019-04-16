import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Model/client';
import { Observable } from 'rxjs';
import { BiensAVendre } from '../Model/biens-avendre';
import { Conseiller } from '../Model/conseiller';
import { Proprietaire } from '../Model/proprietaire';
import { BiensALouer } from '../Model/biens-alouer';
import { Visite } from '../Model/visite';
import { Dossier } from '../Model/dossier';

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
  return this.http.delete(`${this.url}supprPro?pId=${id}`)
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
  return this.http.delete(`${this.url}supprCli?pId=${id}`)
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
//afficher les biens a louer
public afficherTousBaL(){
  return this.http.get(`${this.url}listeBaL`)
}

//ajouter un bien a louer
public ajouterBaL(balIn:BiensALouer):Observable<BiensALouer>{
  return this.http.post<BiensALouer>(`${this.url}ajoutBaL`,balIn)
}

//modifier bien a louer
public modifierBaL(balIn:BiensALouer):Observable<BiensALouer>{
  return this.http.put<BiensALouer>(`${this.url}modifBaL`,balIn)
}

//supprimer bien a louer
public supprimerBaL(id:number){
  this.http.delete(`${this.url}supprBaL?pId=${id}`)
}

 //methode rechercher un bien a louer par son id
 public chercherBaLParId(id:number){
  return this.http.get(`${this.url}recBaL?pId=${id}`);
}

// *******************************************Biens A Vendre
//afficher les biens a louer
public afficherTousBaV(){
  return this.http.get(`${this.url}listeBaV`)
}

//ajouter un bien a louer
public ajouterBaV(bavIn:BiensAVendre):Observable<BiensAVendre>{
  return this.http.post<BiensAVendre>(`${this.url}ajoutBaV`,bavIn)
}

//modifier bien a louer
public modifierBaV(bavIn:BiensAVendre):Observable<BiensAVendre>{
  return this.http.put<BiensAVendre>(`${this.url}modifBaV`,bavIn)
}

//supprimer bien a louer
public supprimerBaV(id:number){
  this.http.delete(`${this.url}supprBaV?pId=${id}`)
}

 //methode rechercher un bien a louer par son id
 public chercherBaVParId(id:number){
  return this.http.get(`${this.url}recBaV?pId=${id}`);
}

// *******************************************Visite
//afficher les biens a louer
public afficherTousVisite(){
  return this.http.get(`${this.url}listeVis`)
}

//ajouter un bien a louer
public ajouterVisite(vIn:Visite):Observable<Visite>{
  return this.http.post<Visite>(`${this.url}ajoutVis`,vIn)
}

//modifier bien a louer
public modifierVisite(vIn:Visite):Observable<Visite>{
  return this.http.put<Visite>(`${this.url}modifVis`,vIn)
}

//supprimer bien a louer
public supprimerVisite(id:number){
  this.http.delete(`${this.url}supprVis?pId=${id}`)
}

 //methode rechercher un bien a louer par son id
 public chercherVisiteParId(id:number){
  return this.http.get(`${this.url}recVis?pId=${id}`);
}

// *******************************************Dossier
//afficher les biens a louer
public afficherTousDossier(){
  return this.http.get(`${this.url}listeDos`)
}

//ajouter un bien a louer
public ajouterDossier(dIn:Dossier):Observable<Dossier>{
  return this.http.post<Dossier>(`${this.url}ajoutDos`,dIn)
}

//modifier bien a louer
public modifierDossier(dIn:Dossier):Observable<Dossier>{
  return this.http.put<Dossier>(`${this.url}modifDos`,dIn)
}

//supprimer bien a louer
public supprimerDossier(id:number){
  this.http.delete(`${this.url}supprDos?pId=${id}`)
}

 //methode rechercher un bien a louer par son id
 public chercherDossierParId(id:number){
  return this.http.get(`${this.url}recDos?pId=${id}`);
}

// *******************************************classe standard
  //rechercher une classe standard par son id
  public chercherClasseStandardParClient(id:number){
    return this.http.get(`${this.url}recCstdByCli?pId=${id}`)
  }


}
