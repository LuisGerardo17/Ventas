import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-acesor-toolbar',
  templateUrl: './acesor-toolbar.component.html'
})
export class AcesorToolbarComponent implements OnInit {

  constructor() { }

  @Output() term = new EventEmitter<string>();

  @Input() item: string= "";

  ngOnInit(): void {
  }


  onInput(inputTerm: string):void {
    this.term.emit(inputTerm);
  }
}
