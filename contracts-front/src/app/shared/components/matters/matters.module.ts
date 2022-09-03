import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MattersComponent } from './matters.component';
import { MatterCardModule } from '../matterCard/matterCard.module';
import {PaginatorModule} from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SqrtModule } from '@shared/pipes/sqrt/sqrt.module';
import { ToolbarMattersModule } from '../toolbar-matters/toolbar-matters.module';

@NgModule({
  declarations: [MattersComponent],
  imports: [
    CommonModule,
    MatterCardModule,
    ToolbarMattersModule,
    PaginatorModule,
    BrowserAnimationsModule,
    SqrtModule
  ],
  exports: [MattersComponent]
})
export class MattersModule { }
