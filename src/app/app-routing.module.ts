import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AddNoteComponent} from './add-note/add-note.component';
import {RemainderComponent} from './remainder/remainder.component';
import {ArchiveComponent} from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { OtpComponent } from './otp/otp.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { NotesComponent } from './notes/notes.component';
const appRoutes: Routes =[
 {
  path:'register',
  component:RegisterComponent
},
{
  path:'forgetPassword',
  component:ForgotPasswordComponent
},
{
  path:'login',
  component:LoginComponent
},


 
  
{
  path:'dashboard',
  component:DashboardComponent,
  children:[
{
  path:'addNote',
  component:AddNoteComponent
},
{
  path:'remainder',
  component:RemainderComponent
},
{
  path:'archive',
  component:ArchiveComponent
  },
  {
  path:'trash',
  component:TrashComponent
  
  }


  ]


},{
path:'otp',
component:OtpComponent
},
{
  path:'trash',
  component:TrashComponent
  
  },
  {
    path:'setpassword',
    component:SetPasswordComponent
  },{
    path:'notes',
    component:NotesComponent
  }

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})

export class AppRoutingModule { }
