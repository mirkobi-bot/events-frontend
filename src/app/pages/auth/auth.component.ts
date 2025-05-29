import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  username = '';
  password = '';

  constructor(private router: Router, private http: HttpClient) {}

  onLogin() {
    const loginPayload = {
      username: this.username,
      password: this.password
    };

    this.http.post<number>('https://localhost:7143/api/Users/login', loginPayload)
      .subscribe({
        next: (userId) => {
          if (userId > 0) {
            localStorage.setItem('userId', userId.toString());
            this.router.navigate(['/']);
          } else {
            alert('Username o password errati');
          }
        },
        error: (err) => {
          console.error('Errore durante il login:', err);
          alert('Errore durante la connessione al server.');
        }
      });
  }
}
