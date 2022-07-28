import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client-toolbar',
  templateUrl: './client-toolbar.component.html'
})
export class ClientToolbarComponent implements OnInit {

  constructor() {}

  @Output() term = new EventEmitter<string>();

  @Input() item: string= "";

  ngOnInit(): void {
  }

  onInput(inputTerm: string):void {
    this.term.emit(inputTerm);
  }

}
