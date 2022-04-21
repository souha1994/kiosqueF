import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RavitaillementRoutingModule } from './ravitaillement-routing.module';
import { RavitaillementComponent } from './ravitaillement.component';
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
import { HistoriqueComponent } from './components/historique/historique.component';
import { RavitaillementModalComponent } from './components/ravitaillement-modal/ravitaillement-modal.component';


@NgModule({
  declarations: [RavitaillementComponent, HistoriqueComponent, RavitaillementModalComponent],
  imports: [
    CommonModule,
    RavitaillementRoutingModule,
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
    MatPaginatorModule,
  ]
})
export class RavitaillementModule { }
