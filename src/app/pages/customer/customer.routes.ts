import { Routes } from '@angular/router'
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component'
import { CreateProfileComponent } from './create-profile/create-profile.component'
import { CustomerProfileComponent } from './customer-profile/customer-profile.component'
import { CreatePlanComponent } from './create-plan/create-plan.component'
import { CustomerHomeComponent } from './customer-home/customer-home.component'
import { CustomerPlanComponent } from './customer-plan/customer-plan.component'
import { CreateGoalComponent } from './create-goal/create-goal.component'
import { profileGuard } from '../../core/guards/profile.guard'
import { profileReverseGuard } from '../../core/guards/profile-reverse.guard'

export const customerRoutes: Routes = [
    {
        path: '',
        component: CustomerLayoutComponent,
        children: [
            {path: 'profile', component:CustomerProfileComponent},
            {path: 'create-profile', component:CreateProfileComponent, canActivate: [profileGuard]},
            {path: 'plan/create-plan', component: CreatePlanComponent},
            {path: 'home', component: CustomerHomeComponent, canActivate: [profileReverseGuard]},
            {path: 'plan', component: CustomerPlanComponent},
            {path: 'plan/goal', component: CreateGoalComponent}
        ]
    }
]