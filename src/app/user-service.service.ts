import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}  from '@angular/common/http';
import { RegisterModel } from './Model/register.model';
import { OtpVerify } from './Model/otp.model';
import { LoginModel } from './Model/login.model';



  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
@Injectable()

export class UserServiceService {

   private userUrl = 'http://localhost:8080/fundooNote/';
   constructor(private http:HttpClient) { }

   public createUser(user: RegisterModel) :any {
     return this.http.post<RegisterModel>(this.userUrl+'add',user);

   }
   public otpVerify(otp : OtpVerify) :any{
   return this.http.post<OtpVerify>(this.userUrl+'register',otp);

   }
   public login(user:LoginModel ) :any{
     console.log(user);
     return this.http.post<LoginModel>(this.userUrl+'login',user,{headers: new HttpHeaders().set("jwtTokenxxx","")
     ,observe:'response'});
     
   }
   public verifyUser(token:string):any
   {
     return this.http.get(this.userUrl+'verifyemail/'+token);
   }

}
