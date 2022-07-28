import { ClientProduct } from "./ClientProduct";

export interface Client {
   clientId: number,
   name: string,
   dni: string,
   phone: string,
   email: string,
   enable: boolean,
   acesorId:number,
   created: Date,
   updated: Date,
   products: ClientProduct[],

}
