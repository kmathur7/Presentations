import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserEditDetailComponent } from './user-edit-detail.component';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailGuard } from './user-detail.guard';
import { UserEditGuard } from './user-edit.guard';

export const USER_ROUTES: Routes = [
     {path: '', component: UserComponent},
    {path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard]},
    {path: 'edit', component: UserEditDetailComponent, canDeactivate:[UserEditGuard]}
]