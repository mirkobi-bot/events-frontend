import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface Event {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Event[]>('https://localhost:7143/api/Events')
      .subscribe(data => this.events = data);
  }
}
