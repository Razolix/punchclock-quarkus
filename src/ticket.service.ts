import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Entry} from "./entry.service";

export interface Ticket {
  id: number;
  name: String;
  description: String;
  entries: Entry[];
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  url = 'http://localhost:8080/ticketes';
  ticketSubject$ = new BehaviorSubject<Ticket[]>([]);

  constructor(private http: HttpClient) {
    this.loadTickets();
  }

  loadTickets() {
    this.http.get<Ticket[]>(this.url).subscribe(ticket => {
      this.ticketSubject$.next(ticket as Ticket[])
    })
  }

  addTicket(ticket: Ticket) {
    this.http.post(this.url, ticket).subscribe(() => this.loadTickets());
  }

  removeTicket(id: number) {
    this.http.delete(this.url + '/' + id).subscribe(() => this.loadTickets());
  }

  updateTicket(ticket: Ticket) {
    this.http.put(this.url, ticket).subscribe(() => this.loadTickets());
  }
}
