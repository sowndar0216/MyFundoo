import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { OtpVerify } from '../Model/otp.model';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
   
   constructor(private formBuilder:FormBuilder,private myservice:UserServiceService,private snackBar: MatSnackBar,private router:Router) { }

   otp:OtpVerify=new OtpVerify();
   registerForm :FormGroup;
   
   ngOnInit() {
    console.log(this.otp.otp);
    this.registerForm=this.formBuilder.group({'otp':[this.otp.otp]});}
      otpVerify(){
      console.log(this.otp);
      (this.myservice.otpVerify(this.otp)).subscribe(
    
        data => { 
          if(data.statusCode== 200)
          {
              this.snackBar.open('Successfully Register Please Confirm Your Email Address', 'Otp verfied', {
                duration: 2000,});
                this.router.navigate(['/login']);
          }
          else{
          this.snackBar.open(data.statusMessage,"Register Fails",{
            duration:2000,})
          }},
          
         error => {
             console.log("Error", error);
         }
  
        );
         
    }
  }