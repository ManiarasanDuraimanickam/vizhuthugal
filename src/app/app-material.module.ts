import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule
  ,MatFormFieldModule,MatInputModule,MatCardModule,MatTableModule,MatPaginatorModule} from '@angular/material';
import { LayoutModule, } from '@angular/cdk/layout';
@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule
    ,MatFormFieldModule,MatInputModule,MatCardModule,MatTableModule,MatPaginatorModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule
  ,MatFormFieldModule,MatInputModule,MatCardModule,MatTableModule,MatPaginatorModule],
})
export class CustomMaterialModule { }
