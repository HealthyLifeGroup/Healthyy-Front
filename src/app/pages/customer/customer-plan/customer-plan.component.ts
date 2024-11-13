import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { UserPlanService } from '../../../core/services/user-plan.service';
import { UserPlanResponse } from '../../../shared/models/user-plan-response.model';
import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-plan',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './customer-plan.component.html',
  styleUrl: './customer-plan.component.css'
})
export class CustomerPlanComponent implements OnInit{

  planId: number |null = null;
  plan: UserPlanResponse | null = null;
  private storageService = inject(StorageService);
  private planService = inject(UserPlanService);

  ngOnInit(){
    this.loadPlan();
  }

  loadPlan(){
    this.planId = this.storageService.getPlanId();
    console.log(this.planId);
    if (this.planId !== null) {
      this.planService.getPlanById(this.planId).subscribe(
        (planDetails) => {
          console.log('Detalles del Plan:', planDetails);
          this.plan = planDetails;
        },
        (error) => {
          console.error('Error al obtener detalles del plan:', error);
        }
      );
    }
  }
}
