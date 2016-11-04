import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { USER_ROUTES } from './user/user.routes';
const APP_ROUTES: Routes = [
    {path: 'user', children: USER_ROUTES},
    {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);