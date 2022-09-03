import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMatterComponent } from './new-matter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewMatterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NewMatterComponent],
})
export class NewMatterModule {}
