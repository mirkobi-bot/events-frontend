import { Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent }
];
