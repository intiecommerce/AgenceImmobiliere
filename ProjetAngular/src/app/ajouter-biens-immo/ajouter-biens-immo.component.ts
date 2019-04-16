import { Component, OnInit } from '@angular/core';

import { TouchSequence } from 'selenium-webdriver';
import { BiensImmo } from '../Model/biens-immo';
import { BiensALouer } from '../Model/biens-alouer';
import { BiensAVendre } from '../Model/biens-avendre';


@Component({
  selector: 'app-ajouter-biens-immo',
  templateUrl: './ajouter-biens-immo.component.html',
  styleUrls: ['./ajouter-biens-immo.component.css']
})
export class AjouterBiensImmoComponent implements OnInit {

  offres = ['A Vendre', 'A Louer'];
  typeVendres = ['Terrain', 'Maison', 'Appartement', 'Studio', 'Entrepot', 'Emplacement'];
  typeLouers = ['Maison', 'Appartement', 'Studio', 'Entrepot', 'Emplacement'];
  model = new BiensImmo();
  bienAVendreb: boolean;
  bienALouerb: boolean;
  bienALouer: BiensALouer;
  bienAVendre: BiensAVendre;
  terrain: boolean=false;
  constructor() { }

  ngOnInit() {

    
  }

  public choixOffre() {
    if (this.model.offre == 'A Vendre') {
      this.bienAVendreb=true;
      this.bienALouerb=false;
      this.bienAVendre.offre=this.model.offre;
    } else if(this.model.offre=='A Louer') {
      this.bienAVendreb=false;
      this.bienALouerb=true;
      this.bienALouer.offre=this.model.offre;
    } else {
      this.bienAVendreb=false;
      this.bienALouerb=false;
    }
  }

  public choixVendre(){
    if(this.model.type =='Terrain'){
      this.terrain=true;
      this.bienAVendre.type=this.model.type;

    }
  }

  public choixLouer(){

  }

}
