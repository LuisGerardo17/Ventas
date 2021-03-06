import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
})
export class ClientSearchComponent implements OnInit {


  constructor(
    private clientService: ClientService
  ) { }


  @Output() clientEmiter = new EventEmitter<Client>();
  clients: Client[] = [];

  ngOnInit(): void {

  }


  findByName(term: string):void {

    if (term.length>=2){
      this.clientService.findByName(term).subscribe(
        (response) => {
          console.log(term + " "+ response);
          this.clients = response
        }
      )
    }
    if (term.length===0){
      this.clients = [];
    }

  }

  onSelect(client:Client): void{
    this.clientEmiter.emit(client);
  }

}
