import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import the route components
import { UserListComponent } from './routes/user-list/user-list.component';
import { UserDetailComponent } from './routes/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
