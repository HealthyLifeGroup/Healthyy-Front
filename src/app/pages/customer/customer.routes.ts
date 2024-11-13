import { Routes } from '@angular/router'
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component'
import { CreateProfileComponent } from './create-profile/create-profile.component'
import { CustomerProfileComponent } from './customer-profile/customer-profile.component'
import { CreatePlanComponent } from './create-plan/create-plan.component'
import { CustomerHomeComponent } from './customer-home/customer-home.component'
import { CustomerPlanComponent } from './customer-plan/customer-plan.component'

export const customerRoutes: Routes = [
    {
        path: '',
        component: CustomerLayoutComponent,
        children: [
            {path: 'profile', component:CustomerProfileComponent},
            {path: 'create-profile', component:CreateProfileComponent},
            {path: 'plan/create-plan', component: CreatePlanComponent },
            {path: 'home', component: CustomerHomeComponent},
            {path: 'plan', component: CustomerPlanComponent}
        ]
    }
]