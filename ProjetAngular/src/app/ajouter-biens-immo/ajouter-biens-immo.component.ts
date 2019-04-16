import { Component, OnInit } from '@angular/core';

import { TouchSequence } from 'selenium-webdriver';
import { BiensImmo } from '../Model/biens-immo';
import { BiensALouer } from '../Model/biens-alouer';
import { BiensAVendre } from '../Model/biens-avendre';
import { Adresse } from '../Model/adresse';
import { ConseillerService } from '../Service/conseiller.service';


@Component({
  selector: 'app-ajouter-biens-immo',
  templateUrl: './ajouter-biens-immo.component.html',
  styleUrls: ['./ajouter-biens-immo.component.css']
})
export class AjouterBiensImmoComponent implements OnInit {

  offres = ['A Vendre', 'A Louer'];
  garnitures = ['Meublé', 'Non Meublé'];
  typeVendres = ['Terrain', 'Maison', 'Appartement', 'Studio', 'Entrepot', 'Emplacement'];
  typeLouers = ['Maison', 'Appartement', 'Studio', 'Entrepot', 'Emplacement'];
  offreSelect: string = "";
  typeSelect: string = "";
  bienAVendreb: boolean;
  bienALouerb: boolean;
  bienALouer: BiensALouer = new BiensALouer();
  bienAVendre: BiensAVendre;
  terrainb: boolean = false;
  maisonalouerb: boolean;
  adresseIn: Adresse = new Adresse();

  statut: string = "Disponible";
  constructor(private conService: ConseillerService) { }

  ngOnInit() {

  }

  public choixOffre() {
    if (this.offreSelect == 'A Vendre') {
      this.bienAVendreb = true;
      this.bienALouerb = false;
      this.bienAVendre.offre = this.offreSelect;
    } else if (this.offreSelect == 'A Louer') {
      this.bienAVendreb = false;
      this.bienALouerb = true;
      this.bienALouer.offre = this.offreSelect;
    } else {
      this.bienAVendreb = false;
      this.bienALouerb = false;
    }
  }

  public choixVendre() {
    if (this.typeSelect == 'Terrain') {
      this.terrainb = true;
      this.bienAVendre.type = this.typeSelect;
    } else if (this.typeSelect == 'Maison') {
      this.bienAVendre.type = this.typeSelect;
    }
  }

  public choixLouer() {
    if (this.typeSelect == 'Maison') {
      this.maisonalouerb = true;
      this.bienALouer.type = this.typeSelect;
    }

  }

  public ajouter() {
    console.log("suceeeeeeee");
    if (this.bienALouer.offre == 'A Louer') {
      this.bienAVendre.adresse = this.adresseIn;
      this.bienALouer.offre = this.offreSelect;
      console.log("suceeeeeeee moi");
      this.conService.ajouterBaL(this.bienALouer);
    }
  }

}
