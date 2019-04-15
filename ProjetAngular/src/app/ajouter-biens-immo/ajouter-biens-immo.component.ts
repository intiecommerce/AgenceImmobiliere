import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../Service/conseiller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-biens-immo',
  templateUrl: './ajouter-biens-immo.component.html',
  styleUrls: ['./ajouter-biens-immo.component.css']
})
export class AjouterBiensImmoComponent implements OnInit {

  constructor(private conService:ConseillerService, private router:Router) { }

  ngOnInit() {

    
  }

}
