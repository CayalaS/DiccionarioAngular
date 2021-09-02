import { PalabraEspSimple } from './palabraEsp.interface';

export interface PalabraEng {
    id: number;
    palabra: string;
    palabraEspanol: string;
    fechaAlta: Date;
    fechaModificacion: Date;
    espanolSimpleOutputDto: PalabraEspSimple;
}

export interface PalabraEngSimple {
    id: number;
    palabra: string;
    palabraEspanol: string;
    fechaAlta: Date;
    fechaModificacion: Date;
}