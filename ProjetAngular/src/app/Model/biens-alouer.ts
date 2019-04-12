import { BiensImmo } from './biens-immo';

export class BiensALouer extends BiensImmo {

    public caution:number;
    public loyer:number;
    public charges:number;
    public typeBail:string;
    public garniture:string;

    constructor(){
        super();
    }
}
