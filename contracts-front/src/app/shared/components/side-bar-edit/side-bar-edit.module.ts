import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarEditComponent } from './side-bar-edit.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SideBarEditComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SideBarEditComponent]
})
export class SideBarEditModule { }
