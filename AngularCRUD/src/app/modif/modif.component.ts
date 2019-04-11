import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Etudiant } from '../model/etudiant';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  formModif:FormGroup;
  flag:boolean=false;

  constructor(private eService:EtudiantService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.formModif=new FormGroup({
      id:new FormControl(['']),
      nom:new FormControl(['']),
      prenom:new FormControl(['']),
      age:new FormControl(['']),
    })

    // récupérer l'id optionnel de la requête
    let ide;
    this.ar.params.subscribe((params)=>{
                                        ide=params.id;
                                        if(ide){
                                          this.eService.findEtudiant(ide).subscribe((result)=>{
                                                                                                this.formModif.setValue(result);
                                                                                              })
                                                }
                                        });

  }

  public modifier(){
    
    let eIn:Etudiant = this.formModif.value;

    this.eService.updateEtudiant(eIn).subscribe(
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
