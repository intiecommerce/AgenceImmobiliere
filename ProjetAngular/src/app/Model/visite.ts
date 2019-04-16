import { Personne } from './personne';
import { BiensImmo } from './biens-immo';
import { Time } from '@angular/common';

export class Visite {

    public id:number;
    public dateVisite:Date;
    public heureVisite:Time;
    public client:Personne;
    public conseillerVisite:Personne;
    public bienImmo:BiensImmo;

    constructor() {}

}
