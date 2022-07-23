import { Client } from "../client/client";

export interface Acesor
 {
   acesorId:number,
   nombre: string,
   telefono: string,
   email: string,
   personId: number,
   enabled: boolean,
   created:Date,
   updated:Date,
   clients: Client[]

}
