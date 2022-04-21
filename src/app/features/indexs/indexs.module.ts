import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexsRoutingModule } from './indexs-routing.module';
import { IndexsComponent } from './indexs.component';
import { MatButtonModule } from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { IndexModalComponent } from './components/index-modal/index-modal.component';
import { PistoletHistoryComponent } from './components/pistolet-history/pistolet-history.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PompesListComponent } from './components/pompes-list/pompes-list.component';
import { FuseWidgetModule } from '@fuse/components';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [IndexsComponent, PistoletHistoryComponent, IndexModalComponent, PompesListComponent],
  imports: [
    CommonModule,
    IndexsRoutingModule,
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

  ],
  entryComponents: [IndexModalComponent],
  providers:[    MatDatepickerModule,
  ]
})
export class IndexsModule { }
