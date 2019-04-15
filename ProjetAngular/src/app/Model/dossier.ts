import { Client } from './client';
import { Personne } from './personne';
import { BiensImmo } from './biens-immo';

export class Dossier {

    public id:number;
    public dateAcquisition:Date;
    public client:Personne;
    public conseiller:Personne;
    public bienImmo:BiensImmo;

    constructor(){}
}
