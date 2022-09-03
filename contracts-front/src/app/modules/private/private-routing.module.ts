import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MatterComponent } from './pages/matter/matter.component';

const routes: Routes = [
  {path: 'admin', component:HomeComponent},
  {path: '', component:MatterComponent,
  loadChildren: () =>
  import('./pages/matter/matter-routing.module').then(
    (m) => m.MatterRoutingModule
  )}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
