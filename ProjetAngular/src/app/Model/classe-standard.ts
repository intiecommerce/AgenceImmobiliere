import { Personne } from './personne';
import { BiensImmo } from './biens-immo';

export class ClasseStandard {

    public id:number;
    public typeBien:string;
    public description:string;
    public offre:string;
    public prixMax:number;
    public surfaceMin:number;
    public clients:Array<Personne>;
    public biensImmo:Array<BiensImmo>;

    constructor(){}
    
}
