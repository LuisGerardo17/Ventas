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
}
//otra forma de declarar el cosntructor como clase
//export class Person
   //   { constructor(
    //    public personId: number
     // ){}

     // }
