import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../Service/conseiller.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

   //attribut du composant
   liste: any;

  constructor(private conService: ConseillerService) { }

  ngOnInit() {
    this.conService.afficherTousClient().subscribe(
      (data) => { this.liste = data },
      (erreur) => { console.log(erreur)}
    )

  }

  public deleteLien(id: number) {
    this.conService.supprimerClient(id).subscribe(
      (result) => {
        this.liste = this.liste.filter(c => c.id != id)
      }
    )
  }

}
