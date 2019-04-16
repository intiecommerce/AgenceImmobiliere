import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../Service/conseiller.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Visite } from '../Model/visite';

@Component({
  selector: 'app-modifier-visite',
  templateUrl: './modifier-visite.component.html',
  styleUrls: ['./modifier-visite.component.css']
})
export class ModifierVisiteComponent implements OnInit {

  formModif:FormGroup;
  flag:boolean=false;

  constructor(private ConService:ConseillerService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.formModif=new FormGroup({
      id:new FormControl(['']),
      dateVisite:new FormControl(['']),
      client: new FormGroup({
        id:new FormControl(['']),
      }),
      conseillerVisite: new FormGroup({
        id:new FormControl(['']),
      }), 
      bienImmo: new FormGroup({
        id:new FormControl(['']),
      }) 
    })
// récupérer l'id optionnel de la requête
let ide;
this.ar.params.subscribe((params)=>{
                                    ide=params.id;
                                    if(ide){
                                      this.ConService.chercherVisiteParId(ide).subscribe((result)=>{
                                                                                            this.formModif.setValue(result);
                                                                                          })
                                            }
                                    });

     

}
public modifier(){
    
  let viIn:Visite = this.formModif.value;

  this.ConService.modifierVisite(viIn).subscribe(
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