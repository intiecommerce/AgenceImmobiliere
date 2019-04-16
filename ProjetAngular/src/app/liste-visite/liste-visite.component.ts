import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import "dhtmlx-scheduler";
import {} from "@types/dhtmlxscheduler";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-liste-visite',
  templateUrl: './liste-visite.component.html',
  styleUrls: ['./liste-visite.component.css']
})
export class ListeVisiteComponent implements OnInit {

  @ViewChild("scheduler_here") schedulerContainer: ElementRef;

  constructor(){}

  ngOnInit() {
    scheduler.init(this.schedulerContainer.nativeElement, new Date());

    
  }

}
