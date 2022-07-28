import { AcesorClient } from "./AcesorClient";

export interface Acesor
 {
   acesorId:number,
   nombre: string,
   telefono: string,
   email: string,
   personId: number,
   enabled: boolean,
   //clients:AcesorClient[],
   created:Date,
   updated:Date
   clients:AcesorClient[],

}
