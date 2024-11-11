import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { authInverseGuard } from './core/guards/auth-inverse.guard';

export const routes: Routes = [
 {
  path: '',
  component: HomeComponent,
 },
 {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then(a => a.authRoutes),
    canActivate: [authInverseGuard]
  },
  {
    path: 'customer', 
    loadChildren: () => import('./pages/customer/customer.routes').then(c => c.customerRoutes),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: '',
  }
];