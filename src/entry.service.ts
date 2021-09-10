import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

export interface Entry {
  id: number;
  checkIn: Date;
  checkOut: Date;
}

@Injectable({ providedIn: 'root' })
export class EntryService {
  url = 'http://localhost:8080/entries';
  entrySubject$ = new BehaviorSubject<Entry[]>([]);

  constructor(private http: HttpClient) {
    this.loadEntries();
  }

  loadEntries() {
    this.http.get<Entry[]>(this.url).subscribe(entries => {
      this.entrySubject$.next(entries as Entry[])
    })
  }

  addEntry(entry: Entry) {
    this.http.post(this.url, entry).subscribe(() => this.loadEntries());
  }

  getEntry(id: number) {
    return this.http.get<Entry>(this.url + '/' + id);
  }

  removeEntry(id: number) {
    this.http.delete(this.url + '/' + id).subscribe(() => this.loadEntries());
  }

  updateEntry(entry: Entry) {
    this.http.put(this.url, entry).subscribe(() => this.loadEntries());
  }
}
