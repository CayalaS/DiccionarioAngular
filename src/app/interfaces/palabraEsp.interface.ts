import { PalabraEngSimple } from './palabraEng.interface';

export interface PalabraEsp {
    id: number;
    palabra: string;
    descripcion: string;
    fechaAlta: Date;
    fechaModificacion: Date;
    palabrasIngles: PalabraEngSimple;
}

export interface PalabraEspSimple {
    id: number;
    palabra: string;
    descripcion: string;
    fechaAlta: Date;
    fechaModificacion: Date;
}