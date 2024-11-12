import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-plan',
  standalone: true,
  imports: [],
  templateUrl: './customer-plan.component.html',
  styleUrl: './customer-plan.component.css'
})
export class CustomerPlanComponent {

  private router = inject(Router);

  onCreatePlan(): void {
    this.router.navigate(['/customer/plan/create-plan']);
  }
}
