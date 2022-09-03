import { NgModule } from '@angular/core';
import { SqrtPipe } from './sqrt.pipe';



@NgModule({
  declarations: [SqrtPipe],
  exports: [SqrtPipe]
})
export class SqrtModule { }
