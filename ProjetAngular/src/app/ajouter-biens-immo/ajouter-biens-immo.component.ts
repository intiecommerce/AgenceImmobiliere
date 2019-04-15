import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { BiensImmo } from '../Model/biens-immo';

@Component({
  selector: 'app-ajouter-biens-immo',
  templateUrl: './ajouter-biens-immo.component.html',
  styleUrls: ['./ajouter-biens-immo.component.css']
})
export class AjouterBiensImmoComponent implements OnInit {

  offres = ['Type offre','A Vendre', 'A Louer'];
  model = new BiensImmo();
  bienAVendre: boolean = false;
  bienALouer: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public choixOffre() {
    if (this.model.offre == 'A Vendre') {
      this.bienAVendre=true;
      this.bienALouer=false;
    } else if(this.model.offre=='A Louer') {
      this.bienAVendre=false;
      this.bienALouer=true;
    } else {
      this.bienAVendre=false;
      this.bienALouer=false;
    }
  }

}
