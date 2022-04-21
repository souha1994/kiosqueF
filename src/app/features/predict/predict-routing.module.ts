import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictComponent } from './predict.component';
import { PredictHistoriqueComponent } from './predict-historique/predict-historique.component';


const routes: Routes = [
  {path: '',
  component: PredictComponent
  },
  {path: 'historique/:id',
  component: PredictHistoriqueComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictRoutingModule { }
