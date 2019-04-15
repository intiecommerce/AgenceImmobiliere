import { Component, OnInit } from '@angular/core';
import { Proprietaire } from '../Model/proprietaire';
import { Adresse } from '../Model/adresse';
import { ProprietaireService } from '../Service/proprietaire.service';
import { Router } from '@angular/router';
import { ConseillerService } from '../Service/conseiller.service';

@Component({
  selector: 'app-ajouter-proprietaire',
  templateUrl: './ajouter-proprietaire.component.html',
  styleUrls: ['./ajouter-proprietaire.component.css']
})
export class AjouterProprietaireComponent implements OnInit {

  propIn: Proprietaire = new Proprietaire();
  flag: boolean = false;
  adresseIn: Adresse = new Adresse();

  constructor(private conService: ConseillerService, private router: Router) { }

  ngOnInit() {
  }

  public ajouter() {
    this.propIn.adresse = this.adresseIn;
    this.propIn.role = "proprietaire";
    this.propIn.active = true;

    this.conService.ajouterProprietaire(this.propIn).subscribe(
      (res) => {
        let proTemp: Proprietaire = res;
        if (proTemp.id != 0) {
          this.router.navigate(['']);
          this.flag = false;
        } else {
          this.flag = true;
        }
      })
  }



}
