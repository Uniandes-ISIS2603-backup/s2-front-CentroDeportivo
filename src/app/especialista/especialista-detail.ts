import { Especialista } from './especialista';
import { Deportista } from '../deportista/deportista';
import { Objetivo} from '../objetivo/objetivo';
export class EspecialistaDetail extends Especialista {


    /**
     * Los deprotistas de cada especialista
     */
    deportistas: Deportista[];
    /**
     * Los objetivos asociados a cada especialista
     */
    objetivos: Objetivo[];
}
