import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-biens-immo',
  templateUrl: './ajouter-biens-immo.component.html',
  styleUrls: ['./ajouter-biens-immo.component.css']
})
export class AjouterBiensImmoComponent implements OnInit {

  offres = ['A Vendre', 'A Louer'];

  constructor() { }

  ngOnInit() {
  }

}
