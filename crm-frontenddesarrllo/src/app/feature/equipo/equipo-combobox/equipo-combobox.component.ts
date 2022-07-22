import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
@Component({
  selector: 'app-equipo-combobox',
  templateUrl: './equipo-combobox.component.html',
})
export class EquipoComboboxComponent implements OnInit {


  constructor(
    private equipoService: EquipoService
  ) { }
  equipos: Equipo[] = [];

  @Output() currentEquipoId = new EventEmitter<number>();
  @Input() idInput: number = 0;

  ngOnInit(): void {
    this.findAll();
    if (this.idInput!=0){
      console.log("seleccionando: "+ this.idInput);
    }
  }


  findAll():void {
    this.equipoService.findAll().subscribe(
      (response) => this.equipos = response
    )
  }


  onChange(value: string):void {
    this.currentEquipoId.emit(parseInt(value));
  }

}
