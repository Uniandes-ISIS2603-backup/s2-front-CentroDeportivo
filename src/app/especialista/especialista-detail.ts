import { Especialista } from './especialista';
import { Deportista } from '../deportista/deportista';

export class EspecialistaDetail extends Especialista {


    /**
     * Los deprotistas de cada especialista
     */
    deportistas: Deportista[];
}
