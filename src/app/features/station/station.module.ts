import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationRoutingModule } from './station-routing.module';
import { MapComponent } from './shared/map/map.component';
import { StationComponent } from './station.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { StationTanksComponent } from './station-tanks/station-tanks.component';
import { StationTanksStatisticComponent } from './station-tanks-statistic/station-tanks-statistic.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationModalModule } from 'app/shared/components/confirmation-modal/confirmation-modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeListStationComponent } from './employe-list-station/employe-list-station.component';
import { EmployeModalComponent } from './shared/employe-modal/employe-modal.component';


@NgModule({
  declarations: [MapComponent,StationComponent, StationTanksComponent, StationTanksStatisticComponent, EmployeListStationComponent, EmployeModalComponent],
  imports: [
    HighchartsChartModule,
    CommonModule,
    StationRoutingModule,
    HttpClientModule,
    ConfirmationModalModule,
    MatAutocompleteModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule,
    MatDialogModule
  ]
})
export class StationModule { }
