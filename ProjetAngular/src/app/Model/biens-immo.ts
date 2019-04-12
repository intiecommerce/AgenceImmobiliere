import { Adresse } from './adresse';
import { Personne } from './personne';
import { ClasseStandard } from './classe-standard';
import { Visite } from './visite';
import { Dossier } from './dossier';

export class BiensImmo {

    public id:number;
    public titre:string;
    public description:string;
    public statut:string;
    public superfice:number;
    public prix:number;
    public offre:string;
    public type:string;
    public dateMiseEnVente:Date;
    public dateDisponibilite:Date;
    public revenueCadastral:number;
    public nbrChambre:number;
    public photo:string;
    public adresse:Adresse;
    public proprietaire:Personne;
    public conseillerResponsable:Personne;
    public classeStandard:ClasseStandard;
    public visites:Array<Visite>;
    public dossiers:Array<Dossier>;

    constructor(){}
}
