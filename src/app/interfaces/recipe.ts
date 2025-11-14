export interface Recipe{
    id : number;
    fechaEmision : string;
    plazoVencimiento : number;
    habilitado : boolean;
    doctor : string;
    detalles: string;
}