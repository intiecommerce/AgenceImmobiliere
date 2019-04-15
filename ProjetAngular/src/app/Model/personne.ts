import { Adresse } from './adresse';

export class Personne {

    public id:number;
    public nom:string;
    public prenom:string;
    public mail:string;
    public mdp:string;
    public telephone:string;
    public role:string;
    public active:boolean;

    public adresse:Adresse;

    constructor(){}

}
