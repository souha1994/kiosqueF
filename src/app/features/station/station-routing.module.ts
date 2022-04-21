import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationComponent } from './station.component';
import { StationTanksComponent } from './station-tanks/station-tanks.component';
import { EmployeListStationComponent } from './employe-list-station/employe-list-station.component';
import { StationTanksStatisticComponent } from './station-tanks-statistic/station-tanks-statistic.component';


const routes: Routes = [ {
  path: '',
  component: StationComponent
},
{
  path: 'tanks/:id',
  component: StationTanksStatisticComponent
},

{
  path: 'Employee/:id',
  component: EmployeListStationComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationRoutingModule { }
