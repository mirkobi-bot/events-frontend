import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class HeaderComponent {
  constructor(public auth: AuthService) { }

  onLogout() {
    this.auth.logout();
  }

  log() {
    console.log("Navigazione verso login");
  }
}
