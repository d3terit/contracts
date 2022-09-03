import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guard/login.guard';
import { UnloginGuard } from './core/guard/unlogin.guard';
import { LayoutComponent } from './modules/private/pages/layout/layout.component';
import { MatterComponent } from './modules/public/pages/matter/matter.component';

const routes: Routes = [
  {
    path:'matter/:id',
    component:  MatterComponent
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/public/public-routing.module').then(
        (m) => m.PublicRoutingModule
      ),
    canActivate: [UnloginGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./modules/private/private-routing.module').then(
        (m) => m.PrivateRoutingModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
