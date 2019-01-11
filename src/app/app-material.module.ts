import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule
  , MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatPaginatorModule,
  MatRadioModule, MatDatepickerModule, MatSelectModule, MatGridListModule
} from '@angular/material';
import { LayoutModule, } from '@angular/cdk/layout';
@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule
    , MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatDatepickerModule,
    MatSelectModule, MatGridListModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule
    , MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatPaginatorModule,
    MatRadioModule, MatDatepickerModule, MatSelectModule, MatGridListModule ],
})
export class CustomMaterialModule { }
