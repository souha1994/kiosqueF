import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenteComponent } from './vente.component';
import { VenteStatisticComponent } from './vente-statistic/vente-statistic.component';


const routes: Routes = [
  {
  path: '',
component: VenteComponent
},
{
  path: 'statistic/:id',
  component: VenteStatisticComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteRoutingModule { }
