import { Authority } from "../authority/authority";

export interface Acesor
 {
   acesorId:number,
   nombre: string,
   telefono: string,
   email: string,
   equipoid: number,
   enabled: boolean,
   created:Date,
   updated:Date,
   authorities: Authority[]

}
