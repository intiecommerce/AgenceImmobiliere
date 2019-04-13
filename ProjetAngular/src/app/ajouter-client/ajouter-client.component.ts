import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../Service/client.service';
import { Client } from '../Model/client';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {

  cliIn:Client=new Client();
  flag:boolean=false;

  constructor(private cliService:ClientService, private router:Router) { }

  ngOnInit(){}

  public ajouter(){
    
    this.cliIn.role = "client";
    this.cliIn.active = true;

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
