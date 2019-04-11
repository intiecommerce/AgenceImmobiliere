import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';
import { Etudiant } from '../model/etudiant';

@Component({
  selector: 'app-suppr',
  templateUrl: './suppr.component.html',
  styleUrls: ['./suppr.component.css']
})
export class SupprComponent implements OnInit {

  id:number;
  flag:boolean=false;

  constructor(private eService:EtudiantService, private router:Router) { }

  ngOnInit() {
  }

  public supprimer(){

    this.eService.getAllEtudiants().subscribe(elem => {
      let liste1=elem;
      this.eService.deleteEtudiant(this.id).subscribe(
                                                      (data) => {
                                                                  this.eService.getAllEtudiants().subscribe(element=>{
                                                                                let liste2=element;
                                                                                if(liste1.toString()!=liste2.toString()){
                                                                                   //aller dans accueil
                                                                                  this.router.navigate(['home']);
                                                                                  this.flag=false;
                                                                                }else{
                                                                                  this.flag = true;
                                                                                }
                                                                  })
                                                                }
                                                      );
    });
  }

}
