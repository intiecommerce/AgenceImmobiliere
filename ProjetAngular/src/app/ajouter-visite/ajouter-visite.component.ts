import { Component, OnInit } from '@angular/core';
import { Visite } from '../Model/visite';
import { ConseillerService } from '../Service/conseiller.service';
import { Router } from '@angular/router';
import { Client } from '../Model/client';
import { BiensImmo } from '../Model/biens-immo';
import { Conseiller } from '../Model/conseiller';

@Component({
  selector: 'app-ajouter-visite',
  templateUrl: './ajouter-visite.component.html',
  styleUrls: ['./ajouter-visite.component.css']
})
export class AjouterVisiteComponent implements OnInit {

visIn:Visite=new Visite();
flag:boolean=false;
clientIn:Client=new Client();
conseillerIn:Conseiller=new Conseiller();
BienImmoIn:BiensImmo=new BiensImmo();


  constructor(private conService:ConseillerService,private router:Router) { }

  ngOnInit() {}

  public ajouter(){
    this.visIn.client=this.clientIn;
    this.visIn.conseillerVisite=this.conseillerIn;
    this.visIn.bienImmo=this.BienImmoIn;
    this.conService.ajouterVisite(this.visIn).subscribe(
      (res)=>{let visTemp:Visite=res;
        if(visTemp.id!=0){
          this.router.navigate(['home']);
          this.flag=false;
        }else{
          this.flag=true
        }
      
      
      });
  }
}
