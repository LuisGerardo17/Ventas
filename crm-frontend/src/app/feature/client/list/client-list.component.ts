import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService} from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  constructor(
    private clientService: ClientService
  ) { }

  clients: Client[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.clientService.findAll().subscribe(
      (response: Client[]) => {
        this.clients = response;
      }
    );
  }

  findByName(term: string){
    if (term.length===0){
      this.findAll();
    }

    if (term.length>=2){
      this.clientService.findByName(term).subscribe(
        (response: Client[]) => this.clients = response
      )
    }
    }

  }
