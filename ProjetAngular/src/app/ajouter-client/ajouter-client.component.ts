import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../Service/client.service';
import { Client } from '../Model/client';
import {Adresse} from '../Model/adresse';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {

  cliIn:Client=new Client();
  flag:boolean=false;
  AdresseIn:Adresse=new Adresse();

  constructor(private cliService:ClientService, private router:Router) { }

  ngOnInit(){}

  public ajouter(){
    this.cliIn.adresse=this.AdresseIn;
    this.cliIn.role = "client";
    this.cliIn.active = true;
    this.cliIn.acquereur= false;

    this.cliService.ajouterClient(this.cliIn).subscribe(
      (res) => {let cliTemp:Client=res;
                  if(cliTemp.id!=0){
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
