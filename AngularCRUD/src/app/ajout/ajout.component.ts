import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';
import { Etudiant } from '../model/etudiant';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  eIn:Etudiant=new Etudiant();
  flag:boolean=false;

  constructor(private eService:EtudiantService, private router:Router) { }

  ngOnInit(){}

  public ajouter(){

    this.eService.addEtudiant(this.eIn).subscribe(
      (res) => {let eTemp:Etudiant=res;
                  if(eTemp.id!=0){
                    //aller dans accueil
                    this.router.navigate(['home']);
                    this.flag=false;
                    }
                  else{
                    this.flag=true;
                  }
                });
    }
}
