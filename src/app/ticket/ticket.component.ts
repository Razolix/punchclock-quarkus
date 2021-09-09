import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Ticket, TicketService} from "../../ticket.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  entries: Ticket[] = [];

  ticketForm = this.formBuilder.group({
    checkIn: '',
    checkOut: ''
  })

  updateTicketForm = this.formBuilder.group({
    id: '',
    checkIn: '',
    checkOut: ''
  })

  constructor(private ticketService: TicketService, private formBuilder: FormBuilder) {
    ticketService.ticketSubject$.subscribe(value => {
      this.entries = value;
    })
  }

  addTicket() {
    this.ticketService.addTicket(this.ticketForm.value);
  }

  removeETicket(id: number) {
    this.ticketService.removeTicket(id);
  }

  updateTicket() {
    this.ticketService.updateTicket(this.updateTicketForm.value);
  }
}
