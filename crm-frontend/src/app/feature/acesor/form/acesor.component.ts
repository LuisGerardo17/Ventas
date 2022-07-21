import { Component, OnInit } from '@angular/core';
import { Acesor } from '../acesor';
import { AcesorService} from '../acesor.service';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthorityService } from '../../authority/authority.service';
import { Authority } from '../../authority/authority';
@Component({
  selector: 'app-acesor',
  templateUrl: './acesor.component.html'
})
export class AcesorComponent implements OnInit {
   currentAcesor: Acesor =  this.resetAcesor();

  //INYECTAMOS EL SERVICIO
  constructor(
    private acesorService: AcesorService,
    private activedRoute: ActivatedRoute,
    private route:Router,
    private authorityService: AuthorityService
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let acesorId:string="";
         if (params.get("id")){
          acesorId = params.get("id")!;
           this.findById(parseInt(acesorId));
         }
      }
    )
  }

  save():void{
     this.acesorService.save(this.currentAcesor)
     .subscribe(
      (response) => {
        console.log("registro guardado");
         this.currentAcesor = this.resetAcesor();
         this.route.navigate(['/layout/acesor-list']);
        }
      )
     }
//Read
findById(acesorId: number): void{
  this.acesorService.findById(acesorId)
  .subscribe(
    (response:Acesor)=> {
     this.currentAcesor = response;
     this.currentAcesor.authorities.forEach(
      (item) => {
        this.authorityService.findById(item.authorityId).subscribe(
          (auth:Authority) => item.nombre = auth.nombre
        )

      }
    )
    }
  )
}


resetAcesor(){
  return this.currentAcesor={
    acesorId: 0,
    nombre:"",
    telefono: "",
    email:"",
    equipoid: 0,
    enabled:true,
    created:new Date(),
    updated:new Date(),
    authorities: []
  }

 };

}




