import { Component, OnInit } from '@angular/core';
import { Visite } from '../Model/visite';
import { ConseillerService } from '../Service/conseiller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-visite',
  templateUrl: './ajouter-visite.component.html',
  styleUrls: ['./ajouter-visite.component.css']
})
export class AjouterVisiteComponent implements OnInit {

visIn:Visite=new Visite();
flag:boolean=false;


  constructor(private conService:ConseillerService,private router:Router) { }

  ngOnInit() {}

  public ajouter(){
    this.conService.ajouterVisite(this.visIn).subscribe(
      (res)=>{let visTemp:Visite=res;
        if(visTemp.id!=0){
          this.router.navigate(['home']);
          this.flag=false;
        }else{
          this.flag=true
        }
      
      
      });
  }
}
