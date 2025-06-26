import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service'; // assicurati del path corretto

interface Event {
  id?: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  events: Event[] = [];
  editIndex: number = -1;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    const url = `https://localhost:7143/api/users/user-events`;

    this.http.get<Event[]>(url)
      .subscribe(data => this.events = data);
  }

  addNewEvent(): void {
    const newEvent: Event = {
      title: '',
      description: '',
      startDate: '',
      endDate: ''
    };
    this.events.unshift(newEvent);
    this.editIndex = 0;
  }

  saveEvent(index: number): void {
    const event = this.events[index];

    const url = `https://localhost:7143/api/Events/`;

    this.http.post<Event>(url, event)
      .subscribe({
        next: (savedEvent) => {
          this.events[index] = savedEvent;
          this.editIndex = -1;
          console.log('Evento salvato:', savedEvent);
        },
        error: (err) => {
          console.error('Errore durante il salvataggio evento:', err);
        }
      });
  }

  deleteEvent(index: number): void {
    const event = this.events[index];

     const url = `https://localhost:7143/api/Events/${event.id}`;
  
      this.http.delete(url)
        .subscribe({
          next: () => {
            this.events.splice(index, 1);
            console.log('Evento eliminato con successo');
          },
          error: (err) => {
            console.error('Errore durante l\'eliminazione dell\'evento:', err);
          }
        });
  }
}
