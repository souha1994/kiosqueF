import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexsComponent } from './indexs.component';
import { PistoletHistoryComponent } from './components/pistolet-history/pistolet-history.component';
import { PompesListComponent } from './components/pompes-list/pompes-list.component';


const routes: Routes = [
    {
        path: '',
        component: IndexsComponent
    },
    {
        path: 'historique/:id',
        component: PistoletHistoryComponent
    },
    {
        path: 'pompes/:id',
        component: PompesListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexsRoutingModule { }
