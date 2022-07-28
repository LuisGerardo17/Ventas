import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Acesor } from '../acesor';
import { AcesorService } from '../acesor.service';

@Component({
  selector: 'app-acesor-combobox',
  templateUrl: './acesor-combobox.component.html'
})
export class AcesorComboboxComponent implements OnInit {

  acesores: Acesor[] = [];

  constructor(
    private acesorService: AcesorService
  ) { }

  @Output() currentAcesorId = new EventEmitter<number>();
  @Input() idInput: number = 0;

  ngOnInit(): void {
    this.findAll();
    if (this.idInput!=0){
      console.log("seleccionando: "+ this.idInput);
  }
}

  findAll():void {
    this.acesorService.findAll().subscribe(
      (response: Acesor[]) => this.acesores = response
    )
  }

  onChange(value: string):void {
    this.currentAcesorId.emit(parseInt(value));
  }

}

