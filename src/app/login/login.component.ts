import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { LoginModel } from '../Model/login.model';
import { UserServiceService } from '../user-service.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  constructor(private formBuilder:FormBuilder,private myservice:UserServiceService,private snackBar: MatSnackBar,private router:Router) { }

  user:LoginModel=new LoginModel();
  registerForm :FormGroup;
    ngOnInit() {
      this.registerForm=this.formBuilder.group({
        'email':[this.user.email,[
          Validators.required,
          Validators.email
        ]],
        'password':[this.user.password,[
          Validators.required,
       
        ]]});
    }
    login() : void {
      console.log(this.user.email);
      this.myservice.login(this.user).subscribe(
  
        (response :any) =>{
          
      //    console.log(response.HttpHeaders);
          if(response.body.statusCode ==200)
          {
            // this.snackBar.open(response.body.statusMessage,"",{
            //   duration:2000,})
            console.log(response);
             // console.log(response.headers);
              
           //   console.log(response.body.statusMessage);
           //  console.log(response.headers.get('jwtToken'));
             localStorage.setItem('jwtToken',response.headers.get('jwtTokenxxx'));
              //localStorage.setItem("token",JSON.stringify('jwtToken'));
            this.router.navigate(['/dashboard']);
          }
  
          else{
            this.snackBar.open(response.statusMessage,"Invalid Credentials",{
              duration:2000,})
            }},
  
            error =>{
              console.log("Error",error);
            }
      );
    }
    register():void{
      this.router.navigate(["register"])
    }

    forgetPassword() : void {
      this.router.navigate(["forgetPassword"])
    }
    
  }

