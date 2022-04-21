import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RavitaillementComponent } from './ravitaillement.component';
import { HistoriqueComponent } from './components/historique/historique.component';



const routes: Routes = [
  {path: '',
component: RavitaillementComponent
},
{path: 'historique/:id',
component: HistoriqueComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RavitaillementRoutingModule { }
