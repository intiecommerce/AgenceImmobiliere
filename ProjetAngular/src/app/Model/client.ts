import { Dossier } from './dossier';
import { ClasseStandard } from './classe-standard';
import { Visite } from './visite';
import { Personne } from './personne';

export class Client extends Personne {

    public acquereur:boolean;
    public dossiers:Array<Dossier>;
    public classesStandards:Array<ClasseStandard>;
    public visites:Array<Visite>;

    constructor(){
        super();
    }
}
