import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../Service/conseiller.service';

@Component({
  selector: 'app-liste-proprietaire',
  templateUrl: './liste-proprietaire.component.html',
  styleUrls: ['./liste-proprietaire.component.css']
})
export class ListeProprietaireComponent implements OnInit {

  listeProp: any;

  constructor(private conService: ConseillerService) { }

  ngOnInit() {
    this.conService.afficherTousProprietaire().subscribe(
      (data) => { this.listeProp = data },
      (erreur) => { console.log(erreur) }
    )
  }

  public deleteLien(id: number) {
    this.conService.supprimerProprietaire(id).subscribe(
      (result) => { this.listeProp = this.listeProp.filter(p => p.id != id) }
    )
  }

}
