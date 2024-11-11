import { Routes } from '@angular/router'
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component'
import { CreateProfileComponent } from './create-profile/create-profile.component'
import { CustomerProfileComponent } from './customer-profile/customer-profile.component'

export const customerRoutes: Routes = [
    {
        path: '',
        component: CustomerLayoutComponent,
        children: [
            {path: 'profile', component:CustomerProfileComponent},
            {path: 'create-profile', component:CreateProfileComponent}
        ]
    }
]