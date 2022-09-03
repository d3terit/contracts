import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatterRoutingModule } from './matter-routing.module';
import { EditComponent } from './edit/edit.component';
import { RecordsComponent } from './records/records.component';
import { SchedulesComponent } from './schedules/schedules.component';

@NgModule({
  declarations: [EditComponent, RecordsComponent, SchedulesComponent],
  imports: [
    CommonModule,
    MatterRoutingModule,
  ]
})
export class MatterModule { }
