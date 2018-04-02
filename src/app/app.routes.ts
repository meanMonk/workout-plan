import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { SuccessComponent } from './success/success.component';


export const APP_ROUTES: Routes = [  
    {
        path: '',
        component: WorkoutPlanComponent
    },
    {
        path: 'success',
        component: SuccessComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export  const AppRoutesModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
