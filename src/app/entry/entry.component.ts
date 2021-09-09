import { Component, OnInit } from '@angular/core';
import {Entry, EntryService} from "../../entry.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  entries: Entry[] = [];

  entryForm = this.formBuilder.group({
    checkIn: '',
    checkOut: ''
  })

  updateEntryForm = this.formBuilder.group({
    id: '',
    checkIn: '',
    checkOut: ''
  })

  constructor(private entryService: EntryService, private formBuilder: FormBuilder) {
    entryService.entrySubject$.subscribe(value => {
      this.entries = value;
    })
  }

  addEntry() {
    this.entryService.addEntry(this.entryForm.value);
  }

  removeEntry(entryId: number)  {
    this.entryService.removeEntry(entryId);
  }

  updateEntry() {
    this.entryService.updateEntry(this.updateEntryForm.value);
  }
}
