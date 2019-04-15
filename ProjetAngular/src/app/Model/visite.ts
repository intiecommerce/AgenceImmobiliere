import { Personne } from './personne';
import { BiensImmo } from './biens-immo';

export class Visite {

    public id:number;
    public dateVisite:Date;
    public heureVisite:Date;
    public client:Personne;
    public conseillerVisite:Personne;
    public bienImmo:BiensImmo;

    constructor() {}

}
