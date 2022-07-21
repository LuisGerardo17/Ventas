import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
@Component({
  selector: 'app-equipo-combobox',
  templateUrl: './equipo-combobox.component.html',
})
export class EquipoComboboxComponent implements OnInit {

  equipos: Equipo[] = [];
  constructor(
    private equipoService: EquipoService
  ) { }


  @Output() currentEquipoId = new EventEmitter<number>();
  @Input() idInput: number = 0;

  ngOnInit(): void {
    this.findAll();
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
