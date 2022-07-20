import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.findAll();
  }


  findAll():void {
    this.equipoService.findAll().subscribe(
      (response) => this.equipos = response
    )
  }

}
