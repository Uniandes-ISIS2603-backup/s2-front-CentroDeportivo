import { Rutina } from './rutina';
import { Objetivo} from '../objetivo/objetivo';

export class RutinaDetail extends Rutina {
    /**
     * Los objetivos asociados a cada especialista
     */
    objetivos: Objetivo[];
}