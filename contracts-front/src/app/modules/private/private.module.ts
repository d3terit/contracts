import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MattersModule } from '@shared/components/matters/matters.module';
import { MatterComponent } from './pages/matter/matter.component';
import { SideBarEditModule } from '@shared/components/side-bar-edit/side-bar-edit.module';
import { MatterModule } from './pages/matter/matter.module';
@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    MatterComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MattersModule,
    SideBarEditModule,
    MatterModule
  ]
})
export class PrivateModule { }
