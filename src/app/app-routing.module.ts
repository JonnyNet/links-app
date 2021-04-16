import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'links',
    loadChildren: () => import('./link/link.module').then(m => m.LinkModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule),
  },
  {
    path: '**',
    redirectTo: 'links/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
