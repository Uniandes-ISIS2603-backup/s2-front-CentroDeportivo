import { Maquina } from './maquina';
import { Ejercicio } from '../ejercicio/ejercicio';

/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class MaquinaDetail extends Maquina {
    
    /** Los ejercicios **/
    ejercicios : Ejercicio[];
}