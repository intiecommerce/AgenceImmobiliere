import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProprietaireService } from '../Service/proprietaire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Proprietaire } from '../Model/proprietaire';

@Component({
  selector: 'app-modifier-proprietaire',
  templateUrl: './modifier-proprietaire.component.html',
  styleUrls: ['./modifier-proprietaire.component.css']
})
export class ModifierProprietaireComponent implements OnInit {

  formModif: FormGroup;
  flag: boolean = false;

  constructor(private propService: ProprietaireService, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.formModif = new FormGroup({
      id: new FormControl(['']),
      nom: new FormControl(['']),
      prenom: new FormControl(['']),
      mail: new FormControl(['']),
      mdp: new FormControl(['']),
      telephone: new FormControl(['']),
      adresse: new FormGroup({
        nomAdresse: new FormControl(['']),
        codePostal: new FormControl(['']),
        ville: new FormControl(['']),
        pays: new FormControl([''])
      })
    })

    let ide;
    this.ar.params.subscribe(
      (params) => {
        ide = params.id;
        if (ide) {
          this.propService.chercherPropriotaireParId(ide).subscribe(
            (result) => {
              this.formModif.setValue(result);
            })
        }
      });
  }


  public update() {
    let propUp: Proprietaire = this.formModif.value;

    this.propService.chercherPropriotaireParId(propUp.id).subscribe(
      (result) => {
        this.formModif.setValue(result);
      });
  }

  public modifier() {
    let propIn: Proprietaire = this.formModif.value;
    this.propService.modifierProprietaire(propIn).subscribe(
      (data) => {
        this.router.navigate(['home']);
        this.flag = false;
      },
      (error) => {
        this.flag = true;
      });
  }

}
