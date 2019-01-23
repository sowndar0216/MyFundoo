// import{MatButtonModule,MatCheckboxModule,MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatSidenavModule,
MatListModule,MatExpansionModule
} from '@angular/material';
@NgModule({
imports: [
CommonModule, 
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
MatSidenavModule
],
exports: [
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