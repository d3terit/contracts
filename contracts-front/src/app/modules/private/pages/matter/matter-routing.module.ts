import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { RecordsComponent } from './records/records.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  {path: "edit/:id", component: EditComponent},
  {path: "shedules/:id", component: SchedulesComponent},
  {path: "records/:id", component: RecordsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatterRoutingModule { }
