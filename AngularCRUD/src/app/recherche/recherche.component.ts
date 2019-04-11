import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../model/etudiant';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  // attribut du composant
  id:number;
  etudiant: Etudiant;
  flag:boolean=false;
  affiche:boolean=false;

  constructor(private eService:EtudiantService) { }

  ngOnInit() {
  }

  public rechercher(){
    this.eService.findEtudiant(this.id).subscribe(
      (data) => {
                  if(data){
                    this.etudiant = data;
                    this.flag=false;
                    this.affiche=true;
                  }else{
                    this.flag = true;
                    this.affiche=false;
                  }
                },
      (error) => {
                    console.log(error);
                });
    }

}
