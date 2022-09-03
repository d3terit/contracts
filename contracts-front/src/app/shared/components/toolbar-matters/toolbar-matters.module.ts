import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMattersComponent } from './toolbar-matters.component';
import { NewMatterModule } from '../new-matter/new-matter.module';



@NgModule({
  declarations: [ToolbarMattersComponent],
  imports: [
    CommonModule,
    NewMatterModule,

  ],
  exports: [ToolbarMattersComponent]
})
export class ToolbarMattersModule { }
