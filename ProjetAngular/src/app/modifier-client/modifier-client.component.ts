import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/client';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../Service/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {

  formModif:FormGroup;
  flag:boolean=false;

  constructor(private cliService:ClientService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    
    this.formModif=new FormGroup({
      id:new FormControl(['']),
      nom:new FormControl(['']),
      prenom:new FormControl(['']), 
      mail:new FormControl(['']),
      mdp:new FormControl(['']),
      telephone:new FormControl(['']),
      adresse: new FormGroup({
        nomAdresse:new FormControl(['']),
        codePostal:new FormControl(['']),
        ville:new FormControl(['']),
        pays:new FormControl([''])
      })
     
    })

    // récupérer l'id optionnel de la requête
    let ide;
    this.ar.params.subscribe((params)=>{
                                        ide=params.id;
                                        if(ide){
                                          this.cliService.chercherClientParId(ide).subscribe((result)=>{
                                                                                                this.formModif.setValue(result);
                                                                                              })
                                                }
                                        });

  }

  public modifier(){
    
    let cliIn:Client = this.formModif.value;

    this.cliService.modifierClient(cliIn).subscribe(
      (data) => {
                    //aller dans accueil
                    this.router.navigate(['home']);
                    this.flag=false;
                },
      (error) => {
                    this.flag = true;
                });
    }

}
