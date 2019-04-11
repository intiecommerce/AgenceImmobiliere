import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  // attributs du composant
  etudiants:any;

  // définir un constructeur et injecter UserService
  constructor(private eService:EtudiantService){}

  // redéfinir la méthode ngOnInit
  ngOnInit(){
    this.eService.getAllEtudiants().subscribe(
      (data) => {this.etudiants=data;},
      (erreur) => {console.log(erreur);}
      );

  }

  public deleteLien(ide:number){
    this.eService.deleteEtudiant(ide).subscribe((res)=>{
                                                        this.etudiants=this.etudiants.filter(e=>e.id!=ide);
    });
  }

}
