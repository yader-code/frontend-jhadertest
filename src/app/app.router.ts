import { RouterModule, Routes } from '@angular/router';
import { AdvisorComponent } from './components/advisor/advisor.component';
import { ClientComponent } from './components/client/client.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    { path: 'advisor', component: AdvisorComponent },
    { path: 'client', component: ClientComponent },
    { path: '', redirectTo: '/advisor', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
