import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';


const routes: Routes = [
  {
    path: "",
    component: FeaturesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      // ADmin part
      {
        path: 'custumers',
        loadChildren: () => import('./custumers/custumers.module').then(m => m.CustumersModule)
      },
      {
        path: 'stations',
        loadChildren: () => import('./station/station.module').then(m => m.StationModule)
      },
      {
        path: 'indexs',
        loadChildren: () => import('./indexs/indexs.module').then(m => m.IndexsModule)
      },
      {
        path: 'vente',
        loadChildren: () => import('./vente/vente.module').then(m => m.VenteModule )
      },
      {
        path: 'venteHistorique',
        loadChildren: () => import('./vente-historique/vente-historique.module').then(m => m.VenteHistoriqueModule )
      },
      {
        path: 'predict',
        loadChildren: () => import('./predict/predict.module').then(m => m.PredictModule )
      },
      {
        path: 'ravitaillement',
        loadChildren: () => import('./ravitaillement/ravitaillement.module').then(m => m.RavitaillementModule)
      },
      {
        path: 'alerts',
        loadChildren: () => import('./alerts/alerts.module').then(m => m.AlertsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
