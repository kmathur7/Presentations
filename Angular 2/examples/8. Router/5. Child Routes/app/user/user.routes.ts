import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserEditDetailComponent } from './user-edit-detail.component';
import { UserDetailComponent } from './user-detail.component';

export const USER_ROUTES: Routes = [
     {path: '', component: UserComponent},
    {path: 'detail', component: UserDetailComponent},
    {path: 'edit', component: UserEditDetailComponent}
]