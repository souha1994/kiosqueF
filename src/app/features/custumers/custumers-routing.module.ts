import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationsListComponent } from './stations-list/stations-list.component';
import { TanksListComponent } from './tanks-list/tanks-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PompesListComponent } from '../indexs/components/pompes-list/pompes-list.component';
import { ListPompesComponent } from './list-pompes/list-pompes.component';
import { ListPistoletsComponent } from './list-pistolets/list-pistolets.component';


const routes: Routes = [
  {
    path : "" , 
    component : UsersListComponent
  },
 
  {
    path : "stationList/:id" , 
    component : StationsListComponent
  },
  {
    path : "tankList/:id" , 
    component : TanksListComponent
  },
  {
    path : "pompeList/:id" , 
    component : ListPompesComponent
  },
  {
    path : "pistoletList/:id" , 
    component : ListPistoletsComponent
  },
  {
    path : "profile" , 
    component : ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustumersRoutingModule { }
