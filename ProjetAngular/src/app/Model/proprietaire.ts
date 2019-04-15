import { BiensImmo } from './biens-immo';
import { Personne } from './personne';

export class Proprietaire extends Personne {

    public telephonePro:string;
    public biensImmobilier:Array<BiensImmo>

    constructor(){
        super();
    }
}
