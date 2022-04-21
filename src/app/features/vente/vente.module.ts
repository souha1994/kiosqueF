import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenteRoutingModule } from './vente-routing.module';
import { VenteComponent } from './vente.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { VenteStatisticComponent } from './vente-statistic/vente-statistic.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FuseWidgetModule } from '@fuse/components';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [VenteComponent, VenteStatisticComponent],
  imports: [
    CommonModule,
    VenteRoutingModule,
    HighchartsChartModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    FuseWidgetModule,
    MatPaginatorModule
  ]
})
export class VenteModule {
 }
 