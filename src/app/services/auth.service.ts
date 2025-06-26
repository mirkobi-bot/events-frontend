import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(token: string, username: string, userid: number) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', `${userid}`);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getUserId(): number | null {
    const id = localStorage.getItem('userId');
    return id ? Number(id) : null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
