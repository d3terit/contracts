import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatterCardComponent } from './matterCard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MatterCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MatterCardComponent]
})
export class MatterCardModule { }
