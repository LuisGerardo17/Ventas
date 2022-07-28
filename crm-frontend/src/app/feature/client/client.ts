import { ClientProduct } from "./ClientProduct";

export interface Client
 {
   clientId:number,
   name: string,
   dni: string,
   phone: string,
   email: string,
   created: Date,
   updated: Date,
   enable: boolean,
   acesorId: number,
   products: ClientProduct[],

}
