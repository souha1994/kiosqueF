import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenteHistoriqueRoutingModule } from './vente-historique-routing.module';
import { VenteHistoriqueStatisticComponent } from './vente-historique-statistic/vente-historique-statistic.component';
import { VenteHistoriqueComponent } from './vente-historique.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
  declarations: [VenteHistoriqueStatisticComponent,VenteHistoriqueComponent],
  imports: [
    CommonModule,
    VenteHistoriqueRoutingModule,
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
export class VenteHistoriqueModule { }
