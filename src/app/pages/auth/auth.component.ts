import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  username = '';
  password = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  onLogin() {
    this.http.post<any>('https://localhost:7143/api/users/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.authService.login(res.token, res.username, res.userid);
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Credenziali errate');
      }
    });
  }
}
