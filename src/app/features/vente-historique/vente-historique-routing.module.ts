import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenteHistoriqueComponent } from './vente-historique.component';
import { VenteHistoriqueStatisticComponent } from './vente-historique-statistic/vente-historique-statistic.component';


const routes: Routes = [ 
  {path: '',
component: VenteHistoriqueComponent
},
{
  path: 'historiqueStat/:id',
  component: VenteHistoriqueStatisticComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteHistoriqueRoutingModule { }
