import { Visite } from './visite';
import { Dossier } from './dossier';
import { Personne } from './personne';
import { BiensImmo } from './biens-immo';

export class Conseiller extends Personne{

    public visites:Array<Visite>;
    public dossiers:Array<Dossier>;
    public bienImmo:Array<BiensImmo>;

    constructor(){
        super();
    }
}
