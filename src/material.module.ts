// import{MatButtonModule,MatCheckboxModule,MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatSidenavModule,
MatListModule,MatExpansionModule,MatSnackBarModule,MatTooltipModule
} from '@angular/material';
@NgModule({
imports: [
CommonModule, 
MatTooltipModule,
MatExpansionModule,
MatToolbarModule,
MatButtonModule, 
MatCardModule,
MatInputModule,
MatDialogModule,
MatTableModule,
MatMenuModule,
MatIconModule,
MatProgressSpinnerModule,
MatListModule,
MatSidenavModule,
MatSnackBarModule
],
exports: [
  MatTooltipModule,
  MatSnackBarModule,
  MatExpansionModule,
CommonModule,
MatToolbarModule, 
MatButtonModule, 
MatCardModule, 
MatInputModule, 
MatDialogModule, 
MatTableModule, 
MatMenuModule,
MatIconModule,
MatProgressSpinnerModule,
MatListModule,
MatSidenavModule
],
})
  export class MaterialModule {
  }