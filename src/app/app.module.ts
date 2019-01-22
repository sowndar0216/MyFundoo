import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';
import {FormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import{MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AddNoteComponent } from './add-note/add-note.component';
import { RemainderComponent } from './remainder/remainder.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AddNoteComponent,
    RemainderComponent,
    ArchiveComponent,
    TrashComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    MaterialModule,
    BrowserAnimationsModule,
   FormsModule,
   MatGridListModule,
   MatCardModule,
   MatMenuModule,
   MatIconModule,
   MatButtonModule,
   LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
